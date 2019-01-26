# lightning-navigate

This repo provides an example of how to use the (Navigation)[https://developer.salesforce.com/docs/component-library/bundle/lightning:navigation/documentation] and (WorkspaceApi)[https://developer.salesforce.com/docs/component-library/bundle/lightning:workspaceAPI/documentation] service components to navigate inside Lightning Experience (LEX).
THe example use case shown here is that of an anchor tag that enables an user to navigate to a particular record. 

This is a common use case for a lot of clients and the usually the requirements are as follows:

 - Right clicking will open the record view page in a new tab. 
 - If console navigation is enabled, then the rocord page should open in a new console tab.
 - If console navigation is not enabled, clicking should navigate to the record view page in LEX in the current tab.
