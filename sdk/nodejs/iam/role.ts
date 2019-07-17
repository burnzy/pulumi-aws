// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

import {PolicyDocument} from "./documents";

/**
 * Provides an IAM role.
 * 
 * > *NOTE:* If policies are attached to the role via the [`aws_iam_policy_attachment` resource](https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html) and you are modifying the role `name` or `path`, the `force_detach_policies` argument must be set to `true` and applied before attempting the operation otherwise you will encounter a `DeleteConflict` error. The [`aws_iam_role_policy_attachment` resource (recommended)](https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html) does not have this requirement.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const testRole = new aws.iam.Role("test_role", {
 *     assumeRolePolicy: `{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": "sts:AssumeRole",
 *       "Principal": {
 *         "Service": "ec2.amazonaws.com"
 *       },
 *       "Effect": "Allow",
 *       "Sid": ""
 *     }
 *   ]
 * }
 * `,
 *     tags: {
 *         "tag-key": "tag-value",
 *     },
 * });
 * ```
 * 
 * ## Example of Using Data Source for Assume Role Policy
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const instance_assume_role_policy = pulumi.output(aws.iam.getPolicyDocument({
 *     statements: [{
 *         actions: ["sts:AssumeRole"],
 *         principals: [{
 *             identifiers: ["ec2.amazonaws.com"],
 *             type: "Service",
 *         }],
 *     }],
 * }));
 * const instance = new aws.iam.Role("instance", {
 *     assumeRolePolicy: instance_assume_role_policy.json,
 *     path: "/system/",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/iam_role.html.markdown.
 */
export class Role extends pulumi.CustomResource {
    /**
     * Get an existing Role resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoleState, opts?: pulumi.CustomResourceOptions): Role {
        return new Role(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:iam/role:Role';

    /**
     * Returns true if the given object is an instance of Role.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Role {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Role.__pulumiType;
    }

    /**
     * The Amazon Resource Name (ARN) specifying the role.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The policy that grants an entity permission to assume the role.
     */
    public readonly assumeRolePolicy!: pulumi.Output<string>;
    /**
     * The creation date of the IAM role.
     */
    public /*out*/ readonly createDate!: pulumi.Output<string>;
    /**
     * The description of the role.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Specifies to force detaching any policies the role has before destroying it. Defaults to `false`.
     */
    public readonly forceDetachPolicies!: pulumi.Output<boolean | undefined>;
    /**
     * The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.
     */
    public readonly maxSessionDuration!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    public readonly namePrefix!: pulumi.Output<string | undefined>;
    /**
     * The path to the role.
     * See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
     */
    public readonly path!: pulumi.Output<string | undefined>;
    /**
     * The ARN of the policy that is used to set the permissions boundary for the role.
     */
    public readonly permissionsBoundary!: pulumi.Output<string | undefined>;
    /**
     * Key-value mapping of tags for the IAM role
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The stable and unique string identifying the role.
     */
    public /*out*/ readonly uniqueId!: pulumi.Output<string>;

    /**
     * Create a Role resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RoleArgs | RoleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as RoleState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["assumeRolePolicy"] = state ? state.assumeRolePolicy : undefined;
            inputs["createDate"] = state ? state.createDate : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["forceDetachPolicies"] = state ? state.forceDetachPolicies : undefined;
            inputs["maxSessionDuration"] = state ? state.maxSessionDuration : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
            inputs["path"] = state ? state.path : undefined;
            inputs["permissionsBoundary"] = state ? state.permissionsBoundary : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["uniqueId"] = state ? state.uniqueId : undefined;
        } else {
            const args = argsOrState as RoleArgs | undefined;
            if (!args || args.assumeRolePolicy === undefined) {
                throw new Error("Missing required property 'assumeRolePolicy'");
            }
            inputs["assumeRolePolicy"] = args ? args.assumeRolePolicy : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["forceDetachPolicies"] = args ? args.forceDetachPolicies : undefined;
            inputs["maxSessionDuration"] = args ? args.maxSessionDuration : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["path"] = args ? args.path : undefined;
            inputs["permissionsBoundary"] = args ? args.permissionsBoundary : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["createDate"] = undefined /*out*/;
            inputs["uniqueId"] = undefined /*out*/;
        }
        super(Role.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Role resources.
 */
export interface RoleState {
    /**
     * The Amazon Resource Name (ARN) specifying the role.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The policy that grants an entity permission to assume the role.
     */
    readonly assumeRolePolicy?: pulumi.Input<string | PolicyDocument>;
    /**
     * The creation date of the IAM role.
     */
    readonly createDate?: pulumi.Input<string>;
    /**
     * The description of the role.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Specifies to force detaching any policies the role has before destroying it. Defaults to `false`.
     */
    readonly forceDetachPolicies?: pulumi.Input<boolean>;
    /**
     * The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.
     */
    readonly maxSessionDuration?: pulumi.Input<number>;
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The path to the role.
     * See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
     */
    readonly path?: pulumi.Input<string>;
    /**
     * The ARN of the policy that is used to set the permissions boundary for the role.
     */
    readonly permissionsBoundary?: pulumi.Input<string>;
    /**
     * Key-value mapping of tags for the IAM role
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The stable and unique string identifying the role.
     */
    readonly uniqueId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Role resource.
 */
export interface RoleArgs {
    /**
     * The policy that grants an entity permission to assume the role.
     */
    readonly assumeRolePolicy: pulumi.Input<string | PolicyDocument>;
    /**
     * The description of the role.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Specifies to force detaching any policies the role has before destroying it. Defaults to `false`.
     */
    readonly forceDetachPolicies?: pulumi.Input<boolean>;
    /**
     * The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.
     */
    readonly maxSessionDuration?: pulumi.Input<number>;
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The path to the role.
     * See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
     */
    readonly path?: pulumi.Input<string>;
    /**
     * The ARN of the policy that is used to set the permissions boundary for the role.
     */
    readonly permissionsBoundary?: pulumi.Input<string>;
    /**
     * Key-value mapping of tags for the IAM role
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
