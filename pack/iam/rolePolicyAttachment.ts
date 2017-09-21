// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {ARN} from "../index";
import {Role} from "./role";

/**
 * Attaches a Managed IAM Policy to an IAM role
 * 
 * ```hcl
 * resource "aws_iam_role" "role" {
 *     name = "test-role"
 *     assume_role_policy = <<EOF
 *     {
 *       "Version": "2012-10-17",
 *       "Statement": [
 *         {
 *           "Action": "sts:AssumeRole",
 *           "Principal": {
 *             "Service": "ec2.amazonaws.com"
 *           },
 *           "Effect": "Allow",
 *           "Sid": ""
 *         }
 *       ]
 *     }
 * EOF
 * }
 * 
 * resource "aws_iam_policy" "policy" {
 *     name        = "test-policy"
 *     description = "A test policy"
 *     policy = <<EOF
 * {
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": [
 *         "ec2:Describe*"
 *       ],
 *       "Effect": "Allow",
 *       "Resource": "*"
 *     }
 *   ]
 * }
 * EOF
 * }
 * 
 * resource "aws_iam_role_policy_attachment" "test-attach" {
 *     role       = "${aws_iam_role.role.name}"
 *     policy_arn = "${aws_iam_policy.policy.arn}"
 * }
 * ```
 */
export class RolePolicyAttachment extends fabric.Resource {
    /**
     * The ARN of the policy you want to apply
     */
    public readonly policyArn: fabric.Computed<ARN>;
    /**
     * The role the policy should be applied to
     */
    public readonly role: fabric.Computed<Role>;

    /**
     * Create a RolePolicyAttachment resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this RolePolicyAttachment instance
     * @param args A collection of arguments for creating this RolePolicyAttachment intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: RolePolicyAttachmentArgs, dependsOn?: fabric.Resource[]) {
        if (args.policyArn === undefined) {
            throw new Error("Missing required property 'policyArn'");
        }
        if (args.role === undefined) {
            throw new Error("Missing required property 'role'");
        }
        super("aws:iam/rolePolicyAttachment:RolePolicyAttachment", urnName, {
            "policyArn": args.policyArn,
            "role": args.role,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a RolePolicyAttachment resource.
 */
export interface RolePolicyAttachmentArgs {
    /**
     * The ARN of the policy you want to apply
     */
    readonly policyArn: fabric.ComputedValue<ARN>;
    /**
     * The role the policy should be applied to
     */
    readonly role: fabric.ComputedValue<Role>;
}

