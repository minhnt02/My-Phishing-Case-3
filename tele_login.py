import asyncio

from telethon import TelegramClient, events, sync
from telethon.hints import EntitiesLike
from telethon.network import ConnectionTcpAbridged
from telethon.network.mtprotostate import MTProtoState
from telethon.crypto.authkey import AuthKey
from telethon.network.connection.tcpobfuscated import ConnectionTcpObfuscated
from telethon.network.connection.tcpintermediate import IntermediatePacketCodec
from telethon.sessions import Session, MemorySession


async def login():


    sess = MemorySession()
    sess.auth_key = AuthKey(bytes.fromhex(
"<access_token>"))
    # sess.server_address

    sess.set_dc(5,"91.108.56.153",443)

    # client = TelegramClient('anon','28717846','f7fa23196997eba26651e4db016fdccf')
    client = TelegramClient(sess,'28717846','f7fa23196997eba26651e4db016fdccf')
    client.get_profile_photos()
    # Starting as a bot account
    # await client.start(bot_token=bot_token)

    # Starting as a user account
    # z = await client.start("+84963411701")
    z = await client.start()

    me = await client.get_me()
    print(me.username)
    msg = await client.get_messages("<username>",limit=10)

    print(msg)
# Please enter the code you received: 12345
# Please enter your password: *******
# (You are now logged in)

# Starting using a context manager (this calls start()):
#     client.run_until_disconnected()
#     with client:
#         pass
asyncio.run(login())
