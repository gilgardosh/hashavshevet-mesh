# hashavshevet-mesh


# Errors and bugs
getBatches - form has errors on Hashavshevet's side. however it is designed - no more than one record is returned. the only current way to make it partially work is to add filter by ID, and ask for one batch each request by it's ID.

# TODOs
- add filtering on every field for "getAll" requests
- complete missing calls commented on .meshrc.ymal
- cross requests calls (every result ID can fetch next entity, etc.)
- better login