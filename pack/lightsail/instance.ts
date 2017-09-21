// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a Lightsail Instance. Amazon Lightsail is a service to provide easy virtual private servers
 * with custom software already setup. See [What is Amazon Lightsail?](https://lightsail.aws.amazon.com/ls/docs/getting-started/article/what-is-amazon-lightsail)
 * for more information.
 * 
 * ~> **Note:** Lightsail is currently only supported in a limited number of AWS Regions, please see ["Regions and Availability Zones in Amazon Lightsail"](https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail) for more details
 */
export class Instance extends fabric.Resource {
    /**
     * The ARN of the Lightsail instance (matches `id`).
     * * `availability_zone`
     * * `blueprint_id`
     * * `bundle_id`
     * * `key_pair_name`
     * * `user_data`
     */
    public /*out*/ readonly arn: fabric.Computed<string>;
    /**
     * The Availability Zone in which to create your
     * instance. At this time, must be in `us-east-1`, `us-east-2`, `us-west-2`, `eu-west-1`, `eu-west-2`, `eu-central-1` regions
     */
    public readonly availabilityZone: fabric.Computed<string>;
    /**
     * The ID for a virtual private server image
     * (see list below)
     */
    public readonly blueprintId: fabric.Computed<string>;
    /**
     * The bundle of specification information (see list below)
     */
    public readonly bundleId: fabric.Computed<string>;
    public /*out*/ readonly cpuCount: fabric.Computed<number>;
    public /*out*/ readonly createdAt: fabric.Computed<string>;
    public /*out*/ readonly ipv6Address: fabric.Computed<string>;
    public /*out*/ readonly isStaticIp: fabric.Computed<boolean>;
    /**
     * The name of your key pair. Created in the
     * Lightsail console (cannot use `aws_key_pair` at this time)
     */
    public readonly keyPairName?: fabric.Computed<string>;
    /**
     * The name of the Lightsail Instance
     */
    public readonly name: fabric.Computed<string>;
    public /*out*/ readonly privateIpAddress: fabric.Computed<string>;
    public /*out*/ readonly publicIpAddress: fabric.Computed<string>;
    public /*out*/ readonly ramSize: fabric.Computed<number>;
    /**
     * launch script to configure server with additional user data
     */
    public readonly userData?: fabric.Computed<string>;
    public /*out*/ readonly username: fabric.Computed<string>;

    /**
     * Create a Instance resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Instance instance
     * @param args A collection of arguments for creating this Instance intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: InstanceArgs, dependsOn?: fabric.Resource[]) {
        if (args.availabilityZone === undefined) {
            throw new Error("Missing required property 'availabilityZone'");
        }
        if (args.blueprintId === undefined) {
            throw new Error("Missing required property 'blueprintId'");
        }
        if (args.bundleId === undefined) {
            throw new Error("Missing required property 'bundleId'");
        }
        super("aws:lightsail/instance:Instance", urnName, {
            "availabilityZone": args.availabilityZone,
            "blueprintId": args.blueprintId,
            "bundleId": args.bundleId,
            "keyPairName": args.keyPairName,
            "name": args.name,
            "userData": args.userData,
            "arn": undefined,
            "cpuCount": undefined,
            "createdAt": undefined,
            "ipv6Address": undefined,
            "isStaticIp": undefined,
            "privateIpAddress": undefined,
            "publicIpAddress": undefined,
            "ramSize": undefined,
            "username": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Instance resource.
 */
export interface InstanceArgs {
    /**
     * The Availability Zone in which to create your
     * instance. At this time, must be in `us-east-1`, `us-east-2`, `us-west-2`, `eu-west-1`, `eu-west-2`, `eu-central-1` regions
     */
    readonly availabilityZone: fabric.ComputedValue<string>;
    /**
     * The ID for a virtual private server image
     * (see list below)
     */
    readonly blueprintId: fabric.ComputedValue<string>;
    /**
     * The bundle of specification information (see list below)
     */
    readonly bundleId: fabric.ComputedValue<string>;
    /**
     * The name of your key pair. Created in the
     * Lightsail console (cannot use `aws_key_pair` at this time)
     */
    readonly keyPairName?: fabric.ComputedValue<string>;
    /**
     * The name of the Lightsail Instance
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * launch script to configure server with additional user data
     */
    readonly userData?: fabric.ComputedValue<string>;
}

