// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * `aws_security_group` provides details about a specific Security Group.
 * 
 * This resource can prove useful when a module accepts a Security Group id as
 * an input variable and needs to, for example, determine the id of the
 * VPC that the security group belongs to.
 * 
 * ## Example Usage
 * 
 * The following example shows how one might accept a Security Group id as a variable
 * and use this data source to obtain the data necessary to create a subnet.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const config = new pulumi.Config();
 * const securityGroupId = config.require("securityGroupId");
 * 
 * const selected = pulumi.output(aws.ec2.getSecurityGroup({
 *     id: securityGroupId,
 * }));
 * const subnet = new aws.ec2.Subnet("subnet", {
 *     cidrBlock: "10.0.1.0/24",
 *     vpcId: selected.vpcId,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/security_group.html.markdown.
 */
export function getSecurityGroup(args?: GetSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityGroupResult> & GetSecurityGroupResult {
    args = args || {};
    const promise: Promise<GetSecurityGroupResult> = pulumi.runtime.invoke("aws:ec2/getSecurityGroup:getSecurityGroup", {
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "tags": args.tags,
        "vpcId": args.vpcId,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getSecurityGroup.
 */
export interface GetSecurityGroupArgs {
    /**
     * Custom filter block as described below.
     */
    readonly filters?: { name: string, values: string[] }[];
    /**
     * The id of the specific security group to retrieve.
     */
    readonly id?: string;
    /**
     * The name of the field to filter by, as defined by
     * [the underlying AWS API](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html).
     */
    readonly name?: string;
    /**
     * A mapping of tags, each pair of which must exactly match
     * a pair on the desired security group.
     */
    readonly tags?: {[key: string]: any};
    /**
     * The id of the VPC that the desired security group belongs to.
     */
    readonly vpcId?: string;
}

/**
 * A collection of values returned by getSecurityGroup.
 */
export interface GetSecurityGroupResult {
    /**
     * The computed ARN of the security group.
     */
    readonly arn: string;
    /**
     * The description of the security group.
     */
    readonly description: string;
    readonly filters?: { name: string, values: string[] }[];
    readonly id: string;
    readonly name: string;
    readonly tags: {[key: string]: any};
    readonly vpcId: string;
}
