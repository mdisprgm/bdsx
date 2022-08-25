import { CommandPermissionLevel } from "bdsx/bds/command";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { command } from "bdsx/command";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { CxxString, int32_t } from "bdsx/nativetype";
import { serverProperties } from "bdsx/serverproperties";

enum ModifyEv {
    set = 1,
    reset = 2,
    get = 3,
}
const EnumModifyEv = command.enum("server.modify", ModifyEv);

export namespace Server {
    let curr_players: number = 0;
    let max_players: number = Number(serverProperties["max-players"]) || 1234;
    export function setMaxPlayers(value: number): void {
        max_players = value;
    }
    export function setCurrentPlayers(value: number): void {
        curr_players = value;
    }
    export function setMotd(value: string): void {
        bedrockServer.serverInstance.setMotd(value);
    }
    export function getMaxPlayers(): number {
        return max_players;
    }
    export function getCurrentPlayers(): number {
        return curr_players;
    }
    export function getMotd(): string {
        return bedrockServer.serverInstance.getMotd();
    }
    export const cmd = command.register("server", "server manager", CommandPermissionLevel.Operator, 1);
}
events.packetAfter(MinecraftPacketIds.Login).on((pkt, ni) => {
    Server.setCurrentPlayers(Server.getCurrentPlayers() + 1);
});
events.networkDisconnected.on((ni) => {
    Server.setCurrentPlayers(Server.getCurrentPlayers() - 1);
});

events.queryRegenerate.on((ev) => {
    ev.currentPlayers = Server.getCurrentPlayers();
    ev.maxPlayers = Server.getMaxPlayers();
});

Server.cmd.overload(
    (p, o, op) => {
        switch (p.event) {
            case ModifyEv.set:
                if (!p.value) {
                    op.error("enter a value to set to motd");
                    return;
                } else {
                    Server.setMotd(p.value);
                    op.success("succeeded");
                }
                break;
            case ModifyEv.reset:
                Server.setMotd(serverProperties["server-name"]!);
                op.success("succeeded");
                break;
            case ModifyEv.get:
                op.success("Motd: " + bedrockServer.serverInstance.getMotd());
                break;
            default:
                op.error("unknown action");
                break;
        }
    },
    {
        event: EnumModifyEv,
        option: command.enum("server.action.motd", "motd"),
        value: [CxxString, true],
    },
);

Server.cmd.overload(
    (p, o, op) => {
        switch (p.event) {
            case ModifyEv.set:
                if (!p.value) {
                    op.error("enter a value to set to curr_players");
                    return;
                } else {
                    Server.setCurrentPlayers(p.value);
                    op.success("succeeded");
                }
                break;
            case ModifyEv.reset:
                Server.setCurrentPlayers(0);
                op.success("succeeded");
                break;
            case ModifyEv.get:
                op.success("Curr: " + Server.getCurrentPlayers().toString());
                break;
            default:
                op.error("unknown action");
                break;
        }
    },
    {
        event: EnumModifyEv,
        option: command.enum("server.action.curr_players", "curr_players"),
        value: [int32_t, true],
    },
);

Server.cmd.overload(
    (p, o, op) => {
        switch (p.event) {
            case ModifyEv.set:
                if (!p.value) {
                    op.error("enter a value to set to max_players");
                    return;
                } else {
                    Server.setMaxPlayers(p.value);
                    op.success("succeeded");
                }
                break;
            case ModifyEv.reset:
                Server.setMaxPlayers(0);
                op.success("succeeded");
                break;
            case ModifyEv.get:
                op.success("Max: " + Server.getMaxPlayers().toString());
                break;
            default:
                op.error("unknown action");
                break;
        }
    },
    {
        event: EnumModifyEv,
        option: command.enum("server.action.max_players", "max_players"),
        value: [int32_t, true],
    },
);

Server.cmd.overload(
    (p, o, op) => {
        op.success("Motd: " + Server.getMotd());
        const curr = Server.getCurrentPlayers();
        const max = Server.getMaxPlayers();
        op.success(`Players: (${curr}/${max})`);
    },
    {
        event: command.enum("server.status", "status"),
    },
);
