// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a resource to manage the default AWS Network ACL. VPC Only.
 * 
 * Each VPC created in AWS comes with a Default Network ACL that can be managed, but not
 * destroyed. **This is an advanced resource**, and has special caveats to be aware
 * of when using it. Please read this document in its entirety before using this
 * resource.
 * 
 * The `aws_default_network_acl` behaves differently from normal resources, in that
 * Terraform does not _create_ this resource, but instead attempts to "adopt" it
 * into management. We can do this because each VPC created has a Default Network
 * ACL that cannot be destroyed, and is created with a known set of default rules.
 * 
 * When Terraform first adopts the Default Network ACL, it **immediately removes all
 * rules in the ACL**. It then proceeds to create any rules specified in the
 * configuration. This step is required so that only the rules specified in the
 * configuration are created.
 * 
 * This resource treats its inline rules as absolute; only the rules defined
 * inline are created, and any additions/removals external to this resource will
 * result in diffs being shown. For these reasons, this resource is incompatible with the
 * `aws_network_acl_rule` resource.
 * 
 * For more information about Network ACLs, see the AWS Documentation on
 * [Network ACLs][aws-network-acls].
 */
export class DefaultNetworkAcl extends fabric.Resource {
    /**
     * The Network ACL ID to manage. This
     * attribute is exported from `aws_vpc`, or manually found via the AWS Console.
     */
    public readonly defaultNetworkAclId: fabric.Computed<string>;
    /**
     * Specifies an egress rule. Parameters defined below.
     */
    public readonly egress?: fabric.Computed<{ action: string, cidrBlock?: string, fromPort: number, icmpCode?: number, icmpType?: number, ipv6CidrBlock?: string, protocol: string, ruleNo: number, toPort: number }[]>;
    /**
     * Specifies an ingress rule. Parameters defined below.
     */
    public readonly ingress?: fabric.Computed<{ action: string, cidrBlock?: string, fromPort: number, icmpCode?: number, icmpType?: number, ipv6CidrBlock?: string, protocol: string, ruleNo: number, toPort: number }[]>;
    /**
     * A list of Subnet IDs to apply the ACL to. See the
     * notes below on managing Subnets in the Default Network ACL
     */
    public readonly subnetIds?: fabric.Computed<string[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    /**
     * The ID of the associated VPC
     */
    public /*out*/ readonly vpcId: fabric.Computed<string>;

    /**
     * Create a DefaultNetworkAcl resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this DefaultNetworkAcl instance
     * @param args A collection of arguments for creating this DefaultNetworkAcl intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: DefaultNetworkAclArgs, dependsOn?: fabric.Resource[]) {
        if (args.defaultNetworkAclId === undefined) {
            throw new Error("Missing required property 'defaultNetworkAclId'");
        }
        super("aws:ec2/defaultNetworkAcl:DefaultNetworkAcl", urnName, {
            "defaultNetworkAclId": args.defaultNetworkAclId,
            "egress": args.egress,
            "ingress": args.ingress,
            "subnetIds": args.subnetIds,
            "tags": args.tags,
            "vpcId": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a DefaultNetworkAcl resource.
 */
export interface DefaultNetworkAclArgs {
    /**
     * The Network ACL ID to manage. This
     * attribute is exported from `aws_vpc`, or manually found via the AWS Console.
     */
    readonly defaultNetworkAclId: fabric.ComputedValue<string>;
    /**
     * Specifies an egress rule. Parameters defined below.
     */
    readonly egress?: fabric.ComputedValue<{ action: fabric.ComputedValue<string>, cidrBlock?: fabric.ComputedValue<string>, fromPort: fabric.ComputedValue<number>, icmpCode?: fabric.ComputedValue<number>, icmpType?: fabric.ComputedValue<number>, ipv6CidrBlock?: fabric.ComputedValue<string>, protocol: fabric.ComputedValue<string>, ruleNo: fabric.ComputedValue<number>, toPort: fabric.ComputedValue<number> }>[];
    /**
     * Specifies an ingress rule. Parameters defined below.
     */
    readonly ingress?: fabric.ComputedValue<{ action: fabric.ComputedValue<string>, cidrBlock?: fabric.ComputedValue<string>, fromPort: fabric.ComputedValue<number>, icmpCode?: fabric.ComputedValue<number>, icmpType?: fabric.ComputedValue<number>, ipv6CidrBlock?: fabric.ComputedValue<string>, protocol: fabric.ComputedValue<string>, ruleNo: fabric.ComputedValue<number>, toPort: fabric.ComputedValue<number> }>[];
    /**
     * A list of Subnet IDs to apply the ACL to. See the
     * notes below on managing Subnets in the Default Network ACL
     */
    readonly subnetIds?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: fabric.ComputedValue<{[key: string]: any}>;
}

