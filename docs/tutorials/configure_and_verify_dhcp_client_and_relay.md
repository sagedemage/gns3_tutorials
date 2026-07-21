# Configure and Verify DHCP Client and Relay
This is a guide to configure and verify the DHCP client and relay for the routers.

![Configure and Verify DHCP Client and Relay](../images/Configure_and_Verify_DHCP_Client_and_Relay.png)

List of Devices:
- Router:
	- Device Name: Cisco 3745
	- Quantity: 3
- Switch:
	- Device Name: Ethernet switch
	- Quantity: 1
- PC:
	- Device Name: Ubuntu Cloud Guest 24.10
	- Quantity: 1

## IP Address Table for the Routers
R1:
- FastEthernet0/0:
    - IPv4 Address: 10.1.1.2
    - Subnet Mask: 255.255.255.0
- FastEthernet0/1:
    - IPv4 Address: 192.168.10.1
    - Subnet Mask: 255.255.255.0

R2:
- FastEthernet0/0:
    - IPv4 Address: 10.1.1.1
    - Subnet Mask: 255.255.255.0

R3:
- FastEthernet0/0:
    - IPv4 Address: 192.168.10.X (Assigned by DHCP)
    - Subnet Mask: 255.255.255.0

## Configure the IP addresses of the Routers
Configure the IP address for the interfaces of the routers.

Interface FastEthernet0/0 on R1:
```
R1# conf t
R1(config)# int Fa0/0
R1(config-if)# ip add 10.1.1.2 255.255.255.0
R1(config-if)# no shut
R1(config-if)# exit
```

Interface FastEthernet0/1 on R1:
```
R1(config)# int Fa0/1
R1(config-if)# ip add 192.168.10.1 255.255.255.0
R1(config-if)# no shut
R1(config-if)# end
```

Interface FastEthernet0/0 on R2:
```
R2# conf t
R2(config)# int Fa0/0
R2(config-if)# ip add 10.1.1.1 255.255.255.0
R2(config-if)# no shut
R2(config-if)# end
```

## Configure DHCP for the Router
Configure the DHCP server on R2.

Configure the exclude addresses for DHCP on R2:
```
R2# conf t
R2(config)# ip dhcp excluded-address 192.168.10.1 192.168.10.10
```

Configure the DHCP pool on R2:
```
R2(config)# ip dhcp pool DHCPPool
R2(dhcp-config)# default-router 192.168.10.1
R2(dhcp-config)# network 192.168.10.0 255.255.255.0
R2(dhcp-config)# end
```

Configure the DHCP relay on R1

Interface FastEthernet0/1 on R1:
```
R1# conf t
R1(config)# int Fa0/1
R1(config-if)# ip helper-address 10.1.1.1
R1(config-if)# end
```

## Configure Static Routing
Configure static routing for R2 in order to hand out an IP address to the clients in a different subnet via DHCP:
```
R2(config)# ip route 192.168.10.0 255.255.255.0 10.1.1.2
R2(config)# end
```

## Configure DHCP Client for the PC
Configure the DHCP client on PC1.

**PC1 - Ubuntu Cloud Guest**

This is the username and password for the Ubuntu VMs:
- username: ubuntu
- password: ubuntu

On PC1, open the file, `/etc/netplan/50-cloud-init.yaml`.
```
ubuntu@PC1:~$ sudo vim /etc/netplan/50-cloud-init.yaml
```

Configure the DHCP client for PC1 in `/etc/netplan/50-cloud-init.yaml`:
```
network:
    version: 2
    ethernets:
        ens3:
            dhcp4: true
```

Update the networking configuration using the netplan command:
```
ubuntu@PC1:~$ sudo netplan apply
```

Check the IP address of the interface ens3:
```
ubuntu@PC1:~$ ip addr show
```

## Configure DHCP Client for the Router
Configure the DHCP client on R3.

Interface FastEthernet0/0 on R3:
```
R3# conf t
R3(config)# int Fa0/0
R3(config-if)# ip add dhcp
R3(config-if)# no shut
R3(config-if)# end
```

## Verify the Functionality of DHCP
Verify the functionality of DHCP on the server and client.

Verify the DHCP Server on R2:
```
R2# show ip dhcp binding
```

Verify the dynamic address assignment on the DHCP client on R3:
```
R3# show ip int brief
```

## Save Router Configurations
Go to each router and save the running configuration to the startup configuration.

Save the config for R1:
```
R1# copy run start
```

Save the config for R2:
```
R2# copy run start
```

Save the config for R3:
```
R3# copy run start
```

## Resources
- [Configure a Cisco DHCP Server and Relay](https://computingforgeeks.com/cisco-dhcp-server-relay-configuration/)