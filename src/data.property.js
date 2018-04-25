module.exports = {
    commercialUse: {
        mark: 1,
        description: "This software and derivatives may be used for commercial purposes.",
        type:"Permission"
    },
    destribution: {
        mark: 1,
        description: "This software may be distributed.",
        type:"Permission"
    },
    modification: {
        mark: 1,
        description: "This software may be modified.",
        type:"Permission"
    },
    patentUse: {
        mark: 1,
        description: "This license provides an express grant of patent rights from contributors.",
        type:"Permission"
    },
    privateUse: {
        mark: 1,
        description: "Source can be used for private uses.",
        type:"Permission"
    },
    discloseSource: {
        mark: 1,
        description: "Source code must be made available when the software is distributed.",
        type:"Condition"        
    },
    licenseAndCopyRightNotice: {
        mark: 1,
        description: " A copy of the license and copyright notice must be included with the software",
        type:"Condition"     
    },
    sameLicense: {
        mark: 1,
        description: "Modifications must be released under the same license when distributing the software. In some cases a similar or related license may be used.",
        type:"Condition"     
    },
    stateChange: {
        mark: 1,
        description: "Changes made to the code must be documented.",
        type:"Condition"     
    },
    liability: {
        mark: 1,
        description: "This license includes a limitation of liability.",
        type:"Limitaion"     
    },
    tradeMarkUse: {
        mark: 1,
        description: "This license explicitly states that it does NOT grant trademark rights, even though licenses without such a statement probably do not grant any imlicit trademark rights.",
        type:"Limitaion"  
    },
    warranty: {
        mark: 1,
        description: "The license explicitly states that it does NOT provide any warranty.",
        type:"Limitaion"  
    }
};