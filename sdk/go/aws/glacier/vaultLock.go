// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package glacier

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/glacier_vault_lock.html.markdown.
type VaultLock struct {
	s *pulumi.ResourceState
}

// NewVaultLock registers a new resource with the given unique name, arguments, and options.
func NewVaultLock(ctx *pulumi.Context,
	name string, args *VaultLockArgs, opts ...pulumi.ResourceOpt) (*VaultLock, error) {
	if args == nil || args.CompleteLock == nil {
		return nil, errors.New("missing required argument 'CompleteLock'")
	}
	if args == nil || args.Policy == nil {
		return nil, errors.New("missing required argument 'Policy'")
	}
	if args == nil || args.VaultName == nil {
		return nil, errors.New("missing required argument 'VaultName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["completeLock"] = nil
		inputs["ignoreDeletionError"] = nil
		inputs["policy"] = nil
		inputs["vaultName"] = nil
	} else {
		inputs["completeLock"] = args.CompleteLock
		inputs["ignoreDeletionError"] = args.IgnoreDeletionError
		inputs["policy"] = args.Policy
		inputs["vaultName"] = args.VaultName
	}
	s, err := ctx.RegisterResource("aws:glacier/vaultLock:VaultLock", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VaultLock{s: s}, nil
}

// GetVaultLock gets an existing VaultLock resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVaultLock(ctx *pulumi.Context,
	name string, id pulumi.ID, state *VaultLockState, opts ...pulumi.ResourceOpt) (*VaultLock, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["completeLock"] = state.CompleteLock
		inputs["ignoreDeletionError"] = state.IgnoreDeletionError
		inputs["policy"] = state.Policy
		inputs["vaultName"] = state.VaultName
	}
	s, err := ctx.ReadResource("aws:glacier/vaultLock:VaultLock", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VaultLock{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *VaultLock) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *VaultLock) ID() *pulumi.IDOutput {
	return r.s.ID()
}

func (r *VaultLock) CompleteLock() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["completeLock"])
}

func (r *VaultLock) IgnoreDeletionError() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["ignoreDeletionError"])
}

// JSON string containing the IAM policy to apply as the Glacier Vault Lock policy.
func (r *VaultLock) Policy() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["policy"])
}

// The name of the Glacier Vault.
func (r *VaultLock) VaultName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["vaultName"])
}

// Input properties used for looking up and filtering VaultLock resources.
type VaultLockState struct {
	CompleteLock interface{}
	IgnoreDeletionError interface{}
	// JSON string containing the IAM policy to apply as the Glacier Vault Lock policy.
	Policy interface{}
	// The name of the Glacier Vault.
	VaultName interface{}
}

// The set of arguments for constructing a VaultLock resource.
type VaultLockArgs struct {
	CompleteLock interface{}
	IgnoreDeletionError interface{}
	// JSON string containing the IAM policy to apply as the Glacier Vault Lock policy.
	Policy interface{}
	// The name of the Glacier Vault.
	VaultName interface{}
}
