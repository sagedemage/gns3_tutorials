# Configure Rapid PVST+ Spanning Tree Protocol
This is a guide to configure rapid PVST+ spanning tree protocol on the switch.

![Configure Rapid PVST+ Spanning Tree Protocol](../images/Configure_Rapid_PVST+_Spanning_Tree_Protocol.png)

List of Devices:
- PCs
	- Quantity: 2
	- Device Name: Ubuntu Cloud Guest 24.10
- Switch
	- Quantity: 3
	- Device Name: Cisco IOSvL215.2

## IP Address Table for the PCs
PC1:
- IPv4 Address: 192.168.1.1
- Subnet Mask: 255.255.255.0

PC2: 
- IPv4 Address: 192.168.1.2
- Subnet Mask: 255.255.255.0

## Verify Spanning Tree Protocol
Verify Spanning Tree Protocol on the switches. 

Verify Spanning Tree Protocol on DIST1:
```
DIST1# show spanning-tree
```

Verify Spanning Tree Protocol on ACC1:
```
ACC1# show spanning-tree
```

Verify Spanning Tree Protocol on DIST2:
```
DIST2# show spanning-tree
```

## Configure the Root Bridge
Configure the Spanning Tree Protocol priority value on DIST1:
```
DIST1# conf t
DIST1(config)# spanning-tree vlan 1 priority 4096
DIST1(config)# end
```

Verify that DIST1 is the new root bridge:
```
DIST1# show spanning-tree
```

The output should mention this information below the address of the root ID: 
```
This bridge is the root
```

## Configure RPVST+
Cisco implements Rapid Spanning Tree Protocol (RSTP) with a VLAN-by-VLAN version called Rapid Per VLAN Spanning Tree Plus (RPVST+). You will configure RPVST+ on a switch.

Configure a switch for RPVST+ on DIST1:
```
DIST1# conf t
DIST1(config)# spanning-tree mode rapid-pvst
DIST1(config)# end
```

Verify RPVST+ on DIST1:
```
DIST1# show spanning-tree
```

The output should mention this information below VLAN0001 on DIST1:
```
VLAN0001
  Spanning tree enabled protocol rstp
```

## Configure PortFast
The PortFast feature is used on ports connected to servers and workstations. PortFast should not be used on ports that connect to switches because it can cause switching loops.

Configure PortFast on interface Gig0/2 on ACC1:
```
ACC1# conf t
ACC1(config)# interface Gig0/2
ACC1(config-if)# spanning-tree portfast
ACC1(config-if)# exit
```

Configure PortFast on interface Gig0/3 on ACC1:
```
ACC1(config)# interface Gig0/3
ACC1(config-if)# spanning-tree portfast
ACC1(config-if)# end
```

## Configure the IP Address for the PCs
Configure the IP address for the PCs.

**PC1 - Ubuntu Cloud Guest**

This is the username and password for the Ubuntu VMs:
- username: ubuntu
- password: ubuntu

On PC1, open the file, `/etc/netplan/50-cloud-init.yaml`.

```
ubuntu@PC1:~$ sudo vim /etc/netplan/50-cloud-init.yaml
```

Configure the IP address for PC1 in `/etc/netplan/50-cloud-init.yaml`:

```
network:
    version: 2
    ethernets:
        ens3:
            addresses: [192.168.1.1/24]
            dhcp4: false
```

Update the networking configuration using the netplan command

```
ubuntu@PC1:~$ sudo netplan apply
```

Check the IP address of the interface eth0:

```
ubuntu@PC1:~$ ip addr show
```

**PC2 - Ubuntu Cloud Guest**

This is the username and password for the Ubuntu VMs:
- username: ubuntu
- password: ubuntu

On PC1, open the file, `/etc/netplan/50-cloud-init.yaml`.

```
ubuntu@PC2:~$ sudo vim /etc/netplan/50-cloud-init.yaml
```

Configure the IP address for PC1 in `/etc/netplan/50-cloud-init.yaml`:

```
network:
    version: 2
    ethernets:
        ens3:
            addresses: [192.168.1.2/24]
            dhcp4: false
```

Update the networking configuration using the netplan command

```
ubuntu@PC2:~$ sudo netplan apply
```

Check the IP address of the interface eth0:

```
ubuntu@PC2:~$ ip addr show
```

## Check Connectivity Between the PCs
Ping each PC to check if the PCs can communicate with each other.

**PC1 - UbuntuCloudGuest**

Ping the PC from PC1.

Ping PC2:
```
ubuntu@PC1:~$ ping 192.168.1.2
```

**PC2 - UbuntuCloudGuest**

Ping the PC from PC2.

Ping PC1:
```
ubuntu@PC2:~$ ping 192.168.1.1
```

## Save Switch Configurations
Go to each multilayer switch and save the running configuration to the startup configuration.

Save the config for ACC1:
```
ACC1# copy run start
```

Save the config for DIST1:
```
DIST1# copy run start
```

Save the config for DIST2:
```
DIST2# copy run start
```

## Resources
- [3.3.2.2 Packet Tracer – Configuring Rapid PVST Instructions Answers - ITExamAnswers.net](https://itexamanswers.net/3-3-2-2-packet-tracer-configuring-rapid-pvst.html)
- [Configure Spanning Tree Protocol (Rapid PVST+) on Cisco Switches - ComputingForGeeks](https://computingforgeeks.com/cisco-spanning-tree-protocol-configuration/)
- [Configuring Rapid PVST+ - Cisco](https://www.cisco.com/en/US/docs/switches/datacenter/nexus5000/sw/configuration/guide/cli_rel_4_1/Cisco_Nexus_5000_Series_Switch_CLI_Software_Configuration_Guide_chapter11.pdf)
- [Spanning Tree Protocol - Wikipedia](https://en.wikipedia.org/wiki/Spanning_Tree_Protocol)