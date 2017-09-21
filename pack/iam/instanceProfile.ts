// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {Role} from "./role";

/**
 * Provides an IAM instance profile.
 * 
 * ~> **NOTE:** Either `role` or `roles` (**deprecated**) must be specified.
 */
export class InstanceProfile extends fabric.Resource {
    /**
     * The ARN assigned by AWS to the instance profile.
     */
    public /*out*/ readonly arn: fabric.Computed<string>;
    /**
     * The creation timestamp of the instance profile.
     */
    public /*out*/ readonly createDate: fabric.Computed<string>;
    /**
     * The profile's name. If omitted, Terraform will assign a random, unique name.
     */
    public readonly name: fabric.Computed<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    public readonly namePrefix?: fabric.Computed<string>;
    /**
     * Path in which to create the profile.
     */
    public readonly path?: fabric.Computed<string>;
    /**
     * The role name to include in the profile.
     */
    public readonly role: fabric.Computed<Role>;
    /**
     * 
     * A list of role names to include in the profile.  The current default is 1.  If you see an error message similar to `Cannot exceed quota for InstanceSessionsPerInstanceProfile: 1`, then you must contact AWS support and ask for a limit increase.
     * WARNING: This is deprecated since [version 0.9.3 (April 12, 2017)](https://github.com/hashicorp/terraform/blob/master/CHANGELOG.md#093-april-12-2017), as >= 2 roles are not possible. See [issue #11575](https://github.com/hashicorp/terraform/issues/11575).
     */
    public readonly roles: fabric.Computed<Role[]>;
    /**
     * The [unique ID][1] assigned by AWS.
     */
    public /*out*/ readonly uniqueId: fabric.Computed<string>;

    /**
     * Create a InstanceProfile resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this InstanceProfile instance
     * @param args A collection of arguments for creating this InstanceProfile intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args?: InstanceProfileArgs, dependsOn?: fabric.Resource[]) {
        super("aws:iam/instanceProfile:InstanceProfile", urnName, {
            "name": args.name,
            "namePrefix": args.namePrefix,
            "path": args.path,
            "role": args.role,
            "roles": args.roles,
            "arn": undefined,
            "createDate": undefined,
            "uniqueId": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a InstanceProfile resource.
 */
export interface InstanceProfileArgs {
    /**
     * The profile's name. If omitted, Terraform will assign a random, unique name.
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    readonly namePrefix?: fabric.ComputedValue<string>;
    /**
     * Path in which to create the profile.
     */
    readonly path?: fabric.ComputedValue<string>;
    /**
     * The role name to include in the profile.
     */
    readonly role?: fabric.ComputedValue<Role>;
    /**
     * 
     * A list of role names to include in the profile.  The current default is 1.  If you see an error message similar to `Cannot exceed quota for InstanceSessionsPerInstanceProfile: 1`, then you must contact AWS support and ask for a limit increase.
     * WARNING: This is deprecated since [version 0.9.3 (April 12, 2017)](https://github.com/hashicorp/terraform/blob/master/CHANGELOG.md#093-april-12-2017), as >= 2 roles are not possible. See [issue #11575](https://github.com/hashicorp/terraform/issues/11575).
     */
    readonly roles?: fabric.ComputedValue<fabric.ComputedValue<Role>>[];
}

