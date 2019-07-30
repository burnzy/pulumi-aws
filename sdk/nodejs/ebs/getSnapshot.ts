// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to get information about an EBS Snapshot for use when provisioning EBS Volumes
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const ebsVolume = pulumi.output(aws.ebs.getSnapshot({
 *     filters: [
 *         {
 *             name: "volume-size",
 *             values: ["40"],
 *         },
 *         {
 *             name: "tag:Name",
 *             values: ["Example"],
 *         },
 *     ],
 *     mostRecent: true,
 *     owners: ["self"],
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ebs_snapshot.html.markdown.
 */
export function getSnapshot(args?: GetSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetSnapshotResult> & GetSnapshotResult {
    args = args || {};
    const promise: Promise<GetSnapshotResult> = pulumi.runtime.invoke("aws:ebs/getSnapshot:getSnapshot", {
        "filters": args.filters,
        "mostRecent": args.mostRecent,
        "owners": args.owners,
        "restorableByUserIds": args.restorableByUserIds,
        "snapshotIds": args.snapshotIds,
        "tags": args.tags,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getSnapshot.
 */
export interface GetSnapshotArgs {
    /**
     * One or more name/value pairs to filter off of. There are
     * several valid keys, for a full reference, check out
     * [describe-snapshots in the AWS CLI reference][1].
     */
    readonly filters?: { name: string, values: string[] }[];
    /**
     * If more than one result is returned, use the most recent snapshot.
     */
    readonly mostRecent?: boolean;
    /**
     * Returns the snapshots owned by the specified owner id. Multiple owners can be specified.
     */
    readonly owners?: string[];
    /**
     * One or more AWS accounts IDs that can create volumes from the snapshot.
     */
    readonly restorableByUserIds?: string[];
    /**
     * Returns information on a specific snapshot_id.
     */
    readonly snapshotIds?: string[];
    readonly tags?: {[key: string]: any};
}

/**
 * A collection of values returned by getSnapshot.
 */
export interface GetSnapshotResult {
    /**
     * The data encryption key identifier for the snapshot.
     */
    readonly dataEncryptionKeyId: string;
    /**
     * A description for the snapshot
     */
    readonly description: string;
    /**
     * Whether the snapshot is encrypted.
     */
    readonly encrypted: boolean;
    readonly filters?: { name: string, values: string[] }[];
    /**
     * The ARN for the KMS encryption key.
     */
    readonly kmsKeyId: string;
    readonly mostRecent?: boolean;
    /**
     * Value from an Amazon-maintained list (`amazon`, `aws-marketplace`, `microsoft`) of snapshot owners.
     */
    readonly ownerAlias: string;
    /**
     * The AWS account ID of the EBS snapshot owner.
     */
    readonly ownerId: string;
    readonly owners?: string[];
    readonly restorableByUserIds?: string[];
    /**
     * The snapshot ID (e.g. snap-59fcb34e).
     */
    readonly snapshotId: string;
    readonly snapshotIds?: string[];
    /**
     * The snapshot state.
     */
    readonly state: string;
    /**
     * A mapping of tags for the resource.
     */
    readonly tags: {[key: string]: any};
    /**
     * The volume ID (e.g. vol-59fcb34e).
     */
    readonly volumeId: string;
    /**
     * The size of the drive in GiBs.
     */
    readonly volumeSize: number;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
