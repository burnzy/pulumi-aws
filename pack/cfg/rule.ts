// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides an AWS Config Rule.
 * 
 * ~> **Note:** Config Rule requires an existing [Configuration Recorder](/docs/providers/aws/r/config_configuration_recorder.html) to be present. Use of `depends_on` is recommended (as shown below) to avoid race conditions.
 */
export class Rule extends fabric.Resource {
    /**
     * The ARN of the config rule
     */
    public /*out*/ readonly arn: fabric.Computed<string>;
    /**
     * Description of the rule
     */
    public readonly description?: fabric.Computed<string>;
    /**
     * A string in JSON format that is passed to the AWS Config rule Lambda function.
     */
    public readonly inputParameters?: fabric.Computed<string>;
    /**
     * The frequency that you want AWS Config to run evaluations for a rule that
     * is triggered periodically. If specified, requires `message_type` to be `ScheduledNotification`.
     */
    public readonly maximumExecutionFrequency?: fabric.Computed<string>;
    /**
     * The name of the rule
     */
    public readonly name: fabric.Computed<string>;
    /**
     * The ID of the config rule
     */
    public /*out*/ readonly ruleId: fabric.Computed<string>;
    /**
     * Scope defines which resources can trigger an evaluation for the rule as documented below.
     */
    public readonly scope?: fabric.Computed<{ complianceResourceId?: string, complianceResourceTypes?: string[], tagKey?: string, tagValue?: string }[]>;
    /**
     * Source specifies the rule owner, the rule identifier, and the notifications that cause
     * the function to evaluate your AWS resources as documented below.
     */
    public readonly source: fabric.Computed<{ owner: string, sourceDetail?: { eventSource?: string, maximumExecutionFrequency?: string, messageType?: string }[], sourceIdentifier: string }[]>;

    /**
     * Create a Rule resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Rule instance
     * @param args A collection of arguments for creating this Rule intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: RuleArgs, dependsOn?: fabric.Resource[]) {
        if (args.source === undefined) {
            throw new Error("Missing required property 'source'");
        }
        super("aws:cfg/rule:Rule", urnName, {
            "description": args.description,
            "inputParameters": args.inputParameters,
            "maximumExecutionFrequency": args.maximumExecutionFrequency,
            "name": args.name,
            "scope": args.scope,
            "source": args.source,
            "arn": undefined,
            "ruleId": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Rule resource.
 */
export interface RuleArgs {
    /**
     * Description of the rule
     */
    readonly description?: fabric.ComputedValue<string>;
    /**
     * A string in JSON format that is passed to the AWS Config rule Lambda function.
     */
    readonly inputParameters?: fabric.ComputedValue<string>;
    /**
     * The frequency that you want AWS Config to run evaluations for a rule that
     * is triggered periodically. If specified, requires `message_type` to be `ScheduledNotification`.
     */
    readonly maximumExecutionFrequency?: fabric.ComputedValue<string>;
    /**
     * The name of the rule
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * Scope defines which resources can trigger an evaluation for the rule as documented below.
     */
    readonly scope?: fabric.ComputedValue<{ complianceResourceId?: fabric.ComputedValue<string>, complianceResourceTypes?: fabric.ComputedValue<fabric.ComputedValue<string>>[], tagKey?: fabric.ComputedValue<string>, tagValue?: fabric.ComputedValue<string> }>[];
    /**
     * Source specifies the rule owner, the rule identifier, and the notifications that cause
     * the function to evaluate your AWS resources as documented below.
     */
    readonly source: fabric.ComputedValue<{ owner: fabric.ComputedValue<string>, sourceDetail?: fabric.ComputedValue<{ eventSource?: fabric.ComputedValue<string>, maximumExecutionFrequency?: fabric.ComputedValue<string>, messageType?: fabric.ComputedValue<string> }>[], sourceIdentifier: fabric.ComputedValue<string> }>[];
}

