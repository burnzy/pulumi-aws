// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * ## Example Usage
 * 
 * The following shows outputing all network ACL ids in a vpc.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const exampleNetworkAcls = pulumi.output(aws.ec2.getNetworkAcls({
 *     vpcId: var_vpc_id,
 * }));
 * 
 * export const example = exampleNetworkAcls.ids;
 * ```
 * 
 * The following example retrieves a list of all network ACL ids in a VPC with a custom
 * tag of `Tier` set to a value of "Private".
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = pulumi.output(aws.ec2.getNetworkAcls({
 *     tags: {
 *         Tier: "Private",
 *     },
 *     vpcId: var_vpc_id,
 * }));
 * ```
 * 
 * The following example retrieves a network ACL id in a VPC which associated
 * with specific subnet.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = aws_subnet_test.id.apply(id => aws.ec2.getNetworkAcls({
 *     filters: [{
 *         name: "association.subnet-id",
 *         values: [id],
 *     }],
 *     vpcId: var_vpc_id,
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/network_acls.html.markdown.
 */
export function getNetworkAcls(args?: GetNetworkAclsArgs, opts?: pulumi.InvokeOptions): GetNetworkAclsResult {
    args = args || {};
    const promise: Promise<GetNetworkAclsResult> = pulumi.runtime.invoke("aws:ec2/getNetworkAcls:getNetworkAcls", {
        "filters": args.filters,
        "tags": args.tags,
        "vpcId": args.vpcId,
    }, opts);

    return utils.promiseResult(promise);
}

/**
 * A collection of arguments for invoking getNetworkAcls.
 */
export interface GetNetworkAclsArgs {
    /**
     * Custom filter block as described below.
     */
    readonly filters?: { name: string, values: string[] }[];
    /**
     * A mapping of tags, each pair of which must exactly match
     * a pair on the desired network ACLs.
     */
    readonly tags?: {[key: string]: any};
    /**
     * The VPC ID that you want to filter from.
     */
    readonly vpcId?: string;
}

/**
 * A collection of values returned by getNetworkAcls.
 */
export interface GetNetworkAclsResult {
    readonly filters?: { name: string, values: string[] }[];
    /**
     * A list of all the network ACL ids found. This data source will fail if none are found.
     */
    readonly ids: string[];
    readonly tags: {[key: string]: any};
    readonly vpcId?: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
