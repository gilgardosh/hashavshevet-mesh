# hashavshevet-mesh


# Errors and bugs
- getBatches - form has errors on Hashavshevet's side. however it is designed - no more than one record is returned. If filters applied, only the first batch that match it is returned. Current the only way to make it partially work is to ask for one batch each request. An alternative is to create form based on transactions, and filter response for unique items.
- getBatches: adding issueDate filter makes temporary batches (with no issue date) impossible to fetch, since filters are mandatory and not optional.
- getBatches: the first batch (id=1) which existed on Hashavshevet account (initDate = 01/01/1990) was impossible to retrieve via the form. might be filters issue.
- ImportTransactionsToBatch: the imported attribute DebitCredit(/debitOrCreditNumber) is flipped on server side (requesting the record's data will result in opposite value). In addition, results have values of -1/1, but documentation mentions 0/1 as acceptable values (in practice, -1 is also acceptable and behaves as 0).
- Import quota limit - aperently there's a limit for items in a single import (at least, on importBankPageMutation). need to check what is the limit.
- Reference attribute limit - the Reference field (at least on bank pages) is limited to int32, any bigger num causes error.
- Ghost responses - When fetching data from Hashavshevet with export form, and activating filter (e.g getting a transaction by specific ID), and no match exists, the response is an item with NULLs in all attributes
- Updating data - currently there's no method for updating or deleting data via the API. Only importing and viewing.
- getRecords - The form in Hashavshevet on which this request is built, is derived from accounts catalogue. So if a transaction is imported with fault account ID, it will not appear on records requests.

# TODOs
- rename fields according to our convention
- complete missing calls commented on .meshrc.ymal