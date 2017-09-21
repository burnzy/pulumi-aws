// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides an IAM group.
 */
export class Group extends fabric.Resource {
    /**
     * The ARN assigned by AWS for this group.
     */
    public /*out*/ readonly arn: fabric.Computed<string>;
    /**
     * The group's name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. Group names are not distinguished by case. For example, you cannot create groups named both "ADMINS" and "admins".
     */
    public readonly name: fabric.Computed<string>;
    /**
     * Path in which to create the group.
     */
    public readonly path?: fabric.Computed<string>;
    /**
     * The [unique ID][1] assigned by AWS.
     */
    public /*out*/ readonly uniqueId: fabric.Computed<string>;

    /**
     * Create a Group resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Group instance
     * @param args A collection of arguments for creating this Group intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args?: GroupArgs, dependsOn?: fabric.Resource[]) {
        super("aws:iam/group:Group", urnName, {
            "name": args.name,
            "path": args.path,
            "arn": undefined,
            "uniqueId": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * The group's name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. Group names are not distinguished by case. For example, you cannot create groups named both "ADMINS" and "admins".
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * Path in which to create the group.
     */
    readonly path?: fabric.ComputedValue<string>;
}

