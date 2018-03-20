# Multi-Tier Components
This is a **working** example of how I implemented SoC on a client's chatbox (without a central state manager).  
Branding and skinning were removed as was API references.  In code, the chatbox was connected to the backend and sync'ed to the other clients via websockets handled server side.  The actual components handled data through Redux "conversation" store.