({
	init : function(component, event, helper) {
        const navService = helper.getNavService(component);
        const workspaceApi = helper.getWorkspaceApi(component);
        const recordId = component.get('v.recordId');
        const recordName = component.get('v.recordName');
        const pageReference = helper.getNavigateToSObjectRecordPageRef(recordId, recordName);
        const defaultUrl = "#";
        
        navService.generateUrl(pageReference)
            .then($A.getCallback(url => {
                component.set("v.url", url ? url : defaultUrl);
            }))
            .catch($A.getCallback(error => {
                component.set("v.url", defaultUrl);
                console.log(error);
            }));
        
        
        workspaceApi.isConsoleNavigation()
        .then($A.getCallback( isConsoleNavigation => {
                component.set("v.isConsoleNavigation", isConsoleNavigation);
        }))
        .catch(error => console.log(error));
    },
    handleClick: function(component, event, helper) {
        const isConsoleNavigation = component.get("v.isConsoleNavigation")
        if(isConsoleNavigation) {
            event.preventDefault();
            const workspaceApi = helper.getWorkspaceApi(component);
            const recordId = component.get('v.recordId');
        
            workspaceApi.openTab({
                url: `#/sObject/${recordId}/view`,
                focus: true
            });
        }
		
    }
})