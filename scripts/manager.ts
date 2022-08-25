import { command } from "bdsx/command";
import { bedrockServer } from "bdsx/launcher";
import { CxxString } from "bdsx/nativetype";
import { serverProperties } from "bdsx/serverproperties";

enum ModifyEv {
    set = 1,
    reset = 2,
}
const EnumModifyEv = command.enum("server.modify", ModifyEv);

const Server = command.register("server", "server manager");

Server.overload(
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
