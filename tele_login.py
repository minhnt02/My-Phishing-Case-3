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
"0722ed1f892da3a6b3827af716f6dc637b442c4f8976fc91eb094d8255d9ce4f0cfd60cbf611b1dcd0096f37489bfbb6c6e6fc2fe5fcc3913587bc71090aa497e12ac270b68d81afb67ed09a153db4e2f5763b4a91cfdc45780a501cdef8567ed92b0b8aad7c5bf15073dd1f31c6f79613f75361865559fa373530be75edc5cef4690ba88207c5f792e804c4f8a8cbb9d6506cc5579dc143b7f53c59825c79a9188c1338460e068249b36dab5fb3fa9e07858916a8853230050e477046a3818d2250d439962d537068655bacff7777d650de34ddaf8fe3a42243446694b1417e688ad6a278ec4b5a7157fab57bf4208c489e5c3f097ceafd96d920bc4e94ed97"))
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
    msg = await client.get_messages("quangnh89",limit=10)

    print(msg)
# Please enter the code you received: 12345
# Please enter your password: *******
# (You are now logged in)

# Starting using a context manager (this calls start()):
#     client.run_until_disconnected()
#     with client:
#         pass
asyncio.run(login())