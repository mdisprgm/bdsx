import { CommandPermissionLevel } from "bdsx/bds/command";
import { command } from "bdsx/command";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { CxxString, int32_t } from "bdsx/nativetype";
import { serverProperties } from "bdsx/serverproperties";

enum ModifyEv {
    set = 1,
    reset = 2,
}
const EnumModifyEv = command.enum("server.modify", ModifyEv);

export namespace Server {
    let CurrentPlayers: number = 0;
    let MaxPlayers: number = Number(serverProperties["max-players"]) || 1234;
    export function setMaxPlayers(value: number): void {
        MaxPlayers = value;
    }
    export function setCurrentPlayers(value: number): void {
        CurrentPlayers = value;
    }
    export function getMaxPlayers(): number {
        return MaxPlayers;
    }
    export function getCurrentPlayers(): number {
        return CurrentPlayers;
    }
    export const cmd = command.register("server", "server manager", CommandPermissionLevel.Operator, 1);
}

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
                    bedrockServer.serverInstance.setMotd(p.value);
                    op.success("succeeded");
                }
                break;
            case ModifyEv.reset:
                bedrockServer.serverInstance.setMotd(serverProperties["server-name"]!);
                op.success("succeeded");
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
