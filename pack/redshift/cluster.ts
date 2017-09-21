// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a Redshift Cluster Resource.
 * 
 * ~> **Note:** All arguments including the username and password will be stored in the raw state as plain-text.
 * [Read more about sensitive data in state](/docs/state/sensitive-data.html).
 */
export class Cluster extends fabric.Resource {
    /**
     * If true , major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default is true
     */
    public readonly allowVersionUpgrade?: fabric.Computed<boolean>;
    /**
     * The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with create-cluster-snapshot. Default is 1.
     */
    public readonly automatedSnapshotRetentionPeriod?: fabric.Computed<number>;
    /**
     * The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency.
     */
    public readonly availabilityZone: fabric.Computed<string>;
    /**
     * The name of an existing S3 bucket where the log files are to be stored. Must be in the same region as the cluster and the cluster must have read bucket and put object permissions.
     * For more information on the permissions required for the bucket, please read the AWS [documentation](http://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html#db-auditing-enable-logging)
     */
    public readonly bucketName: fabric.Computed<string>;
    /**
     * The Cluster Identifier. Must be a lower case
     * string.
     */
    public readonly clusterIdentifier: fabric.Computed<string>;
    /**
     * The name of the parameter group to be associated with this cluster.
     */
    public readonly clusterParameterGroupName: fabric.Computed<string>;
    /**
     * The public key for the cluster
     */
    public readonly clusterPublicKey: fabric.Computed<string>;
    /**
     * The specific revision number of the database in the cluster
     */
    public readonly clusterRevisionNumber: fabric.Computed<string>;
    /**
     * A list of security groups to be associated with this cluster.
     */
    public readonly clusterSecurityGroups: fabric.Computed<string[]>;
    /**
     * The name of a cluster subnet group to be associated with this cluster. If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
     */
    public readonly clusterSubnetGroupName: fabric.Computed<string>;
    /**
     * The cluster type to use. Either `single-node` or `multi-node`.
     */
    public readonly clusterType: fabric.Computed<string>;
    /**
     * The version of the Amazon Redshift engine software that you want to deploy on the cluster.
     * The version selected runs on all the nodes in the cluster.
     */
    public readonly clusterVersion?: fabric.Computed<string>;
    /**
     * The name of the first database to be created when the cluster is created.
     * If you do not provide a name, Amazon Redshift will create a default database called `dev`.
     */
    public readonly databaseName: fabric.Computed<string>;
    /**
     * The Elastic IP (EIP) address for the cluster.
     */
    public readonly elasticIp?: fabric.Computed<string>;
    /**
     * Enables logging information such as queries and connection attempts, for the specified Amazon Redshift cluster. Defaults to `false`.
     */
    public readonly enableLogging?: fabric.Computed<boolean>;
    /**
     * If true , the data in the cluster is encrypted at rest.
     */
    public readonly encrypted: fabric.Computed<boolean>;
    /**
     * The connection endpoint
     */
    public readonly endpoint: fabric.Computed<string>;
    /**
     * If true , enhanced VPC routing is enabled.
     */
    public readonly enhancedVpcRouting: fabric.Computed<boolean>;
    /**
     * The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, `skip_final_snapshot` must be false.
     */
    public readonly finalSnapshotIdentifier?: fabric.Computed<string>;
    /**
     * A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time.
     */
    public readonly iamRoles: fabric.Computed<string[]>;
    /**
     * The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true.
     */
    public readonly kmsKeyId: fabric.Computed<string>;
    /**
     * Password for the master DB user.
     * Note that this may show up in logs, and it will be stored in the state file. Password must contain at least 8 chars and
     * contain at least one uppercase letter, one lowercase letter, and one number.
     */
    public readonly masterPassword?: fabric.Computed<string>;
    /**
     * Username for the master DB user.
     */
    public readonly masterUsername?: fabric.Computed<string>;
    /**
     * The node type to be provisioned for the cluster.
     */
    public readonly nodeType: fabric.Computed<string>;
    /**
     * The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node. Default is 1.
     */
    public readonly numberOfNodes?: fabric.Computed<number>;
    /**
     * The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
     */
    public readonly ownerAccount?: fabric.Computed<string>;
    /**
     * The port number on which the cluster accepts incoming connections.
     * The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections. Default port is 5439.
     */
    public readonly port?: fabric.Computed<number>;
    /**
     * The weekly time range (in UTC) during which automated cluster maintenance can occur.
     * Format: ddd:hh24:mi-ddd:hh24:mi
     */
    public readonly preferredMaintenanceWindow: fabric.Computed<string>;
    /**
     * If true, the cluster can be accessed from a public network. Default is `true`.
     */
    public readonly publiclyAccessible?: fabric.Computed<boolean>;
    /**
     * The prefix applied to the log file names.
     */
    public readonly s3KeyPrefix: fabric.Computed<string>;
    /**
     * Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If true , a final cluster snapshot is not created. If false , a final cluster snapshot is created before the cluster is deleted. Default is false.
     */
    public readonly skipFinalSnapshot?: fabric.Computed<boolean>;
    /**
     * The name of the cluster the source snapshot was created from.
     */
    public readonly snapshotClusterIdentifier?: fabric.Computed<string>;
    /**
     * The name of the snapshot from which to create the new cluster.
     */
    public readonly snapshotIdentifier?: fabric.Computed<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    /**
     * A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
     */
    public readonly vpcSecurityGroupIds: fabric.Computed<string[]>;

