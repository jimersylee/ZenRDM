// Generated from redis/redis-doc commands.json. Keep this file small: metadata only, no full Markdown bodies.
export const REDIS_COMMAND_DOCS = {
  "ACL": {
    "name": "ACL",
    "syntax": "ACL",
    "summary": "A container for Access List Control commands.",
    "since": "6.0.0",
    "complexity": "Depends on subcommand.",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl.md"
  },
  "ACL CAT": {
    "name": "ACL CAT",
    "syntax": "ACL CAT [category]",
    "summary": "Lists the ACL categories, or the commands inside a category.",
    "since": "6.0.0",
    "complexity": "O(1) since the categories and commands are a fixed set.",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-cat.md"
  },
  "ACL DELUSER": {
    "name": "ACL DELUSER",
    "syntax": "ACL DELUSER username ...",
    "summary": "Deletes ACL users, and terminates their connections.",
    "since": "6.0.0",
    "complexity": "O(1) amortized time considering the typical user.",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-deluser.md"
  },
  "ACL DRYRUN": {
    "name": "ACL DRYRUN",
    "syntax": "ACL DRYRUN username command [arg ...]",
    "summary": "Simulates the execution of a command by a user, without executing the command.",
    "since": "7.0.0",
    "complexity": "O(1).",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-dryrun.md"
  },
  "ACL GENPASS": {
    "name": "ACL GENPASS",
    "syntax": "ACL GENPASS [bits]",
    "summary": "Generates a pseudorandom, secure password that can be used to identify ACL users.",
    "since": "6.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-genpass.md"
  },
  "ACL GETUSER": {
    "name": "ACL GETUSER",
    "syntax": "ACL GETUSER username",
    "summary": "Lists the ACL rules of a user.",
    "since": "6.0.0",
    "complexity": "O(N). Where N is the number of password, command and pattern rules that the user has.",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-getuser.md"
  },
  "ACL HELP": {
    "name": "ACL HELP",
    "syntax": "ACL HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "6.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-help.md"
  },
  "ACL LIST": {
    "name": "ACL LIST",
    "syntax": "ACL LIST",
    "summary": "Dumps the effective rules in ACL file format.",
    "since": "6.0.0",
    "complexity": "O(N). Where N is the number of configured users.",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-list.md"
  },
  "ACL LOAD": {
    "name": "ACL LOAD",
    "syntax": "ACL LOAD",
    "summary": "Reloads the rules from the configured ACL file.",
    "since": "6.0.0",
    "complexity": "O(N). Where N is the number of configured users.",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-load.md"
  },
  "ACL LOG": {
    "name": "ACL LOG",
    "syntax": "ACL LOG [count|reset]",
    "summary": "Lists recent security events generated due to ACL rules.",
    "since": "6.0.0",
    "complexity": "O(N) with N being the number of entries shown.",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-log.md"
  },
  "ACL SAVE": {
    "name": "ACL SAVE",
    "syntax": "ACL SAVE",
    "summary": "Saves the effective ACL rules in the configured ACL file.",
    "since": "6.0.0",
    "complexity": "O(N). Where N is the number of configured users.",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-save.md"
  },
  "ACL SETUSER": {
    "name": "ACL SETUSER",
    "syntax": "ACL SETUSER username [rule ...]",
    "summary": "Creates and modifies an ACL user and its rules.",
    "since": "6.0.0",
    "complexity": "O(N). Where N is the number of rules provided.",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-setuser.md"
  },
  "ACL USERS": {
    "name": "ACL USERS",
    "syntax": "ACL USERS",
    "summary": "Lists all ACL users.",
    "since": "6.0.0",
    "complexity": "O(N). Where N is the number of configured users.",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-users.md"
  },
  "ACL WHOAMI": {
    "name": "ACL WHOAMI",
    "syntax": "ACL WHOAMI",
    "summary": "Returns the authenticated username of the current connection.",
    "since": "6.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/acl-whoami.md"
  },
  "APPEND": {
    "name": "APPEND",
    "syntax": "APPEND key value",
    "summary": "Appends a string to the value of a key. Creates the key if it doesn't exist.",
    "since": "2.0.0",
    "complexity": "O(1). The amortized time complexity is O(1) assuming the appended value is small and the already present value is of any size, since the dynamic string library used by Redis will double the free space available on every reallocation.",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/append.md"
  },
  "ASKING": {
    "name": "ASKING",
    "syntax": "ASKING",
    "summary": "Signals that a cluster client is following an -ASK redirect.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@fast",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/asking.md"
  },
  "AUTH": {
    "name": "AUTH",
    "syntax": "AUTH [username] password",
    "summary": "Authenticates the connection.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the number of passwords defined for the user",
    "group": "connection",
    "acl": [
      "@fast",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/auth.md"
  },
  "BGREWRITEAOF": {
    "name": "BGREWRITEAOF",
    "syntax": "BGREWRITEAOF",
    "summary": "Asynchronously rewrites the append-only file to disk.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/bgrewriteaof.md"
  },
  "BGSAVE": {
    "name": "BGSAVE",
    "syntax": "BGSAVE [schedule]",
    "summary": "Asynchronously saves the database(s) to disk.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/bgsave.md"
  },
  "BITCOUNT": {
    "name": "BITCOUNT",
    "syntax": "BITCOUNT key [start end [byte|bit]]",
    "summary": "Counts the number of set bits (population counting) in a string.",
    "since": "2.6.0",
    "complexity": "O(N)",
    "group": "bitmap",
    "acl": [
      "@read",
      "@bitmap",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/bitcount.md"
  },
  "BITFIELD": {
    "name": "BITFIELD",
    "syntax": "BITFIELD key [encoding offset|[wrap|sat|fail] encoding offset value|encoding offset increment ...]",
    "summary": "Performs arbitrary bitfield integer operations on strings.",
    "since": "3.2.0",
    "complexity": "O(1) for each subcommand specified",
    "group": "bitmap",
    "acl": [
      "@write",
      "@bitmap",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/bitfield.md"
  },
  "BITFIELD_RO": {
    "name": "BITFIELD_RO",
    "syntax": "BITFIELD_RO key [encoding offset ...]",
    "summary": "Performs arbitrary read-only bitfield integer operations on strings.",
    "since": "6.0.0",
    "complexity": "O(1) for each subcommand specified",
    "group": "bitmap",
    "acl": [
      "@read",
      "@bitmap",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/bitfield_ro.md"
  },
  "BITOP": {
    "name": "BITOP",
    "syntax": "BITOP and|or|xor|not destkey key ...",
    "summary": "Performs bitwise operations on multiple strings, and stores the result.",
    "since": "2.6.0",
    "complexity": "O(N)",
    "group": "bitmap",
    "acl": [
      "@write",
      "@bitmap",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/bitop.md"
  },
  "BITPOS": {
    "name": "BITPOS",
    "syntax": "BITPOS key bit [start [end [byte|bit]]]",
    "summary": "Finds the first set (1) or clear (0) bit in a string.",
    "since": "2.8.7",
    "complexity": "O(N)",
    "group": "bitmap",
    "acl": [
      "@read",
      "@bitmap",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/bitpos.md"
  },
  "BLMOVE": {
    "name": "BLMOVE",
    "syntax": "BLMOVE source destination left|right left|right timeout",
    "summary": "Pops an element from a list, pushes it to another list and returns it. Blocks until an element is available otherwise. Deletes the list if the last element was moved.",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow",
      "@blocking"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/blmove.md"
  },
  "BLMPOP": {
    "name": "BLMPOP",
    "syntax": "BLMPOP timeout numkeys key ... left|right [count]",
    "summary": "Pops the first element from one of multiple lists. Blocks until an element is available otherwise. Deletes the list if the last element was popped.",
    "since": "7.0.0",
    "complexity": "O(N+M) where N is the number of provided keys and M is the number of elements returned.",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow",
      "@blocking"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/blmpop.md"
  },
  "BLPOP": {
    "name": "BLPOP",
    "syntax": "BLPOP key ... timeout",
    "summary": "Removes and returns the first element in a list. Blocks until an element is available otherwise. Deletes the list if the last element was popped.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the number of provided keys.",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow",
      "@blocking"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/blpop.md"
  },
  "BRPOP": {
    "name": "BRPOP",
    "syntax": "BRPOP key ... timeout",
    "summary": "Removes and returns the last element in a list. Blocks until an element is available otherwise. Deletes the list if the last element was popped.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the number of provided keys.",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow",
      "@blocking"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/brpop.md"
  },
  "BRPOPLPUSH": {
    "name": "BRPOPLPUSH",
    "syntax": "BRPOPLPUSH source destination timeout",
    "summary": "Pops an element from a list, pushes it to another list and returns it. Block until an element is available otherwise. Deletes the list if the last element was popped.",
    "since": "2.2.0",
    "complexity": "O(1)",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow",
      "@blocking"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/brpoplpush.md"
  },
  "BZMPOP": {
    "name": "BZMPOP",
    "syntax": "BZMPOP timeout numkeys key ... min|max [count]",
    "summary": "Removes and returns a member by score from one or more sorted sets. Blocks until a member is available otherwise. Deletes the sorted set if the last element was popped.",
    "since": "7.0.0",
    "complexity": "O(K) + O(M*log(N)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@slow",
      "@blocking"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/bzmpop.md"
  },
  "BZPOPMAX": {
    "name": "BZPOPMAX",
    "syntax": "BZPOPMAX key ... timeout",
    "summary": "Removes and returns the member with the highest score from one or more sorted sets. Blocks until a member available otherwise.  Deletes the sorted set if the last element was popped.",
    "since": "5.0.0",
    "complexity": "O(log(N)) with N being the number of elements in the sorted set.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@fast",
      "@blocking"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/bzpopmax.md"
  },
  "BZPOPMIN": {
    "name": "BZPOPMIN",
    "syntax": "BZPOPMIN key ... timeout",
    "summary": "Removes and returns the member with the lowest score from one or more sorted sets. Blocks until a member is available otherwise. Deletes the sorted set if the last element was popped.",
    "since": "5.0.0",
    "complexity": "O(log(N)) with N being the number of elements in the sorted set.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@fast",
      "@blocking"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/bzpopmin.md"
  },
  "CLIENT": {
    "name": "CLIENT",
    "syntax": "CLIENT",
    "summary": "A container for client connection commands.",
    "since": "2.4.0",
    "complexity": "Depends on subcommand.",
    "group": "connection",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client.md"
  },
  "CLIENT CACHING": {
    "name": "CLIENT CACHING",
    "syntax": "CLIENT CACHING yes|no",
    "summary": "Instructs the server whether to track the keys in the next request.",
    "since": "6.0.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-caching.md"
  },
  "CLIENT GETNAME": {
    "name": "CLIENT GETNAME",
    "syntax": "CLIENT GETNAME",
    "summary": "Returns the name of the connection.",
    "since": "2.6.9",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-getname.md"
  },
  "CLIENT GETREDIR": {
    "name": "CLIENT GETREDIR",
    "syntax": "CLIENT GETREDIR",
    "summary": "Returns the client ID to which the connection's tracking notifications are redirected.",
    "since": "6.0.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-getredir.md"
  },
  "CLIENT HELP": {
    "name": "CLIENT HELP",
    "syntax": "CLIENT HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-help.md"
  },
  "CLIENT ID": {
    "name": "CLIENT ID",
    "syntax": "CLIENT ID",
    "summary": "Returns the unique client ID of the connection.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-id.md"
  },
  "CLIENT INFO": {
    "name": "CLIENT INFO",
    "syntax": "CLIENT INFO",
    "summary": "Returns information about the connection.",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-info.md"
  },
  "CLIENT KILL": {
    "name": "CLIENT KILL",
    "syntax": "CLIENT KILL ip:port|[client-id]|[normal|master|slave|replica|pubsub]|[username]|[ip:port]|[ip:port]|[yes|no] ...",
    "summary": "Terminates open connections.",
    "since": "2.4.0",
    "complexity": "O(N) where N is the number of client connections",
    "group": "connection",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-kill.md"
  },
  "CLIENT LIST": {
    "name": "CLIENT LIST",
    "syntax": "CLIENT LIST [normal|master|replica|pubsub] [client-id ...]",
    "summary": "Lists open connections.",
    "since": "2.4.0",
    "complexity": "O(N) where N is the number of client connections",
    "group": "connection",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-list.md"
  },
  "CLIENT NO-EVICT": {
    "name": "CLIENT NO-EVICT",
    "syntax": "CLIENT NO-EVICT on|off",
    "summary": "Sets the client eviction mode of the connection.",
    "since": "7.0.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-no-evict.md"
  },
  "CLIENT NO-TOUCH": {
    "name": "CLIENT NO-TOUCH",
    "syntax": "CLIENT NO-TOUCH on|off",
    "summary": "Controls whether commands sent by the client affect the LRU/LFU of accessed keys.",
    "since": "7.2.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-no-touch.md"
  },
  "CLIENT PAUSE": {
    "name": "CLIENT PAUSE",
    "syntax": "CLIENT PAUSE timeout [write|all]",
    "summary": "Suspends commands processing.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-pause.md"
  },
  "CLIENT REPLY": {
    "name": "CLIENT REPLY",
    "syntax": "CLIENT REPLY on|off|skip",
    "summary": "Instructs the server whether to reply to commands.",
    "since": "3.2.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-reply.md"
  },
  "CLIENT SETINFO": {
    "name": "CLIENT SETINFO",
    "syntax": "CLIENT SETINFO libname|libver",
    "summary": "Sets information specific to the client or connection.",
    "since": "7.2.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-setinfo.md"
  },
  "CLIENT SETNAME": {
    "name": "CLIENT SETNAME",
    "syntax": "CLIENT SETNAME connection-name",
    "summary": "Sets the connection name.",
    "since": "2.6.9",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-setname.md"
  },
  "CLIENT TRACKING": {
    "name": "CLIENT TRACKING",
    "syntax": "CLIENT TRACKING on|off [client-id] [prefix ...] [bcast] [optin] [optout] [noloop]",
    "summary": "Controls server-assisted client-side caching for the connection.",
    "since": "6.0.0",
    "complexity": "O(1). Some options may introduce additional complexity.",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-tracking.md"
  },
  "CLIENT TRACKINGINFO": {
    "name": "CLIENT TRACKINGINFO",
    "syntax": "CLIENT TRACKINGINFO",
    "summary": "Returns information about server-assisted client-side caching for the connection.",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-trackinginfo.md"
  },
  "CLIENT UNBLOCK": {
    "name": "CLIENT UNBLOCK",
    "syntax": "CLIENT UNBLOCK client-id [timeout|error]",
    "summary": "Unblocks a client blocked by a blocking command from a different connection.",
    "since": "5.0.0",
    "complexity": "O(log N) where N is the number of client connections",
    "group": "connection",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-unblock.md"
  },
  "CLIENT UNPAUSE": {
    "name": "CLIENT UNPAUSE",
    "syntax": "CLIENT UNPAUSE",
    "summary": "Resumes processing commands from paused clients.",
    "since": "6.2.0",
    "complexity": "O(N) Where N is the number of paused clients",
    "group": "connection",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/client-unpause.md"
  },
  "CLUSTER": {
    "name": "CLUSTER",
    "syntax": "CLUSTER",
    "summary": "A container for Redis Cluster commands.",
    "since": "3.0.0",
    "complexity": "Depends on subcommand.",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster.md"
  },
  "CLUSTER ADDSLOTS": {
    "name": "CLUSTER ADDSLOTS",
    "syntax": "CLUSTER ADDSLOTS slot ...",
    "summary": "Assigns new hash slots to a node.",
    "since": "3.0.0",
    "complexity": "O(N) where N is the total number of hash slot arguments",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-addslots.md"
  },
  "CLUSTER ADDSLOTSRANGE": {
    "name": "CLUSTER ADDSLOTSRANGE",
    "syntax": "CLUSTER ADDSLOTSRANGE start-slot end-slot ...",
    "summary": "Assigns new hash slot ranges to a node.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the total number of the slots between the start slot and end slot arguments.",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-addslotsrange.md"
  },
  "CLUSTER BUMPEPOCH": {
    "name": "CLUSTER BUMPEPOCH",
    "syntax": "CLUSTER BUMPEPOCH",
    "summary": "Advances the cluster config epoch.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-bumpepoch.md"
  },
  "CLUSTER COUNT-FAILURE-REPORTS": {
    "name": "CLUSTER COUNT-FAILURE-REPORTS",
    "syntax": "CLUSTER COUNT-FAILURE-REPORTS node-id",
    "summary": "Returns the number of active failure reports active for a node.",
    "since": "3.0.0",
    "complexity": "O(N) where N is the number of failure reports",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-count-failure-reports.md"
  },
  "CLUSTER COUNTKEYSINSLOT": {
    "name": "CLUSTER COUNTKEYSINSLOT",
    "syntax": "CLUSTER COUNTKEYSINSLOT slot",
    "summary": "Returns the number of keys in a hash slot.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-countkeysinslot.md"
  },
  "CLUSTER DELSLOTS": {
    "name": "CLUSTER DELSLOTS",
    "syntax": "CLUSTER DELSLOTS slot ...",
    "summary": "Sets hash slots as unbound for a node.",
    "since": "3.0.0",
    "complexity": "O(N) where N is the total number of hash slot arguments",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-delslots.md"
  },
  "CLUSTER DELSLOTSRANGE": {
    "name": "CLUSTER DELSLOTSRANGE",
    "syntax": "CLUSTER DELSLOTSRANGE start-slot end-slot ...",
    "summary": "Sets hash slot ranges as unbound for a node.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the total number of the slots between the start slot and end slot arguments.",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-delslotsrange.md"
  },
  "CLUSTER FAILOVER": {
    "name": "CLUSTER FAILOVER",
    "syntax": "CLUSTER FAILOVER [force|takeover]",
    "summary": "Forces a replica to perform a manual failover of its master.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-failover.md"
  },
  "CLUSTER FLUSHSLOTS": {
    "name": "CLUSTER FLUSHSLOTS",
    "syntax": "CLUSTER FLUSHSLOTS",
    "summary": "Deletes all slots information from a node.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-flushslots.md"
  },
  "CLUSTER FORGET": {
    "name": "CLUSTER FORGET",
    "syntax": "CLUSTER FORGET node-id",
    "summary": "Removes a node from the nodes table.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-forget.md"
  },
  "CLUSTER GETKEYSINSLOT": {
    "name": "CLUSTER GETKEYSINSLOT",
    "syntax": "CLUSTER GETKEYSINSLOT slot count",
    "summary": "Returns the key names in a hash slot.",
    "since": "3.0.0",
    "complexity": "O(N) where N is the number of requested keys",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-getkeysinslot.md"
  },
  "CLUSTER HELP": {
    "name": "CLUSTER HELP",
    "syntax": "CLUSTER HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-help.md"
  },
  "CLUSTER INFO": {
    "name": "CLUSTER INFO",
    "syntax": "CLUSTER INFO",
    "summary": "Returns information about the state of a node.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-info.md"
  },
  "CLUSTER KEYSLOT": {
    "name": "CLUSTER KEYSLOT",
    "syntax": "CLUSTER KEYSLOT key",
    "summary": "Returns the hash slot for a key.",
    "since": "3.0.0",
    "complexity": "O(N) where N is the number of bytes in the key",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-keyslot.md"
  },
  "CLUSTER LINKS": {
    "name": "CLUSTER LINKS",
    "syntax": "CLUSTER LINKS",
    "summary": "Returns a list of all TCP links to and from peer nodes.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the total number of Cluster nodes",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-links.md"
  },
  "CLUSTER MEET": {
    "name": "CLUSTER MEET",
    "syntax": "CLUSTER MEET ip port [cluster-bus-port]",
    "summary": "Forces a node to handshake with another node.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-meet.md"
  },
  "CLUSTER MYID": {
    "name": "CLUSTER MYID",
    "syntax": "CLUSTER MYID",
    "summary": "Returns the ID of a node.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-myid.md"
  },
  "CLUSTER MYSHARDID": {
    "name": "CLUSTER MYSHARDID",
    "syntax": "CLUSTER MYSHARDID",
    "summary": "Returns the shard ID of a node.",
    "since": "7.2.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-myshardid.md"
  },
  "CLUSTER NODES": {
    "name": "CLUSTER NODES",
    "syntax": "CLUSTER NODES",
    "summary": "Returns the cluster configuration for a node.",
    "since": "3.0.0",
    "complexity": "O(N) where N is the total number of Cluster nodes",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-nodes.md"
  },
  "CLUSTER REPLICAS": {
    "name": "CLUSTER REPLICAS",
    "syntax": "CLUSTER REPLICAS node-id",
    "summary": "Lists the replica nodes of a master node.",
    "since": "5.0.0",
    "complexity": "O(N) where N is the number of replicas.",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-replicas.md"
  },
  "CLUSTER REPLICATE": {
    "name": "CLUSTER REPLICATE",
    "syntax": "CLUSTER REPLICATE node-id",
    "summary": "Configure a node as replica of a master node.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-replicate.md"
  },
  "CLUSTER RESET": {
    "name": "CLUSTER RESET",
    "syntax": "CLUSTER RESET [hard|soft]",
    "summary": "Resets a node.",
    "since": "3.0.0",
    "complexity": "O(N) where N is the number of known nodes. The command may execute a FLUSHALL as a side effect.",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-reset.md"
  },
  "CLUSTER SAVECONFIG": {
    "name": "CLUSTER SAVECONFIG",
    "syntax": "CLUSTER SAVECONFIG",
    "summary": "Forces a node to save the cluster configuration to disk.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-saveconfig.md"
  },
  "CLUSTER SET-CONFIG-EPOCH": {
    "name": "CLUSTER SET-CONFIG-EPOCH",
    "syntax": "CLUSTER SET-CONFIG-EPOCH config-epoch",
    "summary": "Sets the configuration epoch for a new node.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-set-config-epoch.md"
  },
  "CLUSTER SETSLOT": {
    "name": "CLUSTER SETSLOT",
    "syntax": "CLUSTER SETSLOT slot node-id|node-id|node-id|stable",
    "summary": "Binds a hash slot to a node.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-setslot.md"
  },
  "CLUSTER SHARDS": {
    "name": "CLUSTER SHARDS",
    "syntax": "CLUSTER SHARDS",
    "summary": "Returns the mapping of cluster slots to shards.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the total number of cluster nodes",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-shards.md"
  },
  "CLUSTER SLAVES": {
    "name": "CLUSTER SLAVES",
    "syntax": "CLUSTER SLAVES node-id",
    "summary": "Lists the replica nodes of a master node.",
    "since": "3.0.0",
    "complexity": "O(N) where N is the number of replicas.",
    "group": "cluster",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-slaves.md"
  },
  "CLUSTER SLOTS": {
    "name": "CLUSTER SLOTS",
    "syntax": "CLUSTER SLOTS",
    "summary": "Returns the mapping of cluster slots to nodes.",
    "since": "3.0.0",
    "complexity": "O(N) where N is the total number of Cluster nodes",
    "group": "cluster",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/cluster-slots.md"
  },
  "COMMAND": {
    "name": "COMMAND",
    "syntax": "COMMAND",
    "summary": "Returns detailed information about all commands.",
    "since": "2.8.13",
    "complexity": "O(N) where N is the total number of Redis commands",
    "group": "server",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/command.md"
  },
  "COMMAND COUNT": {
    "name": "COMMAND COUNT",
    "syntax": "COMMAND COUNT",
    "summary": "Returns a count of commands.",
    "since": "2.8.13",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/command-count.md"
  },
  "COMMAND DOCS": {
    "name": "COMMAND DOCS",
    "syntax": "COMMAND DOCS [command-name ...]",
    "summary": "Returns documentary information about one, multiple or all commands.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the number of commands to look up",
    "group": "server",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/command-docs.md"
  },
  "COMMAND GETKEYS": {
    "name": "COMMAND GETKEYS",
    "syntax": "COMMAND GETKEYS command [arg ...]",
    "summary": "Extracts the key names from an arbitrary command.",
    "since": "2.8.13",
    "complexity": "O(N) where N is the number of arguments to the command",
    "group": "server",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/command-getkeys.md"
  },
  "COMMAND GETKEYSANDFLAGS": {
    "name": "COMMAND GETKEYSANDFLAGS",
    "syntax": "COMMAND GETKEYSANDFLAGS command [arg ...]",
    "summary": "Extracts the key names and access flags for an arbitrary command.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the number of arguments to the command",
    "group": "server",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/command-getkeysandflags.md"
  },
  "COMMAND HELP": {
    "name": "COMMAND HELP",
    "syntax": "COMMAND HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/command-help.md"
  },
  "COMMAND INFO": {
    "name": "COMMAND INFO",
    "syntax": "COMMAND INFO [command-name ...]",
    "summary": "Returns information about one, multiple or all commands.",
    "since": "2.8.13",
    "complexity": "O(N) where N is the number of commands to look up",
    "group": "server",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/command-info.md"
  },
  "COMMAND LIST": {
    "name": "COMMAND LIST",
    "syntax": "COMMAND LIST [module-name|category|pattern]",
    "summary": "Returns a list of command names.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the total number of Redis commands",
    "group": "server",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/command-list.md"
  },
  "CONFIG": {
    "name": "CONFIG",
    "syntax": "CONFIG",
    "summary": "A container for server configuration commands.",
    "since": "2.0.0",
    "complexity": "Depends on subcommand.",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/config.md"
  },
  "CONFIG GET": {
    "name": "CONFIG GET",
    "syntax": "CONFIG GET parameter ...",
    "summary": "Returns the effective values of configuration parameters.",
    "since": "2.0.0",
    "complexity": "O(N) when N is the number of configuration parameters provided",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/config-get.md"
  },
  "CONFIG HELP": {
    "name": "CONFIG HELP",
    "syntax": "CONFIG HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/config-help.md"
  },
  "CONFIG RESETSTAT": {
    "name": "CONFIG RESETSTAT",
    "syntax": "CONFIG RESETSTAT",
    "summary": "Resets the server's statistics.",
    "since": "2.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/config-resetstat.md"
  },
  "CONFIG REWRITE": {
    "name": "CONFIG REWRITE",
    "syntax": "CONFIG REWRITE",
    "summary": "Persists the effective configuration to file.",
    "since": "2.8.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/config-rewrite.md"
  },
  "CONFIG SET": {
    "name": "CONFIG SET",
    "syntax": "CONFIG SET parameter value ...",
    "summary": "Sets configuration parameters in-flight.",
    "since": "2.0.0",
    "complexity": "O(N) when N is the number of configuration parameters provided",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/config-set.md"
  },
  "COPY": {
    "name": "COPY",
    "syntax": "COPY source destination [destination-db] [replace]",
    "summary": "Copies the value of a key to a new key.",
    "since": "6.2.0",
    "complexity": "O(N) worst case for collections, where N is the number of nested items. O(1) for string values.",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/copy.md"
  },
  "DBSIZE": {
    "name": "DBSIZE",
    "syntax": "DBSIZE",
    "summary": "Returns the number of keys in the database.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@keyspace",
      "@read",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/dbsize.md"
  },
  "DEBUG": {
    "name": "DEBUG",
    "syntax": "DEBUG",
    "summary": "A container for debugging commands.",
    "since": "1.0.0",
    "complexity": "Depends on subcommand.",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/debug.md"
  },
  "DECR": {
    "name": "DECR",
    "syntax": "DECR key",
    "summary": "Decrements the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/decr.md"
  },
  "DECRBY": {
    "name": "DECRBY",
    "syntax": "DECRBY key decrement",
    "summary": "Decrements a number from the integer value of a key. Uses 0 as initial value if the key doesn't exist.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/decrby.md"
  },
  "DEL": {
    "name": "DEL",
    "syntax": "DEL key ...",
    "summary": "Deletes one or more keys.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/del.md"
  },
  "DISCARD": {
    "name": "DISCARD",
    "syntax": "DISCARD",
    "summary": "Discards a transaction.",
    "since": "2.0.0",
    "complexity": "O(N), when N is the number of queued commands",
    "group": "transactions",
    "acl": [
      "@fast",
      "@transaction"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/discard.md"
  },
  "DUMP": {
    "name": "DUMP",
    "syntax": "DUMP key",
    "summary": "Returns a serialized representation of the value stored at a key.",
    "since": "2.6.0",
    "complexity": "O(1) to access the key and additional O(N*M) to serialize it, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1).",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/dump.md"
  },
  "ECHO": {
    "name": "ECHO",
    "syntax": "ECHO message",
    "summary": "Returns the given string.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@fast",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/echo.md"
  },
  "EVAL": {
    "name": "EVAL",
    "syntax": "EVAL script numkeys [key ...] [arg ...]",
    "summary": "Executes a server-side Lua script.",
    "since": "2.6.0",
    "complexity": "Depends on the script that is executed.",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/eval.md"
  },
  "EVALSHA": {
    "name": "EVALSHA",
    "syntax": "EVALSHA sha1 numkeys [key ...] [arg ...]",
    "summary": "Executes a server-side Lua script by SHA1 digest.",
    "since": "2.6.0",
    "complexity": "Depends on the script that is executed.",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/evalsha.md"
  },
  "EVALSHA_RO": {
    "name": "EVALSHA_RO",
    "syntax": "EVALSHA_RO sha1 numkeys [key ...] [arg ...]",
    "summary": "Executes a read-only server-side Lua script by SHA1 digest.",
    "since": "7.0.0",
    "complexity": "Depends on the script that is executed.",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/evalsha_ro.md"
  },
  "EVAL_RO": {
    "name": "EVAL_RO",
    "syntax": "EVAL_RO script numkeys [key ...] [arg ...]",
    "summary": "Executes a read-only server-side Lua script.",
    "since": "7.0.0",
    "complexity": "Depends on the script that is executed.",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/eval_ro.md"
  },
  "EXEC": {
    "name": "EXEC",
    "syntax": "EXEC",
    "summary": "Executes all commands in a transaction.",
    "since": "1.2.0",
    "complexity": "Depends on commands in the transaction",
    "group": "transactions",
    "acl": [
      "@slow",
      "@transaction"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/exec.md"
  },
  "EXISTS": {
    "name": "EXISTS",
    "syntax": "EXISTS key ...",
    "summary": "Determines whether one or more keys exist.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the number of keys to check.",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/exists.md"
  },
  "EXPIRE": {
    "name": "EXPIRE",
    "syntax": "EXPIRE key seconds [nx|xx|gt|lt]",
    "summary": "Sets the expiration time of a key in seconds.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/expire.md"
  },
  "EXPIREAT": {
    "name": "EXPIREAT",
    "syntax": "EXPIREAT key unix-time-seconds [nx|xx|gt|lt]",
    "summary": "Sets the expiration time of a key to a Unix timestamp.",
    "since": "1.2.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/expireat.md"
  },
  "EXPIRETIME": {
    "name": "EXPIRETIME",
    "syntax": "EXPIRETIME key",
    "summary": "Returns the expiration time of a key as a Unix timestamp.",
    "since": "7.0.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/expiretime.md"
  },
  "FAILOVER": {
    "name": "FAILOVER",
    "syntax": "FAILOVER [host port [force]] [abort] [milliseconds]",
    "summary": "Starts a coordinated failover from a server to one of its replicas.",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/failover.md"
  },
  "FCALL": {
    "name": "FCALL",
    "syntax": "FCALL function numkeys [key ...] [arg ...]",
    "summary": "Invokes a function.",
    "since": "7.0.0",
    "complexity": "Depends on the function that is executed.",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/fcall.md"
  },
  "FCALL_RO": {
    "name": "FCALL_RO",
    "syntax": "FCALL_RO function numkeys [key ...] [arg ...]",
    "summary": "Invokes a read-only function.",
    "since": "7.0.0",
    "complexity": "Depends on the function that is executed.",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/fcall_ro.md"
  },
  "FLUSHALL": {
    "name": "FLUSHALL",
    "syntax": "FLUSHALL [async|sync]",
    "summary": "Removes all keys from all databases.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the total number of keys in all databases",
    "group": "server",
    "acl": [
      "@keyspace",
      "@write",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/flushall.md"
  },
  "FLUSHDB": {
    "name": "FLUSHDB",
    "syntax": "FLUSHDB [async|sync]",
    "summary": "Remove all keys from the current database.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the number of keys in the selected database",
    "group": "server",
    "acl": [
      "@keyspace",
      "@write",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/flushdb.md"
  },
  "FUNCTION": {
    "name": "FUNCTION",
    "syntax": "FUNCTION",
    "summary": "A container for function commands.",
    "since": "7.0.0",
    "complexity": "Depends on subcommand.",
    "group": "scripting",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/function.md"
  },
  "FUNCTION DELETE": {
    "name": "FUNCTION DELETE",
    "syntax": "FUNCTION DELETE library-name",
    "summary": "Deletes a library and its functions.",
    "since": "7.0.0",
    "complexity": "O(1)",
    "group": "scripting",
    "acl": [
      "@write",
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/function-delete.md"
  },
  "FUNCTION DUMP": {
    "name": "FUNCTION DUMP",
    "syntax": "FUNCTION DUMP",
    "summary": "Dumps all libraries into a serialized binary payload.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the number of functions",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/function-dump.md"
  },
  "FUNCTION FLUSH": {
    "name": "FUNCTION FLUSH",
    "syntax": "FUNCTION FLUSH [async|sync]",
    "summary": "Deletes all libraries and functions.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the number of functions deleted",
    "group": "scripting",
    "acl": [
      "@write",
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/function-flush.md"
  },
  "FUNCTION HELP": {
    "name": "FUNCTION HELP",
    "syntax": "FUNCTION HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "7.0.0",
    "complexity": "O(1)",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/function-help.md"
  },
  "FUNCTION KILL": {
    "name": "FUNCTION KILL",
    "syntax": "FUNCTION KILL",
    "summary": "Terminates a function during execution.",
    "since": "7.0.0",
    "complexity": "O(1)",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/function-kill.md"
  },
  "FUNCTION LIST": {
    "name": "FUNCTION LIST",
    "syntax": "FUNCTION LIST [library-name-pattern] [withcode]",
    "summary": "Returns information about all libraries.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the number of functions",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/function-list.md"
  },
  "FUNCTION LOAD": {
    "name": "FUNCTION LOAD",
    "syntax": "FUNCTION LOAD [replace] function-code",
    "summary": "Creates a library.",
    "since": "7.0.0",
    "complexity": "O(1) (considering compilation time is redundant)",
    "group": "scripting",
    "acl": [
      "@write",
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/function-load.md"
  },
  "FUNCTION RESTORE": {
    "name": "FUNCTION RESTORE",
    "syntax": "FUNCTION RESTORE serialized-value [flush|append|replace]",
    "summary": "Restores all libraries from a payload.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the number of functions on the payload",
    "group": "scripting",
    "acl": [
      "@write",
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/function-restore.md"
  },
  "FUNCTION STATS": {
    "name": "FUNCTION STATS",
    "syntax": "FUNCTION STATS",
    "summary": "Returns information about a function during execution.",
    "since": "7.0.0",
    "complexity": "O(1)",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/function-stats.md"
  },
  "GEOADD": {
    "name": "GEOADD",
    "syntax": "GEOADD key [nx|xx] [change] longitude latitude member ...",
    "summary": "Adds one or more members to a geospatial index. The key is created if it doesn't exist.",
    "since": "3.2.0",
    "complexity": "O(log(N)) for each item added, where N is the number of elements in the sorted set.",
    "group": "geo",
    "acl": [
      "@write",
      "@geo",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/geoadd.md"
  },
  "GEODIST": {
    "name": "GEODIST",
    "syntax": "GEODIST key member1 member2 [m|km|ft|mi]",
    "summary": "Returns the distance between two members of a geospatial index.",
    "since": "3.2.0",
    "complexity": "O(1)",
    "group": "geo",
    "acl": [
      "@read",
      "@geo",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/geodist.md"
  },
  "GEOHASH": {
    "name": "GEOHASH",
    "syntax": "GEOHASH key [member ...]",
    "summary": "Returns members from a geospatial index as geohash strings.",
    "since": "3.2.0",
    "complexity": "O(1) for each member requested.",
    "group": "geo",
    "acl": [
      "@read",
      "@geo",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/geohash.md"
  },
  "GEOPOS": {
    "name": "GEOPOS",
    "syntax": "GEOPOS key [member ...]",
    "summary": "Returns the longitude and latitude of members from a geospatial index.",
    "since": "3.2.0",
    "complexity": "O(1) for each member requested.",
    "group": "geo",
    "acl": [
      "@read",
      "@geo",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/geopos.md"
  },
  "GEORADIUS": {
    "name": "GEORADIUS",
    "syntax": "GEORADIUS key longitude latitude radius m|km|ft|mi [withcoord] [withdist] [withhash] [count [any]] [asc|desc] [key|key]",
    "summary": "Queries a geospatial index for members within a distance from a coordinate, optionally stores the result.",
    "since": "3.2.0",
    "complexity": "O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.",
    "group": "geo",
    "acl": [
      "@write",
      "@geo",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/georadius.md"
  },
  "GEORADIUSBYMEMBER": {
    "name": "GEORADIUSBYMEMBER",
    "syntax": "GEORADIUSBYMEMBER key member radius m|km|ft|mi [withcoord] [withdist] [withhash] [count [any]] [asc|desc] [key|key]",
    "summary": "Queries a geospatial index for members within a distance from a member, optionally stores the result.",
    "since": "3.2.0",
    "complexity": "O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.",
    "group": "geo",
    "acl": [
      "@write",
      "@geo",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/georadiusbymember.md"
  },
  "GEORADIUSBYMEMBER_RO": {
    "name": "GEORADIUSBYMEMBER_RO",
    "syntax": "GEORADIUSBYMEMBER_RO key member radius m|km|ft|mi [withcoord] [withdist] [withhash] [count [any]] [asc|desc]",
    "summary": "Returns members from a geospatial index that are within a distance from a member.",
    "since": "3.2.10",
    "complexity": "O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.",
    "group": "geo",
    "acl": [
      "@read",
      "@geo",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/georadiusbymember_ro.md"
  },
  "GEORADIUS_RO": {
    "name": "GEORADIUS_RO",
    "syntax": "GEORADIUS_RO key longitude latitude radius m|km|ft|mi [withcoord] [withdist] [withhash] [count [any]] [asc|desc]",
    "summary": "Returns members from a geospatial index that are within a distance from a coordinate.",
    "since": "3.2.10",
    "complexity": "O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.",
    "group": "geo",
    "acl": [
      "@read",
      "@geo",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/georadius_ro.md"
  },
  "GEOSEARCH": {
    "name": "GEOSEARCH",
    "syntax": "GEOSEARCH key member|longitude latitude radius m|km|ft|mi|width height m|km|ft|mi [asc|desc] [count [any]] [withcoord] [withdist] [withhash]",
    "summary": "Queries a geospatial index for members inside an area of a box or a circle.",
    "since": "6.2.0",
    "complexity": "O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape",
    "group": "geo",
    "acl": [
      "@read",
      "@geo",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/geosearch.md"
  },
  "GEOSEARCHSTORE": {
    "name": "GEOSEARCHSTORE",
    "syntax": "GEOSEARCHSTORE destination source member|longitude latitude radius m|km|ft|mi|width height m|km|ft|mi [asc|desc] [count [any]] [storedist]",
    "summary": "Queries a geospatial index for members inside an area of a box or a circle, optionally stores the result.",
    "since": "6.2.0",
    "complexity": "O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape",
    "group": "geo",
    "acl": [
      "@write",
      "@geo",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/geosearchstore.md"
  },
  "GET": {
    "name": "GET",
    "syntax": "GET key",
    "summary": "Returns the string value of a key.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@read",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/get.md"
  },
  "GETBIT": {
    "name": "GETBIT",
    "syntax": "GETBIT key offset",
    "summary": "Returns a bit value by offset.",
    "since": "2.2.0",
    "complexity": "O(1)",
    "group": "bitmap",
    "acl": [
      "@read",
      "@bitmap",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/getbit.md"
  },
  "GETDEL": {
    "name": "GETDEL",
    "syntax": "GETDEL key",
    "summary": "Returns the string value of a key after deleting the key.",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/getdel.md"
  },
  "GETEX": {
    "name": "GETEX",
    "syntax": "GETEX key [seconds|milliseconds|unix-time-seconds|unix-time-milliseconds|persist]",
    "summary": "Returns the string value of a key after setting its expiration time.",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/getex.md"
  },
  "GETRANGE": {
    "name": "GETRANGE",
    "syntax": "GETRANGE key start end",
    "summary": "Returns a substring of the string stored at a key.",
    "since": "2.4.0",
    "complexity": "O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.",
    "group": "string",
    "acl": [
      "@read",
      "@string",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/getrange.md"
  },
  "GETSET": {
    "name": "GETSET",
    "syntax": "GETSET key value",
    "summary": "Returns the previous string value of a key after setting it to a new value.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/getset.md"
  },
  "HDEL": {
    "name": "HDEL",
    "syntax": "HDEL key field ...",
    "summary": "Deletes one or more fields and their values from a hash. Deletes the hash if no fields remain.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the number of fields to be removed.",
    "group": "hash",
    "acl": [
      "@write",
      "@hash",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hdel.md"
  },
  "HELLO": {
    "name": "HELLO",
    "syntax": "HELLO [protover [username password] [clientname]]",
    "summary": "Handshakes with the Redis server.",
    "since": "6.0.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@fast",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hello.md"
  },
  "HEXISTS": {
    "name": "HEXISTS",
    "syntax": "HEXISTS key field",
    "summary": "Determines whether a field exists in a hash.",
    "since": "2.0.0",
    "complexity": "O(1)",
    "group": "hash",
    "acl": [
      "@read",
      "@hash",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hexists.md"
  },
  "HGET": {
    "name": "HGET",
    "syntax": "HGET key field",
    "summary": "Returns the value of a field in a hash.",
    "since": "2.0.0",
    "complexity": "O(1)",
    "group": "hash",
    "acl": [
      "@read",
      "@hash",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hget.md"
  },
  "HGETALL": {
    "name": "HGETALL",
    "syntax": "HGETALL key",
    "summary": "Returns all fields and values in a hash.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the size of the hash.",
    "group": "hash",
    "acl": [
      "@read",
      "@hash",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hgetall.md"
  },
  "HINCRBY": {
    "name": "HINCRBY",
    "syntax": "HINCRBY key field increment",
    "summary": "Increments the integer value of a field in a hash by a number. Uses 0 as initial value if the field doesn't exist.",
    "since": "2.0.0",
    "complexity": "O(1)",
    "group": "hash",
    "acl": [
      "@write",
      "@hash",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hincrby.md"
  },
  "HINCRBYFLOAT": {
    "name": "HINCRBYFLOAT",
    "syntax": "HINCRBYFLOAT key field increment",
    "summary": "Increments the floating point value of a field by a number. Uses 0 as initial value if the field doesn't exist.",
    "since": "2.6.0",
    "complexity": "O(1)",
    "group": "hash",
    "acl": [
      "@write",
      "@hash",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hincrbyfloat.md"
  },
  "HKEYS": {
    "name": "HKEYS",
    "syntax": "HKEYS key",
    "summary": "Returns all fields in a hash.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the size of the hash.",
    "group": "hash",
    "acl": [
      "@read",
      "@hash",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hkeys.md"
  },
  "HLEN": {
    "name": "HLEN",
    "syntax": "HLEN key",
    "summary": "Returns the number of fields in a hash.",
    "since": "2.0.0",
    "complexity": "O(1)",
    "group": "hash",
    "acl": [
      "@read",
      "@hash",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hlen.md"
  },
  "HMGET": {
    "name": "HMGET",
    "syntax": "HMGET key field ...",
    "summary": "Returns the values of all fields in a hash.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the number of fields being requested.",
    "group": "hash",
    "acl": [
      "@read",
      "@hash",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hmget.md"
  },
  "HMSET": {
    "name": "HMSET",
    "syntax": "HMSET key field value ...",
    "summary": "Sets the values of multiple fields.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the number of fields being set.",
    "group": "hash",
    "acl": [
      "@write",
      "@hash",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hmset.md"
  },
  "HRANDFIELD": {
    "name": "HRANDFIELD",
    "syntax": "HRANDFIELD key [count [withvalues]]",
    "summary": "Returns one or more random fields from a hash.",
    "since": "6.2.0",
    "complexity": "O(N) where N is the number of fields returned",
    "group": "hash",
    "acl": [
      "@read",
      "@hash",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hrandfield.md"
  },
  "HSCAN": {
    "name": "HSCAN",
    "syntax": "HSCAN key cursor [pattern] [count]",
    "summary": "Iterates over fields and values of a hash.",
    "since": "2.8.0",
    "complexity": "O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.",
    "group": "hash",
    "acl": [
      "@read",
      "@hash",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hscan.md"
  },
  "HSET": {
    "name": "HSET",
    "syntax": "HSET key field value ...",
    "summary": "Creates or modifies the value of a field in a hash.",
    "since": "2.0.0",
    "complexity": "O(1) for each field/value pair added, so O(N) to add N field/value pairs when the command is called with multiple field/value pairs.",
    "group": "hash",
    "acl": [
      "@write",
      "@hash",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hset.md"
  },
  "HSETNX": {
    "name": "HSETNX",
    "syntax": "HSETNX key field value",
    "summary": "Sets the value of a field in a hash only when the field doesn't exist.",
    "since": "2.0.0",
    "complexity": "O(1)",
    "group": "hash",
    "acl": [
      "@write",
      "@hash",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hsetnx.md"
  },
  "HSTRLEN": {
    "name": "HSTRLEN",
    "syntax": "HSTRLEN key field",
    "summary": "Returns the length of the value of a field.",
    "since": "3.2.0",
    "complexity": "O(1)",
    "group": "hash",
    "acl": [
      "@read",
      "@hash",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hstrlen.md"
  },
  "HVALS": {
    "name": "HVALS",
    "syntax": "HVALS key",
    "summary": "Returns all values in a hash.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the size of the hash.",
    "group": "hash",
    "acl": [
      "@read",
      "@hash",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/hvals.md"
  },
  "INCR": {
    "name": "INCR",
    "syntax": "INCR key",
    "summary": "Increments the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/incr.md"
  },
  "INCRBY": {
    "name": "INCRBY",
    "syntax": "INCRBY key increment",
    "summary": "Increments the integer value of a key by a number. Uses 0 as initial value if the key doesn't exist.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/incrby.md"
  },
  "INCRBYFLOAT": {
    "name": "INCRBYFLOAT",
    "syntax": "INCRBYFLOAT key increment",
    "summary": "Increment the floating point value of a key by a number. Uses 0 as initial value if the key doesn't exist.",
    "since": "2.6.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/incrbyfloat.md"
  },
  "INFO": {
    "name": "INFO",
    "syntax": "INFO [section ...]",
    "summary": "Returns information and statistics about the server.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/info.md"
  },
  "KEYS": {
    "name": "KEYS",
    "syntax": "KEYS pattern",
    "summary": "Returns all key names that match a pattern.",
    "since": "1.0.0",
    "complexity": "O(N) with N being the number of keys in the database, under the assumption that the key names in the database and the given pattern have limited length.",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/keys.md"
  },
  "LASTSAVE": {
    "name": "LASTSAVE",
    "syntax": "LASTSAVE",
    "summary": "Returns the Unix timestamp of the last successful save to disk.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@fast",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lastsave.md"
  },
  "LATENCY": {
    "name": "LATENCY",
    "syntax": "LATENCY",
    "summary": "A container for latency diagnostics commands.",
    "since": "2.8.13",
    "complexity": "Depends on subcommand.",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/latency.md"
  },
  "LATENCY DOCTOR": {
    "name": "LATENCY DOCTOR",
    "syntax": "LATENCY DOCTOR",
    "summary": "Returns a human-readable latency analysis report.",
    "since": "2.8.13",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/latency-doctor.md"
  },
  "LATENCY GRAPH": {
    "name": "LATENCY GRAPH",
    "syntax": "LATENCY GRAPH event",
    "summary": "Returns a latency graph for an event.",
    "since": "2.8.13",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/latency-graph.md"
  },
  "LATENCY HELP": {
    "name": "LATENCY HELP",
    "syntax": "LATENCY HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "2.8.13",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/latency-help.md"
  },
  "LATENCY HISTOGRAM": {
    "name": "LATENCY HISTOGRAM",
    "syntax": "LATENCY HISTOGRAM [command ...]",
    "summary": "Returns the cumulative distribution of latencies of a subset or all commands.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the number of commands with latency information being retrieved.",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/latency-histogram.md"
  },
  "LATENCY HISTORY": {
    "name": "LATENCY HISTORY",
    "syntax": "LATENCY HISTORY event",
    "summary": "Returns timestamp-latency samples for an event.",
    "since": "2.8.13",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/latency-history.md"
  },
  "LATENCY LATEST": {
    "name": "LATENCY LATEST",
    "syntax": "LATENCY LATEST",
    "summary": "Returns the latest latency samples for all events.",
    "since": "2.8.13",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/latency-latest.md"
  },
  "LATENCY RESET": {
    "name": "LATENCY RESET",
    "syntax": "LATENCY RESET [event ...]",
    "summary": "Resets the latency data for one or more events.",
    "since": "2.8.13",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/latency-reset.md"
  },
  "LCS": {
    "name": "LCS",
    "syntax": "LCS key1 key2 [len] [idx] [min-match-len] [withmatchlen]",
    "summary": "Finds the longest common substring.",
    "since": "7.0.0",
    "complexity": "O(N*M) where N and M are the lengths of s1 and s2, respectively",
    "group": "string",
    "acl": [
      "@read",
      "@string",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lcs.md"
  },
  "LINDEX": {
    "name": "LINDEX",
    "syntax": "LINDEX key index",
    "summary": "Returns an element from a list by its index.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the number of elements to traverse to get to the element at index. This makes asking for the first or the last element of the list O(1).",
    "group": "list",
    "acl": [
      "@read",
      "@list",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lindex.md"
  },
  "LINSERT": {
    "name": "LINSERT",
    "syntax": "LINSERT key before|after pivot element",
    "summary": "Inserts an element before or after another element in a list.",
    "since": "2.2.0",
    "complexity": "O(N) where N is the number of elements to traverse before seeing the value pivot. This means that inserting somewhere on the left end on the list (head) can be considered O(1) and inserting somewhere on the right end (tail) is O(N).",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/linsert.md"
  },
  "LLEN": {
    "name": "LLEN",
    "syntax": "LLEN key",
    "summary": "Returns the length of a list.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "list",
    "acl": [
      "@read",
      "@list",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/llen.md"
  },
  "LMOVE": {
    "name": "LMOVE",
    "syntax": "LMOVE source destination left|right left|right",
    "summary": "Returns an element after popping it from one list and pushing it to another. Deletes the list if the last element was moved.",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lmove.md"
  },
  "LMPOP": {
    "name": "LMPOP",
    "syntax": "LMPOP numkeys key ... left|right [count]",
    "summary": "Returns multiple elements from a list after removing them. Deletes the list if the last element was popped.",
    "since": "7.0.0",
    "complexity": "O(N+M) where N is the number of provided keys and M is the number of elements returned.",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lmpop.md"
  },
  "LOLWUT": {
    "name": "LOLWUT",
    "syntax": "LOLWUT [version]",
    "summary": "Displays computer art and the Redis version",
    "since": "5.0.0",
    "complexity": "",
    "group": "server",
    "acl": [
      "@read",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lolwut.md"
  },
  "LPOP": {
    "name": "LPOP",
    "syntax": "LPOP key [count]",
    "summary": "Returns the first elements in a list after removing it. Deletes the list if the last element was popped.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the number of elements returned",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lpop.md"
  },
  "LPOS": {
    "name": "LPOS",
    "syntax": "LPOS key element [rank] [num-matches] [len]",
    "summary": "Returns the index of matching elements in a list.",
    "since": "6.0.6",
    "complexity": "O(N) where N is the number of elements in the list, for the average case. When searching for elements near the head or the tail of the list, or when the MAXLEN option is provided, the command may run in constant time.",
    "group": "list",
    "acl": [
      "@read",
      "@list",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lpos.md"
  },
  "LPUSH": {
    "name": "LPUSH",
    "syntax": "LPUSH key element ...",
    "summary": "Prepends one or more elements to a list. Creates the key if it doesn't exist.",
    "since": "1.0.0",
    "complexity": "O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lpush.md"
  },
  "LPUSHX": {
    "name": "LPUSHX",
    "syntax": "LPUSHX key element ...",
    "summary": "Prepends one or more elements to a list only when the list exists.",
    "since": "2.2.0",
    "complexity": "O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lpushx.md"
  },
  "LRANGE": {
    "name": "LRANGE",
    "syntax": "LRANGE key start stop",
    "summary": "Returns a range of elements from a list.",
    "since": "1.0.0",
    "complexity": "O(S+N) where S is the distance of start offset from HEAD for small lists, from nearest end (HEAD or TAIL) for large lists; and N is the number of elements in the specified range.",
    "group": "list",
    "acl": [
      "@read",
      "@list",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lrange.md"
  },
  "LREM": {
    "name": "LREM",
    "syntax": "LREM key count element",
    "summary": "Removes elements from a list. Deletes the list if the last element was removed.",
    "since": "1.0.0",
    "complexity": "O(N+M) where N is the length of the list and M is the number of elements removed.",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lrem.md"
  },
  "LSET": {
    "name": "LSET",
    "syntax": "LSET key index element",
    "summary": "Sets the value of an element in a list by its index.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the length of the list. Setting either the first or the last element of the list is O(1).",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/lset.md"
  },
  "LTRIM": {
    "name": "LTRIM",
    "syntax": "LTRIM key start stop",
    "summary": "Removes elements from both ends a list. Deletes the list if all elements were trimmed.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the number of elements to be removed by the operation.",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/ltrim.md"
  },
  "MEMORY": {
    "name": "MEMORY",
    "syntax": "MEMORY",
    "summary": "A container for memory diagnostics commands.",
    "since": "4.0.0",
    "complexity": "Depends on subcommand.",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/memory.md"
  },
  "MEMORY DOCTOR": {
    "name": "MEMORY DOCTOR",
    "syntax": "MEMORY DOCTOR",
    "summary": "Outputs a memory problems report.",
    "since": "4.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/memory-doctor.md"
  },
  "MEMORY HELP": {
    "name": "MEMORY HELP",
    "syntax": "MEMORY HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "4.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/memory-help.md"
  },
  "MEMORY MALLOC-STATS": {
    "name": "MEMORY MALLOC-STATS",
    "syntax": "MEMORY MALLOC-STATS",
    "summary": "Returns the allocator statistics.",
    "since": "4.0.0",
    "complexity": "Depends on how much memory is allocated, could be slow",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/memory-malloc-stats.md"
  },
  "MEMORY PURGE": {
    "name": "MEMORY PURGE",
    "syntax": "MEMORY PURGE",
    "summary": "Asks the allocator to release memory.",
    "since": "4.0.0",
    "complexity": "Depends on how much memory is allocated, could be slow",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/memory-purge.md"
  },
  "MEMORY STATS": {
    "name": "MEMORY STATS",
    "syntax": "MEMORY STATS",
    "summary": "Returns details about memory usage.",
    "since": "4.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/memory-stats.md"
  },
  "MEMORY USAGE": {
    "name": "MEMORY USAGE",
    "syntax": "MEMORY USAGE key [count]",
    "summary": "Estimates the memory usage of a key.",
    "since": "4.0.0",
    "complexity": "O(N) where N is the number of samples.",
    "group": "server",
    "acl": [
      "@read",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/memory-usage.md"
  },
  "MGET": {
    "name": "MGET",
    "syntax": "MGET key ...",
    "summary": "Atomically returns the string values of one or more keys.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the number of keys to retrieve.",
    "group": "string",
    "acl": [
      "@read",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/mget.md"
  },
  "MIGRATE": {
    "name": "MIGRATE",
    "syntax": "MIGRATE host port key|empty-string destination-db timeout [copy] [replace] [password|username password] [key ...]",
    "summary": "Atomically transfers a key from one Redis instance to another.",
    "since": "2.6.0",
    "complexity": "This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/migrate.md"
  },
  "MODULE": {
    "name": "MODULE",
    "syntax": "MODULE",
    "summary": "A container for module commands.",
    "since": "4.0.0",
    "complexity": "Depends on subcommand.",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/module.md"
  },
  "MODULE HELP": {
    "name": "MODULE HELP",
    "syntax": "MODULE HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/module-help.md"
  },
  "MODULE LIST": {
    "name": "MODULE LIST",
    "syntax": "MODULE LIST",
    "summary": "Returns all loaded modules.",
    "since": "4.0.0",
    "complexity": "O(N) where N is the number of loaded modules.",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/module-list.md"
  },
  "MODULE LOAD": {
    "name": "MODULE LOAD",
    "syntax": "MODULE LOAD path [arg ...]",
    "summary": "Loads a module.",
    "since": "4.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/module-load.md"
  },
  "MODULE LOADEX": {
    "name": "MODULE LOADEX",
    "syntax": "MODULE LOADEX path [name value ...] [args ...]",
    "summary": "Loads a module using extended parameters.",
    "since": "7.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/module-loadex.md"
  },
  "MODULE UNLOAD": {
    "name": "MODULE UNLOAD",
    "syntax": "MODULE UNLOAD name",
    "summary": "Unloads a module.",
    "since": "4.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/module-unload.md"
  },
  "MONITOR": {
    "name": "MONITOR",
    "syntax": "MONITOR",
    "summary": "Listens for all requests received by the server in real-time.",
    "since": "1.0.0",
    "complexity": "",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/monitor.md"
  },
  "MOVE": {
    "name": "MOVE",
    "syntax": "MOVE key db",
    "summary": "Moves a key to another database.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/move.md"
  },
  "MSET": {
    "name": "MSET",
    "syntax": "MSET key value ...",
    "summary": "Atomically creates or modifies the string values of one or more keys.",
    "since": "1.0.1",
    "complexity": "O(N) where N is the number of keys to set.",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/mset.md"
  },
  "MSETNX": {
    "name": "MSETNX",
    "syntax": "MSETNX key value ...",
    "summary": "Atomically modifies the string values of one or more keys only when all keys don't exist.",
    "since": "1.0.1",
    "complexity": "O(N) where N is the number of keys to set.",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/msetnx.md"
  },
  "MULTI": {
    "name": "MULTI",
    "syntax": "MULTI",
    "summary": "Starts a transaction.",
    "since": "1.2.0",
    "complexity": "O(1)",
    "group": "transactions",
    "acl": [
      "@fast",
      "@transaction"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/multi.md"
  },
  "OBJECT": {
    "name": "OBJECT",
    "syntax": "OBJECT",
    "summary": "A container for object introspection commands.",
    "since": "2.2.3",
    "complexity": "Depends on subcommand.",
    "group": "generic",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/object.md"
  },
  "OBJECT ENCODING": {
    "name": "OBJECT ENCODING",
    "syntax": "OBJECT ENCODING key",
    "summary": "Returns the internal encoding of a Redis object.",
    "since": "2.2.3",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/object-encoding.md"
  },
  "OBJECT FREQ": {
    "name": "OBJECT FREQ",
    "syntax": "OBJECT FREQ key",
    "summary": "Returns the logarithmic access frequency counter of a Redis object.",
    "since": "4.0.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/object-freq.md"
  },
  "OBJECT HELP": {
    "name": "OBJECT HELP",
    "syntax": "OBJECT HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/object-help.md"
  },
  "OBJECT IDLETIME": {
    "name": "OBJECT IDLETIME",
    "syntax": "OBJECT IDLETIME key",
    "summary": "Returns the time since the last access to a Redis object.",
    "since": "2.2.3",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/object-idletime.md"
  },
  "OBJECT REFCOUNT": {
    "name": "OBJECT REFCOUNT",
    "syntax": "OBJECT REFCOUNT key",
    "summary": "Returns the reference count of a value of a key.",
    "since": "2.2.3",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/object-refcount.md"
  },
  "PERSIST": {
    "name": "PERSIST",
    "syntax": "PERSIST key",
    "summary": "Removes the expiration time of a key.",
    "since": "2.2.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/persist.md"
  },
  "PEXPIRE": {
    "name": "PEXPIRE",
    "syntax": "PEXPIRE key milliseconds [nx|xx|gt|lt]",
    "summary": "Sets the expiration time of a key in milliseconds.",
    "since": "2.6.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pexpire.md"
  },
  "PEXPIREAT": {
    "name": "PEXPIREAT",
    "syntax": "PEXPIREAT key unix-time-milliseconds [nx|xx|gt|lt]",
    "summary": "Sets the expiration time of a key to a Unix milliseconds timestamp.",
    "since": "2.6.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pexpireat.md"
  },
  "PEXPIRETIME": {
    "name": "PEXPIRETIME",
    "syntax": "PEXPIRETIME key",
    "summary": "Returns the expiration time of a key as a Unix milliseconds timestamp.",
    "since": "7.0.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pexpiretime.md"
  },
  "PFADD": {
    "name": "PFADD",
    "syntax": "PFADD key [element ...]",
    "summary": "Adds elements to a HyperLogLog key. Creates the key if it doesn't exist.",
    "since": "2.8.9",
    "complexity": "O(1) to add every element.",
    "group": "hyperloglog",
    "acl": [
      "@write",
      "@hyperloglog",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pfadd.md"
  },
  "PFCOUNT": {
    "name": "PFCOUNT",
    "syntax": "PFCOUNT key ...",
    "summary": "Returns the approximated cardinality of the set(s) observed by the HyperLogLog key(s).",
    "since": "2.8.9",
    "complexity": "O(1) with a very small average constant time when called with a single key. O(N) with N being the number of keys, and much bigger constant times, when called with multiple keys.",
    "group": "hyperloglog",
    "acl": [
      "@read",
      "@hyperloglog",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pfcount.md"
  },
  "PFDEBUG": {
    "name": "PFDEBUG",
    "syntax": "PFDEBUG subcommand key",
    "summary": "Internal commands for debugging HyperLogLog values.",
    "since": "2.8.9",
    "complexity": "N/A",
    "group": "hyperloglog",
    "acl": [
      "@write",
      "@hyperloglog",
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pfdebug.md"
  },
  "PFMERGE": {
    "name": "PFMERGE",
    "syntax": "PFMERGE destkey [sourcekey ...]",
    "summary": "Merges one or more HyperLogLog values into a single key.",
    "since": "2.8.9",
    "complexity": "O(N) to merge N HyperLogLogs, but with high constant times.",
    "group": "hyperloglog",
    "acl": [
      "@write",
      "@hyperloglog",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pfmerge.md"
  },
  "PFSELFTEST": {
    "name": "PFSELFTEST",
    "syntax": "PFSELFTEST",
    "summary": "An internal command for testing HyperLogLog values.",
    "since": "2.8.9",
    "complexity": "N/A",
    "group": "hyperloglog",
    "acl": [
      "@hyperloglog",
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pfselftest.md"
  },
  "PING": {
    "name": "PING",
    "syntax": "PING [message]",
    "summary": "Returns the server's liveliness response.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@fast",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/ping.md"
  },
  "PSETEX": {
    "name": "PSETEX",
    "syntax": "PSETEX key milliseconds value",
    "summary": "Sets both string value and expiration time in milliseconds of a key. The key is created if it doesn't exist.",
    "since": "2.6.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/psetex.md"
  },
  "PSUBSCRIBE": {
    "name": "PSUBSCRIBE",
    "syntax": "PSUBSCRIBE pattern ...",
    "summary": "Listens for messages published to channels that match one or more patterns.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the number of patterns to subscribe to.",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/psubscribe.md"
  },
  "PSYNC": {
    "name": "PSYNC",
    "syntax": "PSYNC replicationid offset",
    "summary": "An internal command used in replication.",
    "since": "2.8.0",
    "complexity": "",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/psync.md"
  },
  "PTTL": {
    "name": "PTTL",
    "syntax": "PTTL key",
    "summary": "Returns the expiration time in milliseconds of a key.",
    "since": "2.6.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pttl.md"
  },
  "PUBLISH": {
    "name": "PUBLISH",
    "syntax": "PUBLISH channel message",
    "summary": "Posts a message to a channel.",
    "since": "2.0.0",
    "complexity": "O(N+M) where N is the number of clients subscribed to the receiving channel and M is the total number of subscribed patterns (by any client).",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/publish.md"
  },
  "PUBSUB": {
    "name": "PUBSUB",
    "syntax": "PUBSUB",
    "summary": "A container for Pub/Sub commands.",
    "since": "2.8.0",
    "complexity": "Depends on subcommand.",
    "group": "pubsub",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pubsub.md"
  },
  "PUBSUB CHANNELS": {
    "name": "PUBSUB CHANNELS",
    "syntax": "PUBSUB CHANNELS [pattern]",
    "summary": "Returns the active channels.",
    "since": "2.8.0",
    "complexity": "O(N) where N is the number of active channels, and assuming constant time pattern matching (relatively short channels and patterns)",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pubsub-channels.md"
  },
  "PUBSUB HELP": {
    "name": "PUBSUB HELP",
    "syntax": "PUBSUB HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "pubsub",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pubsub-help.md"
  },
  "PUBSUB NUMPAT": {
    "name": "PUBSUB NUMPAT",
    "syntax": "PUBSUB NUMPAT",
    "summary": "Returns a count of unique pattern subscriptions.",
    "since": "2.8.0",
    "complexity": "O(1)",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pubsub-numpat.md"
  },
  "PUBSUB NUMSUB": {
    "name": "PUBSUB NUMSUB",
    "syntax": "PUBSUB NUMSUB [channel ...]",
    "summary": "Returns a count of subscribers to channels.",
    "since": "2.8.0",
    "complexity": "O(N) for the NUMSUB subcommand, where N is the number of requested channels",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pubsub-numsub.md"
  },
  "PUBSUB SHARDCHANNELS": {
    "name": "PUBSUB SHARDCHANNELS",
    "syntax": "PUBSUB SHARDCHANNELS [pattern]",
    "summary": "Returns the active shard channels.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the number of active shard channels, and assuming constant time pattern matching (relatively short shard channels).",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pubsub-shardchannels.md"
  },
  "PUBSUB SHARDNUMSUB": {
    "name": "PUBSUB SHARDNUMSUB",
    "syntax": "PUBSUB SHARDNUMSUB [shardchannel ...]",
    "summary": "Returns the count of subscribers of shard channels.",
    "since": "7.0.0",
    "complexity": "O(N) for the SHARDNUMSUB subcommand, where N is the number of requested shard channels",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/pubsub-shardnumsub.md"
  },
  "PUNSUBSCRIBE": {
    "name": "PUNSUBSCRIBE",
    "syntax": "PUNSUBSCRIBE [pattern ...]",
    "summary": "Stops listening to messages published to channels that match one or more patterns.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the number of patterns to unsubscribe.",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/punsubscribe.md"
  },
  "QUIT": {
    "name": "QUIT",
    "syntax": "QUIT",
    "summary": "Closes the connection.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@fast",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/quit.md"
  },
  "RANDOMKEY": {
    "name": "RANDOMKEY",
    "syntax": "RANDOMKEY",
    "summary": "Returns a random key name from the database.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/randomkey.md"
  },
  "READONLY": {
    "name": "READONLY",
    "syntax": "READONLY",
    "summary": "Enables read-only queries for a connection to a Redis Cluster replica node.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@fast",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/readonly.md"
  },
  "READWRITE": {
    "name": "READWRITE",
    "syntax": "READWRITE",
    "summary": "Enables read-write queries for a connection to a Reids Cluster replica node.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "cluster",
    "acl": [
      "@fast",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/readwrite.md"
  },
  "RENAME": {
    "name": "RENAME",
    "syntax": "RENAME key newkey",
    "summary": "Renames a key and overwrites the destination.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/rename.md"
  },
  "RENAMENX": {
    "name": "RENAMENX",
    "syntax": "RENAMENX key newkey",
    "summary": "Renames a key only when the target key name doesn't exist.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/renamenx.md"
  },
  "REPLCONF": {
    "name": "REPLCONF",
    "syntax": "REPLCONF",
    "summary": "An internal command for configuring the replication stream.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/replconf.md"
  },
  "REPLICAOF": {
    "name": "REPLICAOF",
    "syntax": "REPLICAOF host port|no one",
    "summary": "Configures a server as replica of another, or promotes it to a master.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/replicaof.md"
  },
  "RESET": {
    "name": "RESET",
    "syntax": "RESET",
    "summary": "Resets the connection.",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@fast",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/reset.md"
  },
  "RESTORE": {
    "name": "RESTORE",
    "syntax": "RESTORE key ttl serialized-value [replace] [absttl] [seconds] [frequency]",
    "summary": "Creates a key from the serialized representation of a value.",
    "since": "2.6.0",
    "complexity": "O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/restore.md"
  },
  "RESTORE-ASKING": {
    "name": "RESTORE-ASKING",
    "syntax": "RESTORE-ASKING key ttl serialized-value [replace] [absttl] [seconds] [frequency]",
    "summary": "An internal command for migrating keys in a cluster.",
    "since": "3.0.0",
    "complexity": "O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).",
    "group": "server",
    "acl": [
      "@keyspace",
      "@write",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/restore-asking.md"
  },
  "ROLE": {
    "name": "ROLE",
    "syntax": "ROLE",
    "summary": "Returns the replication role.",
    "since": "2.8.12",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@fast",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/role.md"
  },
  "RPOP": {
    "name": "RPOP",
    "syntax": "RPOP key [count]",
    "summary": "Returns and removes the last elements of a list. Deletes the list if the last element was popped.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the number of elements returned",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/rpop.md"
  },
  "RPOPLPUSH": {
    "name": "RPOPLPUSH",
    "syntax": "RPOPLPUSH source destination",
    "summary": "Returns the last element of a list after removing and pushing it to another list. Deletes the list if the last element was popped.",
    "since": "1.2.0",
    "complexity": "O(1)",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/rpoplpush.md"
  },
  "RPUSH": {
    "name": "RPUSH",
    "syntax": "RPUSH key element ...",
    "summary": "Appends one or more elements to a list. Creates the key if it doesn't exist.",
    "since": "1.0.0",
    "complexity": "O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/rpush.md"
  },
  "RPUSHX": {
    "name": "RPUSHX",
    "syntax": "RPUSHX key element ...",
    "summary": "Appends an element to a list only when the list exists.",
    "since": "2.2.0",
    "complexity": "O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.",
    "group": "list",
    "acl": [
      "@write",
      "@list",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/rpushx.md"
  },
  "SADD": {
    "name": "SADD",
    "syntax": "SADD key member ...",
    "summary": "Adds one or more members to a set. Creates the key if it doesn't exist.",
    "since": "1.0.0",
    "complexity": "O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.",
    "group": "set",
    "acl": [
      "@write",
      "@set",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sadd.md"
  },
  "SAVE": {
    "name": "SAVE",
    "syntax": "SAVE",
    "summary": "Synchronously saves the database(s) to disk.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the total number of keys in all databases",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/save.md"
  },
  "SCAN": {
    "name": "SCAN",
    "syntax": "SCAN cursor [pattern] [count] [type]",
    "summary": "Iterates over the key names in the database.",
    "since": "2.8.0",
    "complexity": "O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/scan.md"
  },
  "SCARD": {
    "name": "SCARD",
    "syntax": "SCARD key",
    "summary": "Returns the number of members in a set.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "set",
    "acl": [
      "@read",
      "@set",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/scard.md"
  },
  "SCRIPT": {
    "name": "SCRIPT",
    "syntax": "SCRIPT",
    "summary": "A container for Lua scripts management commands.",
    "since": "2.6.0",
    "complexity": "Depends on subcommand.",
    "group": "scripting",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/script.md"
  },
  "SCRIPT DEBUG": {
    "name": "SCRIPT DEBUG",
    "syntax": "SCRIPT DEBUG yes|sync|no",
    "summary": "Sets the debug mode of server-side Lua scripts.",
    "since": "3.2.0",
    "complexity": "O(1)",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/script-debug.md"
  },
  "SCRIPT EXISTS": {
    "name": "SCRIPT EXISTS",
    "syntax": "SCRIPT EXISTS sha1 ...",
    "summary": "Determines whether server-side Lua scripts exist in the script cache.",
    "since": "2.6.0",
    "complexity": "O(N) with N being the number of scripts to check (so checking a single script is an O(1) operation).",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/script-exists.md"
  },
  "SCRIPT FLUSH": {
    "name": "SCRIPT FLUSH",
    "syntax": "SCRIPT FLUSH [async|sync]",
    "summary": "Removes all server-side Lua scripts from the script cache.",
    "since": "2.6.0",
    "complexity": "O(N) with N being the number of scripts in cache",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/script-flush.md"
  },
  "SCRIPT HELP": {
    "name": "SCRIPT HELP",
    "syntax": "SCRIPT HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/script-help.md"
  },
  "SCRIPT KILL": {
    "name": "SCRIPT KILL",
    "syntax": "SCRIPT KILL",
    "summary": "Terminates a server-side Lua script during execution.",
    "since": "2.6.0",
    "complexity": "O(1)",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/script-kill.md"
  },
  "SCRIPT LOAD": {
    "name": "SCRIPT LOAD",
    "syntax": "SCRIPT LOAD script",
    "summary": "Loads a server-side Lua script to the script cache.",
    "since": "2.6.0",
    "complexity": "O(N) with N being the length in bytes of the script body.",
    "group": "scripting",
    "acl": [
      "@slow",
      "@scripting"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/script-load.md"
  },
  "SDIFF": {
    "name": "SDIFF",
    "syntax": "SDIFF key ...",
    "summary": "Returns the difference of multiple sets.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the total number of elements in all given sets.",
    "group": "set",
    "acl": [
      "@read",
      "@set",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sdiff.md"
  },
  "SDIFFSTORE": {
    "name": "SDIFFSTORE",
    "syntax": "SDIFFSTORE destination key ...",
    "summary": "Stores the difference of multiple sets in a key.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the total number of elements in all given sets.",
    "group": "set",
    "acl": [
      "@write",
      "@set",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sdiffstore.md"
  },
  "SELECT": {
    "name": "SELECT",
    "syntax": "SELECT index",
    "summary": "Changes the selected database.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "connection",
    "acl": [
      "@fast",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/select.md"
  },
  "SET": {
    "name": "SET",
    "syntax": "SET key value [nx|xx] [get] [seconds|milliseconds|unix-time-seconds|unix-time-milliseconds|keepttl]",
    "summary": "Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/set.md"
  },
  "SETBIT": {
    "name": "SETBIT",
    "syntax": "SETBIT key offset value",
    "summary": "Sets or clears the bit at offset of the string value. Creates the key if it doesn't exist.",
    "since": "2.2.0",
    "complexity": "O(1)",
    "group": "bitmap",
    "acl": [
      "@write",
      "@bitmap",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/setbit.md"
  },
  "SETEX": {
    "name": "SETEX",
    "syntax": "SETEX key seconds value",
    "summary": "Sets the string value and expiration time of a key. Creates the key if it doesn't exist.",
    "since": "2.0.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/setex.md"
  },
  "SETNX": {
    "name": "SETNX",
    "syntax": "SETNX key value",
    "summary": "Set the string value of a key only when the key doesn't exist.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/setnx.md"
  },
  "SETRANGE": {
    "name": "SETRANGE",
    "syntax": "SETRANGE key offset value",
    "summary": "Overwrites a part of a string value with another by an offset. Creates the key if it doesn't exist.",
    "since": "2.2.0",
    "complexity": "O(1), not counting the time taken to copy the new string in place. Usually, this string is very small so the amortized complexity is O(1). Otherwise, complexity is O(M) with M being the length of the value argument.",
    "group": "string",
    "acl": [
      "@write",
      "@string",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/setrange.md"
  },
  "SHUTDOWN": {
    "name": "SHUTDOWN",
    "syntax": "SHUTDOWN [nosave|save] [now] [force] [abort]",
    "summary": "Synchronously saves the database(s) to disk and shuts down the Redis server.",
    "since": "1.0.0",
    "complexity": "O(N) when saving, where N is the total number of keys in all databases when saving data, otherwise O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/shutdown.md"
  },
  "SINTER": {
    "name": "SINTER",
    "syntax": "SINTER key ...",
    "summary": "Returns the intersect of multiple sets.",
    "since": "1.0.0",
    "complexity": "O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.",
    "group": "set",
    "acl": [
      "@read",
      "@set",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sinter.md"
  },
  "SINTERCARD": {
    "name": "SINTERCARD",
    "syntax": "SINTERCARD numkeys key ... [limit]",
    "summary": "Returns the number of members of the intersect of multiple sets.",
    "since": "7.0.0",
    "complexity": "O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.",
    "group": "set",
    "acl": [
      "@read",
      "@set",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sintercard.md"
  },
  "SINTERSTORE": {
    "name": "SINTERSTORE",
    "syntax": "SINTERSTORE destination key ...",
    "summary": "Stores the intersect of multiple sets in a key.",
    "since": "1.0.0",
    "complexity": "O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.",
    "group": "set",
    "acl": [
      "@write",
      "@set",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sinterstore.md"
  },
  "SISMEMBER": {
    "name": "SISMEMBER",
    "syntax": "SISMEMBER key member",
    "summary": "Determines whether a member belongs to a set.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "set",
    "acl": [
      "@read",
      "@set",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sismember.md"
  },
  "SLAVEOF": {
    "name": "SLAVEOF",
    "syntax": "SLAVEOF host port|no one",
    "summary": "Sets a Redis server as a replica of another, or promotes it to being a master.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/slaveof.md"
  },
  "SLOWLOG": {
    "name": "SLOWLOG",
    "syntax": "SLOWLOG",
    "summary": "A container for slow log commands.",
    "since": "2.2.12",
    "complexity": "Depends on subcommand.",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/slowlog.md"
  },
  "SLOWLOG GET": {
    "name": "SLOWLOG GET",
    "syntax": "SLOWLOG GET [count]",
    "summary": "Returns the slow log's entries.",
    "since": "2.2.12",
    "complexity": "O(N) where N is the number of entries returned",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/slowlog-get.md"
  },
  "SLOWLOG HELP": {
    "name": "SLOWLOG HELP",
    "syntax": "SLOWLOG HELP",
    "summary": "Show helpful text about the different subcommands",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/slowlog-help.md"
  },
  "SLOWLOG LEN": {
    "name": "SLOWLOG LEN",
    "syntax": "SLOWLOG LEN",
    "summary": "Returns the number of entries in the slow log.",
    "since": "2.2.12",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/slowlog-len.md"
  },
  "SLOWLOG RESET": {
    "name": "SLOWLOG RESET",
    "syntax": "SLOWLOG RESET",
    "summary": "Clears all entries from the slow log.",
    "since": "2.2.12",
    "complexity": "O(N) where N is the number of entries in the slowlog",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/slowlog-reset.md"
  },
  "SMEMBERS": {
    "name": "SMEMBERS",
    "syntax": "SMEMBERS key",
    "summary": "Returns all members of a set.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the set cardinality.",
    "group": "set",
    "acl": [
      "@read",
      "@set",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/smembers.md"
  },
  "SMISMEMBER": {
    "name": "SMISMEMBER",
    "syntax": "SMISMEMBER key member ...",
    "summary": "Determines whether multiple members belong to a set.",
    "since": "6.2.0",
    "complexity": "O(N) where N is the number of elements being checked for membership",
    "group": "set",
    "acl": [
      "@read",
      "@set",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/smismember.md"
  },
  "SMOVE": {
    "name": "SMOVE",
    "syntax": "SMOVE source destination member",
    "summary": "Moves a member from one set to another.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "set",
    "acl": [
      "@write",
      "@set",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/smove.md"
  },
  "SORT": {
    "name": "SORT",
    "syntax": "SORT key [pattern] [offset count] [pattern ...] [asc|desc] [sorting] [destination]",
    "summary": "Sorts the elements in a list, a set, or a sorted set, optionally storing the result.",
    "since": "1.0.0",
    "complexity": "O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).",
    "group": "generic",
    "acl": [
      "@write",
      "@set",
      "@sortedset",
      "@list",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sort.md"
  },
  "SORT_RO": {
    "name": "SORT_RO",
    "syntax": "SORT_RO key [pattern] [offset count] [pattern ...] [asc|desc] [sorting]",
    "summary": "Returns the sorted elements of a list, a set, or a sorted set.",
    "since": "7.0.0",
    "complexity": "O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).",
    "group": "generic",
    "acl": [
      "@read",
      "@set",
      "@sortedset",
      "@list",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sort_ro.md"
  },
  "SPOP": {
    "name": "SPOP",
    "syntax": "SPOP key [count]",
    "summary": "Returns one or more random members from a set after removing them. Deletes the set if the last member was popped.",
    "since": "1.0.0",
    "complexity": "Without the count argument O(1), otherwise O(N) where N is the value of the passed count.",
    "group": "set",
    "acl": [
      "@write",
      "@set",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/spop.md"
  },
  "SPUBLISH": {
    "name": "SPUBLISH",
    "syntax": "SPUBLISH shardchannel message",
    "summary": "Post a message to a shard channel",
    "since": "7.0.0",
    "complexity": "O(N) where N is the number of clients subscribed to the receiving shard channel.",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/spublish.md"
  },
  "SRANDMEMBER": {
    "name": "SRANDMEMBER",
    "syntax": "SRANDMEMBER key [count]",
    "summary": "Get one or multiple random members from a set",
    "since": "1.0.0",
    "complexity": "Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.",
    "group": "set",
    "acl": [
      "@read",
      "@set",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/srandmember.md"
  },
  "SREM": {
    "name": "SREM",
    "syntax": "SREM key member ...",
    "summary": "Removes one or more members from a set. Deletes the set if the last member was removed.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the number of members to be removed.",
    "group": "set",
    "acl": [
      "@write",
      "@set",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/srem.md"
  },
  "SSCAN": {
    "name": "SSCAN",
    "syntax": "SSCAN key cursor [pattern] [count]",
    "summary": "Iterates over members of a set.",
    "since": "2.8.0",
    "complexity": "O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.",
    "group": "set",
    "acl": [
      "@read",
      "@set",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sscan.md"
  },
  "SSUBSCRIBE": {
    "name": "SSUBSCRIBE",
    "syntax": "SSUBSCRIBE shardchannel ...",
    "summary": "Listens for messages published to shard channels.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the number of shard channels to subscribe to.",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/ssubscribe.md"
  },
  "STRLEN": {
    "name": "STRLEN",
    "syntax": "STRLEN key",
    "summary": "Returns the length of a string value.",
    "since": "2.2.0",
    "complexity": "O(1)",
    "group": "string",
    "acl": [
      "@read",
      "@string",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/strlen.md"
  },
  "SUBSCRIBE": {
    "name": "SUBSCRIBE",
    "syntax": "SUBSCRIBE channel ...",
    "summary": "Listens for messages published to channels.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the number of channels to subscribe to.",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/subscribe.md"
  },
  "SUBSTR": {
    "name": "SUBSTR",
    "syntax": "SUBSTR key start end",
    "summary": "Returns a substring from a string value.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.",
    "group": "string",
    "acl": [
      "@read",
      "@string",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/substr.md"
  },
  "SUNION": {
    "name": "SUNION",
    "syntax": "SUNION key ...",
    "summary": "Returns the union of multiple sets.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the total number of elements in all given sets.",
    "group": "set",
    "acl": [
      "@read",
      "@set",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sunion.md"
  },
  "SUNIONSTORE": {
    "name": "SUNIONSTORE",
    "syntax": "SUNIONSTORE destination key ...",
    "summary": "Stores the union of multiple sets in a key.",
    "since": "1.0.0",
    "complexity": "O(N) where N is the total number of elements in all given sets.",
    "group": "set",
    "acl": [
      "@write",
      "@set",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sunionstore.md"
  },
  "SUNSUBSCRIBE": {
    "name": "SUNSUBSCRIBE",
    "syntax": "SUNSUBSCRIBE [shardchannel ...]",
    "summary": "Stops listening to messages posted to shard channels.",
    "since": "7.0.0",
    "complexity": "O(N) where N is the number of shard channels to unsubscribe.",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sunsubscribe.md"
  },
  "SWAPDB": {
    "name": "SWAPDB",
    "syntax": "SWAPDB index1 index2",
    "summary": "Swaps two Redis databases.",
    "since": "4.0.0",
    "complexity": "O(N) where N is the count of clients watching or blocking on keys from both databases.",
    "group": "server",
    "acl": [
      "@keyspace",
      "@write",
      "@fast",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/swapdb.md"
  },
  "SYNC": {
    "name": "SYNC",
    "syntax": "SYNC",
    "summary": "An internal command used in replication.",
    "since": "1.0.0",
    "complexity": "",
    "group": "server",
    "acl": [
      "@admin",
      "@slow",
      "@dangerous"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/sync.md"
  },
  "TIME": {
    "name": "TIME",
    "syntax": "TIME",
    "summary": "Returns the server time.",
    "since": "2.6.0",
    "complexity": "O(1)",
    "group": "server",
    "acl": [
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/time.md"
  },
  "TOUCH": {
    "name": "TOUCH",
    "syntax": "TOUCH key ...",
    "summary": "Returns the number of existing keys out of those specified after updating the time they were last accessed.",
    "since": "3.2.1",
    "complexity": "O(N) where N is the number of keys that will be touched.",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/touch.md"
  },
  "TTL": {
    "name": "TTL",
    "syntax": "TTL key",
    "summary": "Returns the expiration time in seconds of a key.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/ttl.md"
  },
  "TYPE": {
    "name": "TYPE",
    "syntax": "TYPE key",
    "summary": "Determines the type of value stored at a key.",
    "since": "1.0.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@read",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/type.md"
  },
  "UNLINK": {
    "name": "UNLINK",
    "syntax": "UNLINK key ...",
    "summary": "Asynchronously deletes one or more keys.",
    "since": "4.0.0",
    "complexity": "O(1) for each key removed regardless of its size. Then the command does O(N) work in a different thread in order to reclaim memory, where N is the number of allocations the deleted objects where composed of.",
    "group": "generic",
    "acl": [
      "@keyspace",
      "@write",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/unlink.md"
  },
  "UNSUBSCRIBE": {
    "name": "UNSUBSCRIBE",
    "syntax": "UNSUBSCRIBE [channel ...]",
    "summary": "Stops listening to messages posted to channels.",
    "since": "2.0.0",
    "complexity": "O(N) where N is the number of channels to unsubscribe.",
    "group": "pubsub",
    "acl": [
      "@pubsub",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/unsubscribe.md"
  },
  "UNWATCH": {
    "name": "UNWATCH",
    "syntax": "UNWATCH",
    "summary": "Forgets about watched keys of a transaction.",
    "since": "2.2.0",
    "complexity": "O(1)",
    "group": "transactions",
    "acl": [
      "@fast",
      "@transaction"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/unwatch.md"
  },
  "WAIT": {
    "name": "WAIT",
    "syntax": "WAIT numreplicas timeout",
    "summary": "Blocks until the asynchronous replication of all preceding write commands sent by the connection is completed.",
    "since": "3.0.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/wait.md"
  },
  "WAITAOF": {
    "name": "WAITAOF",
    "syntax": "WAITAOF numlocal numreplicas timeout",
    "summary": "Blocks until all of the preceding write commands sent by the connection are written to the append-only file of the master and/or replicas.",
    "since": "7.2.0",
    "complexity": "O(1)",
    "group": "generic",
    "acl": [
      "@slow",
      "@connection"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/waitaof.md"
  },
  "WATCH": {
    "name": "WATCH",
    "syntax": "WATCH key ...",
    "summary": "Monitors changes to keys to determine the execution of a transaction.",
    "since": "2.2.0",
    "complexity": "O(1) for every key.",
    "group": "transactions",
    "acl": [
      "@fast",
      "@transaction"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/watch.md"
  },
  "XACK": {
    "name": "XACK",
    "syntax": "XACK key group id ...",
    "summary": "Returns the number of messages that were successfully acknowledged by the consumer group member of a stream.",
    "since": "5.0.0",
    "complexity": "O(1) for each message ID processed.",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xack.md"
  },
  "XADD": {
    "name": "XADD",
    "syntax": "XADD key [nomkstream] [maxlen|minid [equal|approximately] threshold [count]] auto-id|id field value ...",
    "summary": "Appends a new message to a stream. Creates the key if it doesn't exist.",
    "since": "5.0.0",
    "complexity": "O(1) when adding a new entry, O(N) when trimming where N being the number of entries evicted.",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xadd.md"
  },
  "XAUTOCLAIM": {
    "name": "XAUTOCLAIM",
    "syntax": "XAUTOCLAIM key group consumer min-idle-time start [count] [justid]",
    "summary": "Changes, or acquires, ownership of messages in a consumer group, as if the messages were delivered to as consumer group member.",
    "since": "6.2.0",
    "complexity": "O(1) if COUNT is small.",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xautoclaim.md"
  },
  "XCLAIM": {
    "name": "XCLAIM",
    "syntax": "XCLAIM key group consumer min-idle-time id ... [ms] [unix-time-milliseconds] [count] [force] [justid] [lastid]",
    "summary": "Changes, or acquires, ownership of a message in a consumer group, as if the message was delivered a consumer group member.",
    "since": "5.0.0",
    "complexity": "O(log N) with N being the number of messages in the PEL of the consumer group.",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xclaim.md"
  },
  "XDEL": {
    "name": "XDEL",
    "syntax": "XDEL key id ...",
    "summary": "Returns the number of messages after removing them from a stream.",
    "since": "5.0.0",
    "complexity": "O(1) for each single item to delete in the stream, regardless of the stream size.",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xdel.md"
  },
  "XGROUP": {
    "name": "XGROUP",
    "syntax": "XGROUP",
    "summary": "A container for consumer groups commands.",
    "since": "5.0.0",
    "complexity": "Depends on subcommand.",
    "group": "stream",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xgroup.md"
  },
  "XGROUP CREATE": {
    "name": "XGROUP CREATE",
    "syntax": "XGROUP CREATE key group id|new-id [mkstream] [entries-read]",
    "summary": "Creates a consumer group.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xgroup-create.md"
  },
  "XGROUP CREATECONSUMER": {
    "name": "XGROUP CREATECONSUMER",
    "syntax": "XGROUP CREATECONSUMER key group consumer",
    "summary": "Creates a consumer in a consumer group.",
    "since": "6.2.0",
    "complexity": "O(1)",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xgroup-createconsumer.md"
  },
  "XGROUP DELCONSUMER": {
    "name": "XGROUP DELCONSUMER",
    "syntax": "XGROUP DELCONSUMER key group consumer",
    "summary": "Deletes a consumer from a consumer group.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xgroup-delconsumer.md"
  },
  "XGROUP DESTROY": {
    "name": "XGROUP DESTROY",
    "syntax": "XGROUP DESTROY key group",
    "summary": "Destroys a consumer group.",
    "since": "5.0.0",
    "complexity": "O(N) where N is the number of entries in the group's pending entries list (PEL).",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xgroup-destroy.md"
  },
  "XGROUP HELP": {
    "name": "XGROUP HELP",
    "syntax": "XGROUP HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "stream",
    "acl": [
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xgroup-help.md"
  },
  "XGROUP SETID": {
    "name": "XGROUP SETID",
    "syntax": "XGROUP SETID key group id|new-id [entries-read]",
    "summary": "Sets the last-delivered ID of a consumer group.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xgroup-setid.md"
  },
  "XINFO": {
    "name": "XINFO",
    "syntax": "XINFO",
    "summary": "A container for stream introspection commands.",
    "since": "5.0.0",
    "complexity": "Depends on subcommand.",
    "group": "stream",
    "acl": [
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xinfo.md"
  },
  "XINFO CONSUMERS": {
    "name": "XINFO CONSUMERS",
    "syntax": "XINFO CONSUMERS key group",
    "summary": "Returns a list of the consumers in a consumer group.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "stream",
    "acl": [
      "@read",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xinfo-consumers.md"
  },
  "XINFO GROUPS": {
    "name": "XINFO GROUPS",
    "syntax": "XINFO GROUPS key",
    "summary": "Returns a list of the consumer groups of a stream.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "stream",
    "acl": [
      "@read",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xinfo-groups.md"
  },
  "XINFO HELP": {
    "name": "XINFO HELP",
    "syntax": "XINFO HELP",
    "summary": "Returns helpful text about the different subcommands.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "stream",
    "acl": [
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xinfo-help.md"
  },
  "XINFO STREAM": {
    "name": "XINFO STREAM",
    "syntax": "XINFO STREAM key [full [count]]",
    "summary": "Returns information about a stream.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "stream",
    "acl": [
      "@read",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xinfo-stream.md"
  },
  "XLEN": {
    "name": "XLEN",
    "syntax": "XLEN key",
    "summary": "Return the number of messages in a stream.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "stream",
    "acl": [
      "@read",
      "@stream",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xlen.md"
  },
  "XPENDING": {
    "name": "XPENDING",
    "syntax": "XPENDING key group [[min-idle-time] start end count [consumer]]",
    "summary": "Returns the information and entries from a stream consumer group's pending entries list.",
    "since": "5.0.0",
    "complexity": "O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). O(M), where M is the total number of entries scanned when used with the IDLE filter. When the command returns just the summary and the list of consumers is small, it runs in O(1) time; otherwise, an additional O(N) time for iterating every consumer.",
    "group": "stream",
    "acl": [
      "@read",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xpending.md"
  },
  "XRANGE": {
    "name": "XRANGE",
    "syntax": "XRANGE key start end [count]",
    "summary": "Returns the messages from a stream within a range of IDs.",
    "since": "5.0.0",
    "complexity": "O(N) with N being the number of elements being returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).",
    "group": "stream",
    "acl": [
      "@read",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xrange.md"
  },
  "XREAD": {
    "name": "XREAD",
    "syntax": "XREAD [count] [milliseconds] key ... id ...",
    "summary": "Returns messages from multiple streams with IDs greater than the ones requested. Blocks until a message is available otherwise.",
    "since": "5.0.0",
    "complexity": "",
    "group": "stream",
    "acl": [
      "@read",
      "@stream",
      "@slow",
      "@blocking"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xread.md"
  },
  "XREADGROUP": {
    "name": "XREADGROUP",
    "syntax": "XREADGROUP group consumer [count] [milliseconds] [noack] key ... id ...",
    "summary": "Returns new or historical messages from a stream for a consumer in a group. Blocks until a message is available otherwise.",
    "since": "5.0.0",
    "complexity": "For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@slow",
      "@blocking"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xreadgroup.md"
  },
  "XREVRANGE": {
    "name": "XREVRANGE",
    "syntax": "XREVRANGE key end start [count]",
    "summary": "Returns the messages from a stream within a range of IDs in reverse order.",
    "since": "5.0.0",
    "complexity": "O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).",
    "group": "stream",
    "acl": [
      "@read",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xrevrange.md"
  },
  "XSETID": {
    "name": "XSETID",
    "syntax": "XSETID key last-id [entries-added] [max-deleted-id]",
    "summary": "An internal command for replicating stream values.",
    "since": "5.0.0",
    "complexity": "O(1)",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xsetid.md"
  },
  "XTRIM": {
    "name": "XTRIM",
    "syntax": "XTRIM key maxlen|minid [equal|approximately] threshold [count]",
    "summary": "Deletes messages from the beginning of a stream.",
    "since": "5.0.0",
    "complexity": "O(N), with N being the number of evicted entries. Constant times are very small however, since entries are organized in macro nodes containing multiple entries that can be released with a single deallocation.",
    "group": "stream",
    "acl": [
      "@write",
      "@stream",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/xtrim.md"
  },
  "ZADD": {
    "name": "ZADD",
    "syntax": "ZADD key [nx|xx] [gt|lt] [change] [increment] score member ...",
    "summary": "Adds one or more members to a sorted set, or updates their scores. Creates the key if it doesn't exist.",
    "since": "1.2.0",
    "complexity": "O(log(N)) for each item added, where N is the number of elements in the sorted set.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zadd.md"
  },
  "ZCARD": {
    "name": "ZCARD",
    "syntax": "ZCARD key",
    "summary": "Returns the number of members in a sorted set.",
    "since": "1.2.0",
    "complexity": "O(1)",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zcard.md"
  },
  "ZCOUNT": {
    "name": "ZCOUNT",
    "syntax": "ZCOUNT key min max",
    "summary": "Returns the count of members in a sorted set that have scores within a range.",
    "since": "2.0.0",
    "complexity": "O(log(N)) with N being the number of elements in the sorted set.",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zcount.md"
  },
  "ZDIFF": {
    "name": "ZDIFF",
    "syntax": "ZDIFF numkeys key ... [withscores]",
    "summary": "Returns the difference between multiple sorted sets.",
    "since": "6.2.0",
    "complexity": "O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zdiff.md"
  },
  "ZDIFFSTORE": {
    "name": "ZDIFFSTORE",
    "syntax": "ZDIFFSTORE destination numkeys key ...",
    "summary": "Stores the difference of multiple sorted sets in a key.",
    "since": "6.2.0",
    "complexity": "O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zdiffstore.md"
  },
  "ZINCRBY": {
    "name": "ZINCRBY",
    "syntax": "ZINCRBY key increment member",
    "summary": "Increments the score of a member in a sorted set.",
    "since": "1.2.0",
    "complexity": "O(log(N)) where N is the number of elements in the sorted set.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zincrby.md"
  },
  "ZINTER": {
    "name": "ZINTER",
    "syntax": "ZINTER numkeys key ... [weight ...] [sum|min|max] [withscores]",
    "summary": "Returns the intersect of multiple sorted sets.",
    "since": "6.2.0",
    "complexity": "O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zinter.md"
  },
  "ZINTERCARD": {
    "name": "ZINTERCARD",
    "syntax": "ZINTERCARD numkeys key ... [limit]",
    "summary": "Returns the number of members of the intersect of multiple sorted sets.",
    "since": "7.0.0",
    "complexity": "O(N*K) worst case with N being the smallest input sorted set, K being the number of input sorted sets.",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zintercard.md"
  },
  "ZINTERSTORE": {
    "name": "ZINTERSTORE",
    "syntax": "ZINTERSTORE destination numkeys key ... [weight ...] [sum|min|max]",
    "summary": "Stores the intersect of multiple sorted sets in a key.",
    "since": "2.0.0",
    "complexity": "O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zinterstore.md"
  },
  "ZLEXCOUNT": {
    "name": "ZLEXCOUNT",
    "syntax": "ZLEXCOUNT key min max",
    "summary": "Returns the number of members in a sorted set within a lexicographical range.",
    "since": "2.8.9",
    "complexity": "O(log(N)) with N being the number of elements in the sorted set.",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zlexcount.md"
  },
  "ZMPOP": {
    "name": "ZMPOP",
    "syntax": "ZMPOP numkeys key ... min|max [count]",
    "summary": "Returns the highest- or lowest-scoring members from one or more sorted sets after removing them. Deletes the sorted set if the last member was popped.",
    "since": "7.0.0",
    "complexity": "O(K) + O(M*log(N)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zmpop.md"
  },
  "ZMSCORE": {
    "name": "ZMSCORE",
    "syntax": "ZMSCORE key member ...",
    "summary": "Returns the score of one or more members in a sorted set.",
    "since": "6.2.0",
    "complexity": "O(N) where N is the number of members being requested.",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zmscore.md"
  },
  "ZPOPMAX": {
    "name": "ZPOPMAX",
    "syntax": "ZPOPMAX key [count]",
    "summary": "Returns the highest-scoring members from a sorted set after removing them. Deletes the sorted set if the last member was popped.",
    "since": "5.0.0",
    "complexity": "O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zpopmax.md"
  },
  "ZPOPMIN": {
    "name": "ZPOPMIN",
    "syntax": "ZPOPMIN key [count]",
    "summary": "Returns the lowest-scoring members from a sorted set after removing them. Deletes the sorted set if the last member was popped.",
    "since": "5.0.0",
    "complexity": "O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zpopmin.md"
  },
  "ZRANDMEMBER": {
    "name": "ZRANDMEMBER",
    "syntax": "ZRANDMEMBER key [count [withscores]]",
    "summary": "Returns one or more random members from a sorted set.",
    "since": "6.2.0",
    "complexity": "O(N) where N is the number of members returned",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zrandmember.md"
  },
  "ZRANGE": {
    "name": "ZRANGE",
    "syntax": "ZRANGE key start stop [byscore|bylex] [rev] [offset count] [withscores]",
    "summary": "Returns members in a sorted set within a range of indexes.",
    "since": "1.2.0",
    "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zrange.md"
  },
  "ZRANGEBYLEX": {
    "name": "ZRANGEBYLEX",
    "syntax": "ZRANGEBYLEX key min max [offset count]",
    "summary": "Returns members in a sorted set within a lexicographical range.",
    "since": "2.8.9",
    "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zrangebylex.md"
  },
  "ZRANGEBYSCORE": {
    "name": "ZRANGEBYSCORE",
    "syntax": "ZRANGEBYSCORE key min max [withscores] [offset count]",
    "summary": "Returns members in a sorted set within a range of scores.",
    "since": "1.0.5",
    "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zrangebyscore.md"
  },
  "ZRANGESTORE": {
    "name": "ZRANGESTORE",
    "syntax": "ZRANGESTORE dst src min max [byscore|bylex] [rev] [offset count]",
    "summary": "Stores a range of members from sorted set in a key.",
    "since": "6.2.0",
    "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements stored into the destination key.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zrangestore.md"
  },
  "ZRANK": {
    "name": "ZRANK",
    "syntax": "ZRANK key member [withscore]",
    "summary": "Returns the index of a member in a sorted set ordered by ascending scores.",
    "since": "2.0.0",
    "complexity": "O(log(N))",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zrank.md"
  },
  "ZREM": {
    "name": "ZREM",
    "syntax": "ZREM key member ...",
    "summary": "Removes one or more members from a sorted set. Deletes the sorted set if all members were removed.",
    "since": "1.2.0",
    "complexity": "O(M*log(N)) with N being the number of elements in the sorted set and M the number of elements to be removed.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zrem.md"
  },
  "ZREMRANGEBYLEX": {
    "name": "ZREMRANGEBYLEX",
    "syntax": "ZREMRANGEBYLEX key min max",
    "summary": "Removes members in a sorted set within a lexicographical range. Deletes the sorted set if all members were removed.",
    "since": "2.8.9",
    "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zremrangebylex.md"
  },
  "ZREMRANGEBYRANK": {
    "name": "ZREMRANGEBYRANK",
    "syntax": "ZREMRANGEBYRANK key start stop",
    "summary": "Removes members in a sorted set within a range of indexes. Deletes the sorted set if all members were removed.",
    "since": "2.0.0",
    "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zremrangebyrank.md"
  },
  "ZREMRANGEBYSCORE": {
    "name": "ZREMRANGEBYSCORE",
    "syntax": "ZREMRANGEBYSCORE key min max",
    "summary": "Removes members in a sorted set within a range of scores. Deletes the sorted set if all members were removed.",
    "since": "1.2.0",
    "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zremrangebyscore.md"
  },
  "ZREVRANGE": {
    "name": "ZREVRANGE",
    "syntax": "ZREVRANGE key start stop [withscores]",
    "summary": "Returns members in a sorted set within a range of indexes in reverse order.",
    "since": "1.2.0",
    "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zrevrange.md"
  },
  "ZREVRANGEBYLEX": {
    "name": "ZREVRANGEBYLEX",
    "syntax": "ZREVRANGEBYLEX key max min [offset count]",
    "summary": "Returns members in a sorted set within a lexicographical range in reverse order.",
    "since": "2.8.9",
    "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zrevrangebylex.md"
  },
  "ZREVRANGEBYSCORE": {
    "name": "ZREVRANGEBYSCORE",
    "syntax": "ZREVRANGEBYSCORE key max min [withscores] [offset count]",
    "summary": "Returns members in a sorted set within a range of scores in reverse order.",
    "since": "2.2.0",
    "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zrevrangebyscore.md"
  },
  "ZREVRANK": {
    "name": "ZREVRANK",
    "syntax": "ZREVRANK key member [withscore]",
    "summary": "Returns the index of a member in a sorted set ordered by descending scores.",
    "since": "2.0.0",
    "complexity": "O(log(N))",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zrevrank.md"
  },
  "ZSCAN": {
    "name": "ZSCAN",
    "syntax": "ZSCAN key cursor [pattern] [count]",
    "summary": "Iterates over members and scores of a sorted set.",
    "since": "2.8.0",
    "complexity": "O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zscan.md"
  },
  "ZSCORE": {
    "name": "ZSCORE",
    "syntax": "ZSCORE key member",
    "summary": "Returns the score of a member in a sorted set.",
    "since": "1.2.0",
    "complexity": "O(1)",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@fast"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zscore.md"
  },
  "ZUNION": {
    "name": "ZUNION",
    "syntax": "ZUNION numkeys key ... [weight ...] [sum|min|max] [withscores]",
    "summary": "Returns the union of multiple sorted sets.",
    "since": "6.2.0",
    "complexity": "O(N)+O(M*log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.",
    "group": "sorted-set",
    "acl": [
      "@read",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zunion.md"
  },
  "ZUNIONSTORE": {
    "name": "ZUNIONSTORE",
    "syntax": "ZUNIONSTORE destination numkeys key ... [weight ...] [sum|min|max]",
    "summary": "Stores the union of multiple sorted sets in a key.",
    "since": "2.0.0",
    "complexity": "O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.",
    "group": "sorted-set",
    "acl": [
      "@write",
      "@sortedset",
      "@slow"
    ],
    "url": "https://github.com/redis/redis-doc/blob/master/commands/zunionstore.md"
  }
}

export const REDIS_COMMAND_NAMES = Object.keys(REDIS_COMMAND_DOCS).sort((a, b) => b.length - a.length)
