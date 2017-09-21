// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a CloudFormation Stack resource.
 */
export class Stack extends fabric.Resource {
    /**
     * A list of capabilities.
     * Valid values: `CAPABILITY_IAM` or `CAPABILITY_NAMED_IAM`
     */
    public readonly capabilities?: fabric.Computed<string[]>;
    /**
     * Set to true to disable rollback of the stack if stack creation failed.
     * Conflicts with `on_failure`.
     */
    public readonly disableRollback?: fabric.Computed<boolean>;
    /**
     * The ARN of an IAM role that AWS CloudFormation assumes to create the stack. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.
     */
    public readonly iamRoleArn?: fabric.Computed<string>;
    /**
     * Stack name.
     */
    public readonly name: fabric.Computed<string>;
    /**
     * A list of SNS topic ARNs to publish stack related events.
     */
    public readonly notificationArns?: fabric.Computed<string[]>;
    /**
     * Action to be taken if stack creation fails. This must be
     * one of: `DO_NOTHING`, `ROLLBACK`, or `DELETE`. Conflicts with `disable_rollback`.
     */
    public readonly onFailure?: fabric.Computed<string>;
    /**
     * A map of outputs from the stack.
     */
    public /*out*/ readonly outputs: fabric.Computed<{[key: string]: any}>;
    /**
     * A list of Parameter structures that specify input parameters for the stack.
     */
    public readonly parameters: fabric.Computed<{[key: string]: any}>;
    /**
     * Structure containing the stack policy body.
     * Conflicts w/ `policy_url`.
     */
    public readonly policyBody: fabric.Computed<string>;
    /**
     * Location of a file containing the stack policy.
     * Conflicts w/ `policy_body`.
     */
    public readonly policyUrl?: fabric.Computed<string>;
    /**
     * A list of tags to associate with this stack.
     */
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    /**
     * Structure containing the template body (max size: 51,200 bytes).
     */
    public readonly templateBody: fabric.Computed<string>;
    /**
     * Location of a file containing the template body (max size: 460,800 bytes).
     */
    public readonly templateUrl?: fabric.Computed<string>;
    /**
     * The amount of time that can pass before the stack status becomes `CREATE_FAILED`.
     */
    public readonly timeoutInMinutes?: fabric.Computed<number>;

    /**
     * Create a Stack resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Stack instance
     * @param args A collection of arguments for creating this Stack intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args?: StackArgs, dependsOn?: fabric.Resource[]) {
        super("aws:cloudformation/stack:Stack", urnName, {
            "capabilities": args.capabilities,
            "disableRollback": args.disableRollback,
            "iamRoleArn": args.iamRoleArn,
            "name": args.name,
            "notificationArns": args.notificationArns,
            "onFailure": args.onFailure,
            "parameters": args.parameters,
            "policyBody": args.policyBody,
            "policyUrl": args.policyUrl,
            "tags": args.tags,
            "templateBody": args.templateBody,
            "templateUrl": args.templateUrl,
            "timeoutInMinutes": args.timeoutInMinutes,
            "outputs": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Stack resource.
 */
export interface StackArgs {
    /**
     * A list of capabilities.
     * Valid values: `CAPABILITY_IAM` or `CAPABILITY_NAMED_IAM`
     */
    readonly capabilities?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * Set to true to disable rollback of the stack if stack creation failed.
     * Conflicts with `on_failure`.
     */
    readonly disableRollback?: fabric.ComputedValue<boolean>;
    /**
     * The ARN of an IAM role that AWS CloudFormation assumes to create the stack. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.
     */
    readonly iamRoleArn?: fabric.ComputedValue<string>;
    /**
     * Stack name.
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * A list of SNS topic ARNs to publish stack related events.
     */
    readonly notificationArns?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * Action to be taken if stack creation fails. This must be
     * one of: `DO_NOTHING`, `ROLLBACK`, or `DELETE`. Conflicts with `disable_rollback`.
     */
    readonly onFailure?: fabric.ComputedValue<string>;
    /**
     * A list of Parameter structures that specify input parameters for the stack.
     */
    readonly parameters?: fabric.ComputedValue<{[key: string]: any}>;
    /**
     * Structure containing the stack policy body.
     * Conflicts w/ `policy_url`.
     */
    readonly policyBody?: fabric.ComputedValue<string>;
    /**
     * Location of a file containing the stack policy.
     * Conflicts w/ `policy_body`.
     */
    readonly policyUrl?: fabric.ComputedValue<string>;
    /**
     * A list of tags to associate with this stack.
     */
    readonly tags?: fabric.ComputedValue<{[key: string]: any}>;
    /**
     * Structure containing the template body (max size: 51,200 bytes).
     */
    readonly templateBody?: fabric.ComputedValue<string>;
    /**
     * Location of a file containing the template body (max size: 460,800 bytes).
     */
    readonly templateUrl?: fabric.ComputedValue<string>;
    /**
     * The amount of time that can pass before the stack status becomes `CREATE_FAILED`.
     */
    readonly timeoutInMinutes?: fabric.ComputedValue<number>;
}