    /**
     * Create a Cluster resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Cluster instance
     * @param args A collection of arguments for creating this Cluster intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: ClusterArgs, dependsOn?: fabric.Resource[]) {
        if (args.clusterIdentifier === undefined) {
            throw new Error("Missing required property 'clusterIdentifier'");
        }
        if (args.nodeType === undefined) {
            throw new Error("Missing required property 'nodeType'");
        }
        super("aws:redshift/cluster:Cluster", urnName, {
            "allowVersionUpgrade": args.allowVersionUpgrade,
            "automatedSnapshotRetentionPeriod": args.automatedSnapshotRetentionPeriod,
            "availabilityZone": args.availabilityZone,
            "bucketName": args.bucketName,
            "clusterIdentifier": args.clusterIdentifier,
            "clusterParameterGroupName": args.clusterParameterGroupName,
            "clusterPublicKey": args.clusterPublicKey,
            "clusterRevisionNumber": args.clusterRevisionNumber,
            "clusterSecurityGroups": args.clusterSecurityGroups,
            "clusterSubnetGroupName": args.clusterSubnetGroupName,
            "clusterType": args.clusterType,
            "clusterVersion": args.clusterVersion,
            "databaseName": args.databaseName,
            "elasticIp": args.elasticIp,
            "enableLogging": args.enableLogging,
            "encrypted": args.encrypted,
            "endpoint": args.endpoint,
            "enhancedVpcRouting": args.enhancedVpcRouting,
            "finalSnapshotIdentifier": args.finalSnapshotIdentifier,
            "iamRoles": args.iamRoles,
            "kmsKeyId": args.kmsKeyId,
            "masterPassword": args.masterPassword,
            "masterUsername": args.masterUsername,
            "nodeType": args.nodeType,
            "numberOfNodes": args.numberOfNodes,
            "ownerAccount": args.ownerAccount,
            "port": args.port,
            "preferredMaintenanceWindow": args.preferredMaintenanceWindow,
            "publiclyAccessible": args.publiclyAccessible,
            "s3KeyPrefix": args.s3KeyPrefix,
            "skipFinalSnapshot": args.skipFinalSnapshot,
            "snapshotClusterIdentifier": args.snapshotClusterIdentifier,
            "snapshotIdentifier": args.snapshotIdentifier,
            "tags": args.tags,
            "vpcSecurityGroupIds": args.vpcSecurityGroupIds,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * If true , major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default is true
     */
    readonly allowVersionUpgrade?: fabric.ComputedValue<boolean>;
    /**
     * The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with create-cluster-snapshot. Default is 1.
     */
    readonly automatedSnapshotRetentionPeriod?: fabric.ComputedValue<number>;
    /**
     * The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency.
     */
    readonly availabilityZone?: fabric.ComputedValue<string>;
    /**
     * The name of an existing S3 bucket where the log files are to be stored. Must be in the same region as the cluster and the cluster must have read bucket and put object permissions.
     * For more information on the permissions required for the bucket, please read the AWS [documentation](http://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html#db-auditing-enable-logging)
     */
    readonly bucketName?: fabric.ComputedValue<string>;
    /**
     * The Cluster Identifier. Must be a lower case
     * string.
     */
    readonly clusterIdentifier: fabric.ComputedValue<string>;
    /**
     * The name of the parameter group to be associated with this cluster.
     */
    readonly clusterParameterGroupName?: fabric.ComputedValue<string>;
    readonly clusterPublicKey?: fabric.ComputedValue<string>;
    readonly clusterRevisionNumber?: fabric.ComputedValue<string>;
    /**
     * A list of security groups to be associated with this cluster.
     */
    readonly clusterSecurityGroups?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * The name of a cluster subnet group to be associated with this cluster. If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
     */
    readonly clusterSubnetGroupName?: fabric.ComputedValue<string>;
    /**
     * The cluster type to use. Either `single-node` or `multi-node`.
     */
    readonly clusterType?: fabric.ComputedValue<string>;
    /**
     * The version of the Amazon Redshift engine software that you want to deploy on the cluster.
     * The version selected runs on all the nodes in the cluster.
     */
    readonly clusterVersion?: fabric.ComputedValue<string>;
    /**
     * The name of the first database to be created when the cluster is created.
     * If you do not provide a name, Amazon Redshift will create a default database called `dev`.
     */
    readonly databaseName?: fabric.ComputedValue<string>;
    /**
     * The Elastic IP (EIP) address for the cluster.
     */
    readonly elasticIp?: fabric.ComputedValue<string>;
    /**
     * Enables logging information such as queries and connection attempts, for the specified Amazon Redshift cluster. Defaults to `false`.
     */
    readonly enableLogging?: fabric.ComputedValue<boolean>;
    /**
     * If true , the data in the cluster is encrypted at rest.
     */
    readonly encrypted?: fabric.ComputedValue<boolean>;
    readonly endpoint?: fabric.ComputedValue<string>;
    /**
     * If true , enhanced VPC routing is enabled.
     */
    readonly enhancedVpcRouting?: fabric.ComputedValue<boolean>;
    /**
     * The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, `skip_final_snapshot` must be false.
     */
    readonly finalSnapshotIdentifier?: fabric.ComputedValue<string>;
    /**
     * A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time.
     */
    readonly iamRoles?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true.
     */
    readonly kmsKeyId?: fabric.ComputedValue<string>;
    /**
     * Password for the master DB user.
     * Note that this may show up in logs, and it will be stored in the state file. Password must contain at least 8 chars and
     * contain at least one uppercase letter, one lowercase letter, and one number.
     */
    readonly masterPassword?: fabric.ComputedValue<string>;
    /**
     * Username for the master DB user.
     */
    readonly masterUsername?: fabric.ComputedValue<string>;
    /**
     * The node type to be provisioned for the cluster.
     */
    readonly nodeType: fabric.ComputedValue<string>;
    /**
     * The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node. Default is 1.
     */
    readonly numberOfNodes?: fabric.ComputedValue<number>;
    /**
     * The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
     */
    readonly ownerAccount?: fabric.ComputedValue<string>;
    /**
     * The port number on which the cluster accepts incoming connections.
     * The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections. Default port is 5439.
     */
    readonly port?: fabric.ComputedValue<number>;
    /**
     * The weekly time range (in UTC) during which automated cluster maintenance can occur.
     * Format: ddd:hh24:mi-ddd:hh24:mi
     */
    readonly preferredMaintenanceWindow?: fabric.ComputedValue<string>;
    /**
     * If true, the cluster can be accessed from a public network. Default is `true`.
     */
    readonly publiclyAccessible?: fabric.ComputedValue<boolean>;
    /**
     * The prefix applied to the log file names.
     */
    readonly s3KeyPrefix?: fabric.ComputedValue<string>;
    /**
     * Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If true , a final cluster snapshot is not created. If false , a final cluster snapshot is created before the cluster is deleted. Default is false.
     */
    readonly skipFinalSnapshot?: fabric.ComputedValue<boolean>;
    /**
     * The name of the cluster the source snapshot was created from.
     */
    readonly snapshotClusterIdentifier?: fabric.ComputedValue<string>;
    /**
     * The name of the snapshot from which to create the new cluster.
     */
    readonly snapshotIdentifier?: fabric.ComputedValue<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: fabric.ComputedValue<{[key: string]: any}>;
    /**
     * A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
     */
    readonly vpcSecurityGroupIds?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
}

