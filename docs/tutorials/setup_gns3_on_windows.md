# Setup GNS3 on Windows
This is a guide to setup GNS3 on Windows.

Download VMware Workstation at [WMware Fusion and Workstation](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion).
You have to create a Broadcom account to get VMware Workstation for free.

VMware Workstation is recommended for creating the GNS3 VM for GNS3. 

According to the *Downloading the GNS3 VM* documentation, it states:
> VMware is a better option because it’s faster and supports nested virtualization (the VMs inside the VM are accelerated by your CPU). The speed difference is important and some VMs will be too slow on VirtualBox* (see note below).

Download GNS3 at [GNS3 main website](https://gns3.com/).
You have to create a GNS3 account to get GNS3.

To ensure that GNS3 can start the GNS3 VM automatically with VMware workstation. It is recommended to add an environmental variable so it can find `vmrun.exe`. 

Go to System Properties -> Environmental Variables...

Under User variables for "username", highlight Path and click "Edit...".

Go to an empty line and add this environmental variable:
```
C:\Program Files\VMware\VMware Workstation\
```

Download the GNS3 VM at [Download GNS3 VM](https://gns3.com/software/download-vm)

It is recommended to download the VMware Workstation and Fusion version of the GNS3 VM.

Import the GNS3 VM to VMware Workstation.

Read the [Where do I get IOS images?](https://docs.gns3.com/docs/troubleshooting-faq/where-do-i-get-ios-images/) documentation to learn how to get the Cisco IOS images. 

## Resources
- [Downloading the GNS3 VM](https://docs.gns3.com/docs/getting-started/installation/download-gns3-vm/)
- [Where do I get IOS images?](https://docs.gns3.com/docs/troubleshooting-faq/where-do-i-get-ios-images/)