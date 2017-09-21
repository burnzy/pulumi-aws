// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a VPC DHCP Options resource.
 * * `domain_name_servers`, `netbios_name_servers`, `ntp_servers` are limited by AWS to maximum four servers only.
 * * To actually use the DHCP Options Set you need to associate it to a VPC using [`aws_vpc_dhcp_options_association`](/docs/providers/aws/r/vpc_dhcp_options_association.html).
 * * If you delete a DHCP Options Set, all VPCs using it will be associated to AWS's `default` DHCP Option Set.
 */
export class VpcDhcpOptions extends fabric.Resource {
    /**
     * the suffix domain name to use by default when resolving non Fully Qualified Domain Names. In other words, this is what ends up being the `search` value in the `/etc/resolv.conf` file.
     */
    public readonly domainName?: fabric.Computed<string>;
    /**
     * List of name servers to configure in `/etc/resolv.conf`.
     */
    public readonly domainNameServers?: fabric.Computed<string[]>;
    /**
     * List of NETBIOS name servers.
     */
    public readonly netbiosNameServers?: fabric.Computed<string[]>;
    /**
     * The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
     */
    public readonly netbiosNodeType?: fabric.Computed<string>;
    /**
     * List of NTP servers to configure.
     */
    public readonly ntpServers?: fabric.Computed<string[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: fabric.Computed<{[key: string]: any}>;

    /**
     * Create a VpcDhcpOptions resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this VpcDhcpOptions instance
     * @param args A collection of arguments for creating this VpcDhcpOptions intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args?: VpcDhcpOptionsArgs, dependsOn?: fabric.Resource[]) {
        super("aws:ec2/vpcDhcpOptions:VpcDhcpOptions", urnName, {
            "domainName": args.domainName,
            "domainNameServers": args.domainNameServers,
            "netbiosNameServers": args.netbiosNameServers,
            "netbiosNodeType": args.netbiosNodeType,
            "ntpServers": args.ntpServers,
            "tags": args.tags,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a VpcDhcpOptions resource.
 */
export interface VpcDhcpOptionsArgs {
    /**
     * the suffix domain name to use by default when resolving non Fully Qualified Domain Names. In other words, this is what ends up being the `search` value in the `/etc/resolv.conf` file.
     */
    readonly domainName?: fabric.ComputedValue<string>;
    /**
     * List of name servers to configure in `/etc/resolv.conf`.
     */
    readonly domainNameServers?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * List of NETBIOS name servers.
     */
    readonly netbiosNameServers?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
     */
    readonly netbiosNodeType?: fabric.ComputedValue<string>;
    /**
     * List of NTP servers to configure.
     */
    readonly ntpServers?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: fabric.ComputedValue<{[key: string]: any}>;
}

