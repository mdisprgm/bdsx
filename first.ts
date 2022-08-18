import { CommandPermissionLevel, CommandRegistry } from "bdsx/bds/command";
import { makefunc } from "bdsx/makefunc";
import { CxxString, int32_t, void_t } from "bdsx/nativetype";
import { procHacker } from "bdsx/prochacker";

{
    const force_unlocked = new Set<string>([
        "allowlist",
        "changesetting",
        "codebuilder_actorinfo",
        "wsserver",
        "setmaxplayers",
        "querytarget",
        "listd",
        "gettopsolidblock",
    ]);

    const original = procHacker.hooking(
        "?registerCommand@CommandRegistry@@QEAAXAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@PEBDW4CommandPermissionLevel@@UCommandFlag@@3@Z",
        void_t,
        { crossThread: true },
        CommandRegistry,
        CxxString,
        makefunc.Utf8,
        int32_t,
        int32_t,
        int32_t,
    )((self, name, desc, perm, flag1, flag2) => {
        if (force_unlocked.has(name)) {
            flag1 = 1; // glowing name
            perm = CommandPermissionLevel.Operator;
        }
        return original(self, name, desc, perm, flag1, flag2);
    });
}
