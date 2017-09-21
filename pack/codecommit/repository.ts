// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a CodeCommit Repository Resource.
 * 
 * ~> **NOTE on CodeCommit Availability**: The CodeCommit is not yet rolled out
 * in all regions - available regions are listed
 * [the AWS Docs](https://docs.aws.amazon.com/general/latest/gr/rande.html#codecommit_region).
 */
export class Repository extends fabric.Resource {
    /**
     * The ARN of the repository
     */
    public /*out*/ readonly arn: fabric.Computed<string>;
    /**
     * The URL to use for cloning the repository over HTTPS.
     */
    public /*out*/ readonly cloneUrlHttp: fabric.Computed<string>;
    /**
     * The URL to use for cloning the repository over SSH.
     */
    public /*out*/ readonly cloneUrlSsh: fabric.Computed<string>;
    /**
     * The default branch of the repository. The branch specified here needs to exist.
     */
    public readonly defaultBranch?: fabric.Computed<string>;
    /**
     * The description of the repository. This needs to be less than 1000 characters
     */
    public readonly description?: fabric.Computed<string>;
    /**
     * The ID of the repository
     */
    public /*out*/ readonly repositoryId: fabric.Computed<string>;
    /**
     * The name for the repository. This needs to be less than 100 characters.
     */
    public readonly repositoryName: fabric.Computed<string>;

    /**
     * Create a Repository resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Repository instance
     * @param args A collection of arguments for creating this Repository intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: RepositoryArgs, dependsOn?: fabric.Resource[]) {
        if (args.repositoryName === undefined) {
            throw new Error("Missing required property 'repositoryName'");
        }
        super("aws:codecommit/repository:Repository", urnName, {
            "defaultBranch": args.defaultBranch,
            "description": args.description,
            "repositoryName": args.repositoryName,
            "arn": undefined,
            "cloneUrlHttp": undefined,
            "cloneUrlSsh": undefined,
            "repositoryId": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Repository resource.
 */
export interface RepositoryArgs {
    /**
     * The default branch of the repository. The branch specified here needs to exist.
     */
    readonly defaultBranch?: fabric.ComputedValue<string>;
    /**
     * The description of the repository. This needs to be less than 1000 characters
     */
    readonly description?: fabric.ComputedValue<string>;
    /**
     * The name for the repository. This needs to be less than 100 characters.
     */
    readonly repositoryName: fabric.ComputedValue<string>;
}

