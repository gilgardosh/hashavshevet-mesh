# hashavshevet-mesh


# Errors and bugs
getBatch - form has errors on Hashavshevet's side. however it is designed - no more than one record is returned. the only current way to make it partially work is to add filter by ID, and ask for one batch each request by it's ID.
In future, after Hashavshevet server update, can be updated here like other 'get' queries

# TODOs
- add filtering on every field for "getAll" requests
- rename fields according to our convention
- cross requests calls (every result ID can fetch next entity, etc.)
- better login
- complete missing calls commented on .meshrc.ymal
- merge json schemas to one file using $ref