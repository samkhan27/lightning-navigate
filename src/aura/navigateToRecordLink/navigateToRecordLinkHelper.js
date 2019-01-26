({
    navigate: function (component, pageReference, replace) {
        const navService = component.find("navService");
        navService.navigate(pageReference, replace);
    },

    getNavigateToSObjectRecordPageRef: function (sObjectId, sObjectName) {
        return {
            type: 'standard__recordPage',
            attributes: {
                recordId: sObjectId,
                objectApiName: sObjectName,
                actionName: 'view'
            }
        };
    },

    getNavService: function (component) {
        return component.find("navService");
    },

    getWorkspaceApi: function (component) {
        return component.find("workspace");
    }
})