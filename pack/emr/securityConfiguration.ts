// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a resource to manage AWS EMR Security Configurations
 */
export class SecurityConfiguration extends fabric.Resource {
    /**
     * A JSON formatted Security Configuration
     */
    public readonly configuration: fabric.Computed<string>;
    /**
     * Date the Security Configuration was created
     */
    public /*out*/ readonly creationDate: fabric.Computed<string>;
    /**
     * The name of the EMR Security Configuration. By default generated by Terraform.
     */
    public readonly name: fabric.Computed<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    public readonly namePrefix?: fabric.Computed<string>;

    /**
     * Create a SecurityConfiguration resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this SecurityConfiguration instance
     * @param args A collection of arguments for creating this SecurityConfiguration intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: SecurityConfigurationArgs, dependsOn?: fabric.Resource[]) {
        if (args.configuration === undefined) {
            throw new Error("Missing required property 'configuration'");
        }
        super("aws:emr/securityConfiguration:SecurityConfiguration", urnName, {
            "configuration": args.configuration,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "creationDate": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a SecurityConfiguration resource.
 */
export interface SecurityConfigurationArgs {
    /**
     * A JSON formatted Security Configuration
     */
    readonly configuration: fabric.ComputedValue<string>;
    /**
     * The name of the EMR Security Configuration. By default generated by Terraform.
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: fabric.ComputedValue<string>;
}

