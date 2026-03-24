# Audit logs

e-sign software must store a inmuttable tamper-proof audit log for every action.

We can take 2 paths, use an external service or create one... I don't like easy ways, so I will create one. To do this, first I'm gonna define _every_ action that must be stored.

**Audit log required:**
- Sign request
- Sign emit
- Sign expire
- Login
- Register
- Logout

Thankfully, using an external user auth manager, we can relate auth audit logs (login and register to that service). So, we just need to store all the others.

Knowing this, we can continue to future steps


### Data protection

As I said before, this must be inmutable and tamper-proof log.

To make it tamper-proof (well, it isn't tamper-proof, it other thing) we are gonna make all log dependant of the state of the one that is before, so we can check all as a chain, if one is modified or deleted, the chain breaks.

**How?**

Well, after some research, a popular way to do it is using HMAC to hash the chain and publishing a log of certain anchors to the public. I will dig deeper on this with more time, but GitHub may be a great way to store logs and having less problems on my side.