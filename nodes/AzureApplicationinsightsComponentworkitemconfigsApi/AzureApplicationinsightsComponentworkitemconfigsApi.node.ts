import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApplicationinsightsComponentworkitemconfigsApi implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Applicationinsights Componentworkitemconfigs API',
                name: 'N8nDevAzureApplicationinsightsComponentworkitemconfigsApi',
                icon: { light: 'file:./azure-applicationinsights-componentworkitemconfigs-api.png', dark: 'file:./azure-applicationinsights-componentworkitemconfigs-api.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure App Insights client for component work item configs',
                defaults: { name: 'Azure Applicationinsights Componentworkitemconfigs API' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApplicationinsightsComponentworkitemconfigsApiApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
