// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides an SES domain identity resource
 */
export class DomainIdentity extends fabric.Resource {
    /**
     * The ARN of the domain identity.
     */
    public /*out*/ readonly arn: fabric.Computed<string>;
    /**
     * The domain name to assign to SES
     */
    public readonly domain: fabric.Computed<string>;
    /**
     * A code which when added to the domain as a TXT record
     * will signal to SES that the owner of the domain has authorised SES to act on
     * their behalf. The domain identity will be in state "verification pending"
     * until this is done. See below for an example of how this might be achieved
     * when the domain is hosted in Route 53 and managed by Terraform.  Find out
     * more about verifying domains in Amazon SES in the [AWS SES
     * docs](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html).
     */
    public /*out*/ readonly verificationToken: fabric.Computed<string>;

    /**
     * Create a DomainIdentity resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this DomainIdentity instance
     * @param args A collection of arguments for creating this DomainIdentity intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: DomainIdentityArgs, dependsOn?: fabric.Resource[]) {
        if (args.domain === undefined) {
            throw new Error("Missing required property 'domain'");
        }
        super("aws:ses/domainIdentity:DomainIdentity", urnName, {
            "domain": args.domain,
            "arn": undefined,
            "verificationToken": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a DomainIdentity resource.
 */
export interface DomainIdentityArgs {
    /**
     * The domain name to assign to SES
     */
    readonly domain: fabric.ComputedValue<string>;
}

