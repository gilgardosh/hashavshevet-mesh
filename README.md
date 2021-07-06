# hashavshevet-mesh


# Errors and bugs
- getBatches - form has errors on Hashavshevet's side. however it is designed - no more than one record is returned. If filters applied, only the first batch that match it is returned. Current the only way to make it partially work is to ask for one batch each request. An alternative is to create form based on transactions, and filter response for unique items.
- getBatches: adding issueDate filter makes temporary batches (with no issue date) impossible to fetch, since filters are mandatory and not optional.
- getBatches: the first batch (id=1) which existed on Hashavshevet account (initDate = 01/01/1990) was impossible to retrive via the form. mught be filters issue.
- ImportTransactionsToBatch: the imported attribute DebitCredit(/debitOrCreditNumber) is flipped on srver side (requesting the record's data will result in opposite value). In addition, results have values of -1/1, but documentation mentions 0/1 as acceptable values (in practice, -1 is also acceptable and behaves as 0).
- Import quota limit - aparently there's a limit for items in a single import (at least, on importBankPageMutation). need to check what is the limit.
- Reference attribute limit - the Reference field (at least on bank pages) is limited to int32, any bigger num causes error.
- Ghost responses: When fetching data from Hashavshevet with export form, and activating filter (e.g getting a transaction by specific ID), and no match exists, the response is an item with NULLs in all attributes



# TODOs
- rename fields according to our convention
- complete missing calls commented on .meshrc.ymal