"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48760],{16146:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={description:"Stronghold is a secure software implementation with the sole purpose of isolating the seed, private keys, personally identifiable information (PII) and policy records from exposure to the genuinely hostile environment of user devices.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","private key","High level library","Actor Model layer","low level libraries","Secure Element","libraries"]},s="Specification: SCOPE",u={unversionedId:"specs/scope",id:"specs/scope",title:"Specification: SCOPE",description:"Stronghold is a secure software implementation with the sole purpose of isolating the seed, private keys, personally identifiable information (PII) and policy records from exposure to the genuinely hostile environment of user devices.",source:"@site/external/stronghold.rs/documentation/docs/specs/scope.md",sourceDirName:"specs",slug:"/specs/scope",permalink:"/stronghold.rs/specs/scope",draft:!1,editUrl:"https://github.com/iotaledger/stronghold.rs/edit/dev/external/stronghold.rs/documentation/docs/specs/scope.md",tags:[],version:"current",frontMatter:{description:"Stronghold is a secure software implementation with the sole purpose of isolating the seed, private keys, personally identifiable information (PII) and policy records from exposure to the genuinely hostile environment of user devices.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","private key","High level library","Actor Model layer","low level libraries","Secure Element","libraries"]},sidebar:"mySidebar",previous:{title:"Specifications",permalink:"/stronghold.rs/specs/overview"},next:{title:"Stronghold Engineering Specification",permalink:"/stronghold.rs/specs/engineering"}},p={},c=[{value:"Frontmatter",id:"frontmatter",level:2},{value:"License",id:"license",level:2},{value:"Language",id:"language",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Research",id:"research",level:3},{value:"Market opportunities",id:"market-opportunities",level:3},{value:"Alignment with mission",id:"alignment-with-mission",level:3},{value:"Current resources/technology",id:"current-resourcestechnology",level:3},{value:"Product Introduction",id:"product",level:2},{value:"Business Application Benefits",id:"business-application-benefits",level:3},{value:"Technical Benefits",id:"technical-benefits",level:3},{value:"Educational Benefits",id:"educational-benefits",level:3},{value:"Stakeholders",id:"stakeholders",level:2},{value:"Guide-level explanation",id:"guide-level-explanation",level:2},{value:"1. Low level libraries (engine.rs)",id:"1-low-level-libraries-enginers",level:3},{value:"2. High level library (stronghold.rs)",id:"2-high-level-library-strongholdrs",level:3},{value:"3. Actor Model layer",id:"3-actor-model-layer",level:3},{value:"Prior art",id:"prior-art",level:2},{value:"Trinity",id:"trinity",level:3},{value:"Nano Ledger",id:"nano-ledger",level:3},{value:"Cryptocore",id:"cryptocore",level:3},{value:"WeChat MiniPrograms",id:"wechat-miniprograms",level:3},{value:"JSbox",id:"jsbox",level:3},{value:"Tauri (Kamikaze Pattern)",id:"tauri-kamikaze-pattern",level:3},{value:"Titan / OpenTitan",id:"titan--opentitan",level:3},{value:"OpenSK",id:"opensk",level:3},{value:"iOS Secure Enclave",id:"ios-secure-enclave",level:3},{value:"Gatekeeper",id:"gatekeeper",level:3},{value:"Riddle&amp;Code Secure Element",id:"riddlecode-secure-element",level:3},{value:"Cryptosteel",id:"cryptosteel",level:3},{value:"VST / LADSPA / LV2 Plugins",id:"vst--ladspa--lv2-plugins",level:3},{value:"TEE / TrustZone",id:"tee--trustzone",level:3},{value:"Binary Obfuscation",id:"binary-obfuscation",level:3},{value:"Dashpay BLS threshold and DKG",id:"dashpay-bls-threshold-and-dkg",level:3},{value:"Pillar",id:"pillar",level:3},{value:"HashD",id:"hashd",level:3},{value:"Fireblocks",id:"fireblocks",level:3},{value:"Vault12",id:"vault12",level:3},{value:"EMQ Rule Engine",id:"emq-rule-engine",level:3},{value:"MESALINK",id:"mesalink",level:3},{value:"Non-bypassable Security Paradigm",id:"non-bypassable-security-paradigm",level:3},{value:"RSIGN2",id:"rsign2",level:3},{value:"Single Use Seals",id:"single-use-seals",level:3},{value:"Others",id:"others",level:3},{value:"Unresolved questions",id:"unresolved-questions",level:2},{value:"Future possibilities",id:"future-possibilities",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"specification-scope"},"Specification: SCOPE"),(0,r.kt)("h1",{id:"scope"},"Project Scope (Scope)"),(0,r.kt)("h2",{id:"frontmatter"},"Frontmatter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'title: Stronghold\nstub: stronghold\ndocument: SCOPE\nversion: 0000\nmaintainer: Daniel Thompson-Yvetot <daniel.yvetot@iota.org>\ncontributors: [tensorprogramming <tensordeveloper@gmail.com>, Daniel Thompson-Yvetot <daniel.yvetot@iota.org>]\nsponsors: [Navin Ramachandran <navin@iota.org>]\nlicenses: ["Apache-2", "CC-BY-INTL-3.0"]\nupdated: 2021-Apr-27\n')),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"All code is licensed under the Apache-2 license, all text and images are licensed under the CC-BY-INTL-3.0 license."),(0,r.kt)("h2",{id:"language"},"Language"),(0,r.kt)("p",null,'The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.'),(0,r.kt)("h2",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"These documents MUST use incremental numbering. New documents always start at 0000. Subsequent revisions to each RFI, RFP and RFC will have their number increased by one."),(0,r.kt)("p",null,"Software releases will follow ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"strict semantic versioning"),"."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("p",null,"All documents in this specification are understood to flow from this document and be bound to its licenses and language as described above."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Stronghold is a secure software implementation (often used in conjunction with - or existing purely on - specialist hardware) with the\nsole purpose of isolating the seed, private keys, personally identifiable information (PII) and policy records from exposure\nto the genuinely hostile environment of user devices. It uses snapshotting and internal mechanisms for threshold signature\nschemes that MAY be distributed across devices."),(0,r.kt)("p",null,'It is based on a suite of low-level libraries collectively called "engine" that provide tooling and algorithms to build secure systems\nin Rust in a way that can be embedded and deployed to cross platform devices. Engine is a collection of libraries which deal with the\nobfuscation and sharing of secret values both mutable and immutable between devices.'),(0,r.kt)("p",null,"The primary task is to isolate the activity of \u201cprivileged\u201d functions from other parts of the software stack. For example, a primary\ngoal is to create a software enclave where private keys are used to sign messages without revealing those keys to other functions."),(0,r.kt)("p",null,"Additionally, a system for enabling Stronghold-based systems to securely communicate with each other shall be created such\nthat devices on different networks can collaborate cryptographically."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("h3",{id:"research"},"Research"),(0,r.kt)("p",null,"Coming on the heels of the Trinity attack, it became clear that a new method for securing secrets needed to be manufactured and made\navailable to the pantheon of IOTA Products."),(0,r.kt)("h3",{id:"market-opportunities"},"Market opportunities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integration with the Wallet, Nodes, Identity, Access and developer toolchains strengthens IOTA\u2019s internal position."),(0,r.kt)("li",{parentName:"ul"},"Publishing the low-level libraries will enable third-parties interested in secure rust-based systems will expand the visibility\nof IOTA in the security community.")),(0,r.kt)("h3",{id:"alignment-with-mission"},"Alignment with mission"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating and maintaining open source software, and providing educational opportunities is the core mission of the IOTA Stiftung.")),(0,r.kt)("h3",{id:"current-resourcestechnology"},"Current resources/technology"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using off-the-shelf libraries has always been a trade-off. Writing the library in Rust using as few external dependencies as\npossible is a good baseline. Designing the library such that cryptographic primitives can be replaced will make the library viable\nin the long-term.")),(0,r.kt)("h2",{id:"product"},"Product Introduction"),(0,r.kt)("h3",{id:"business-application-benefits"},"Business Application Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enhance the security posture of critical IOTA Products"),(0,r.kt)("li",{parentName:"ul"},"Enhance the perception of the IF as a \u201csecurity-focussed\u201d organisation."),(0,r.kt)("li",{parentName:"ul"},"Create new avenues for partnership and 3rd party implementation.")),(0,r.kt)("h3",{id:"technical-benefits"},"Technical Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Writing in rust gives a number of memory-safety benefits"),(0,r.kt)("li",{parentName:"ul"},"Fuzzing from the beginning improves confidence of software fitness"),(0,r.kt)("li",{parentName:"ul"},"Providing reference implementation gives assurance to integrators")),(0,r.kt)("h3",{id:"educational-benefits"},"Educational Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rust is a single source of code truth is a practice that the IF is interested in."),(0,r.kt)("li",{parentName:"ul"},"Helping developers new to IOTA use a secure system from the beginning is a good way to train."),(0,r.kt)("li",{parentName:"ul"},"Learning about Fuzzing is useful for all developers.")),(0,r.kt)("h2",{id:"stakeholders"},"Stakeholders"),(0,r.kt)("p",null,"A number of IOTA foundation stakeholders have been involved in the design process, ranging\nfrom Engineering to Product and developer outreach."),(0,r.kt)("h2",{id:"guide-level-explanation"},"Guide-level explanation"),(0,r.kt)("p",null,"Stronghold itself has several core components:"),(0,r.kt)("h3",{id:"1-low-level-libraries-enginers"},"1. Low level libraries (engine.rs)"),(0,r.kt)("p",null,"There are 5 low level libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"crypto (swappable crypto implementation, chacha20poly1305 & salsa20)"),(0,r.kt)("li",{parentName:"ul"},"primitives (shared structs and traits)"),(0,r.kt)("li",{parentName:"ul"},"random (secure implementation of random)"),(0,r.kt)("li",{parentName:"ul"},"snapshot (stateful storage management)"),(0,r.kt)("li",{parentName:"ul"},"vault (interaction with storage)")),(0,r.kt)("p",null,'This work has been undertaken by an external developer in the context of an EDF grant using\nprior work from Daniel Thompson-Yvetot and Tensor at their security boutique "IONARY".'),(0,r.kt)("h3",{id:"2-high-level-library-strongholdrs"},"2. High level library (stronghold.rs)"),(0,r.kt)("p",null,"The high level library integrates engine.rs and iota.rs to a fully fledged secret storage and\nenclave based system for operations in the context of the IOTA Protocol."),(0,r.kt)("p",null,"Its primary purpose is to serve as the operational enclave for several IOTA Products:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wallet"),(0,r.kt)("li",{parentName:"ul"},"Identity")),(0,r.kt)("p",null,"This work will be undertaken in house by IOTA developers."),(0,r.kt)("h3",{id:"3-actor-model-layer"},"3. Actor Model layer"),(0,r.kt)("p",null,"The Actor Model layer is a thin wrapper for message parsing and message sending that is\nbuilt for interaction with the wallet and any other projects that deem the actor model\nsuitable to their needs."),(0,r.kt)("p",null,"This work will be undertaken in house by IOTA developers."),(0,r.kt)("h2",{id:"prior-art"},"Prior art"),(0,r.kt)("p",null,"There is a massive amount of prior art."),(0,r.kt)("h3",{id:"trinity"},"Trinity"),(0,r.kt)("p",null,"The official IF wallet, available on Android, iOS, MacOs, Windows, Linux. It uses React as a front-end language,\nElectron as a backend for Desktop platforms and React native as the backend for Mobile devices."),(0,r.kt)("h3",{id:"nano-ledger"},"Nano Ledger"),(0,r.kt)("p",null,"A hardware token storage system that uses two STM chips (ST31 for secure storage ","[presumably]",") and the STM32\nfor actual processing."),(0,r.kt)("h3",{id:"cryptocore"},"Cryptocore"),(0,r.kt)("p",null,"\u201cThe CryptoCore is IOTA hardware designed for applications that need fast, dedicated proof of work and a secure\nmemory. The device consists of an IOTA CryptoCore FPGA (ICCFPGA) module and a development board that doubles as a\nRaspberry Pi HAT, making it perfect for standalone applications and/or quick prototyping.\u201c"),(0,r.kt)("h3",{id:"wechat-miniprograms"},"WeChat MiniPrograms"),(0,r.kt)("p",null,"WeChat is a chat and payment application very popular in the Chinese market. MiniPrograms run inside of the scope\nof the main application."),(0,r.kt)("h3",{id:"jsbox"},"JSbox"),(0,r.kt)("p",null,"JSBox is an iOS centric system for running JS in an iOS application developed primarily for the Chinese market.\nIt is an application on the iOS Store geared toward developers:"),(0,r.kt)("p",null,"\u201cJSBox is not only a full-fledged environment for standard JavaScript, but also provides many utilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A safe environment to run JavaScript natively with incredible performance"),(0,r.kt)("li",{parentName:"ul"},"A beautiful editor to write JavaScript, multiple themes, auto-completion, and snippets..."),(0,r.kt)("li",{parentName:"ul"},"Many advanced development tools: lint, prettier, diff viewer and database viewer..."),(0,r.kt)("li",{parentName:"ul"},"A desktop extension to write code extremely fast and comfortable"),(0,r.kt)("li",{parentName:"ul"},"Almost all the cool tech in iOS: Siri/Shortcuts, Today Widget, Action Extension, 3D Touch, Home Screen Shortcut..."),(0,r.kt)("li",{parentName:"ul"},"A lot of awesome examples for beginner\u201d")),(0,r.kt)("h3",{id:"tauri-kamikaze-pattern"},"Tauri (Kamikaze Pattern)"),(0,r.kt)("p",null,"The Kamikaze pattern uses a system of event listeners and emitters in Rust and in Webview that communicate with\neach other using throwaway handles. Considered by the Tauri team to be the most secure pattern possible."),(0,r.kt)("h3",{id:"titan--opentitan"},"Titan / OpenTitan"),(0,r.kt)("p",null,"Open source security chip from Google available in the Pixel 3 (and other security dongles), which enables secure\nbooting of mobile devices and provides a \u201csecure\u201d keystore for Third Party apps. Please review CVE-2019-9465 for a\nsomewhat troubling \u201cnon-disclosure\u201d. OpenTitan is the \u201ccommunity\u201d project for an open hardware \u201cRoot of Trust\u201d."),(0,r.kt)("h3",{id:"opensk"},"OpenSK"),(0,r.kt)("p",null,"Rust based security firmware for Nordic from Google.\n\u201cUnder the hood, OpenSK is written in Rust and runs on TockOS to provide better isolation and cleaner OS\nabstractions in support of security. Rust\u2019s strong memory safety and zero-cost abstractions makes the code less\nvulnerable to logical attacks.\u201d"),(0,r.kt)("h3",{id:"ios-secure-enclave"},"iOS Secure Enclave"),(0,r.kt)("p",null,"\u201cWhen you store a private key in the Secure Enclave, you never actually handle the key, making it difficult for\nthe key to become compromised. Instead, you instruct the Secure Enclave to create the key, securely store it, and\nperform operations with it. You receive only the output of these operations, such as encrypted data or a\ncryptographic signature verification outcome.\u201d"),(0,r.kt)("h3",{id:"gatekeeper"},"Gatekeeper"),(0,r.kt)("p",null,"The official MacOS Application verifier and Anti-Malware service verifies integrity and developer signatures,\nand manages the \u201cquarantine\u201d flag on downloaded files."),(0,r.kt)("h3",{id:"riddlecode-secure-element"},"Riddle&Code Secure Element"),(0,r.kt)("p",null,"\u201cThe Secure Element 2.0 generates a unique private key that cannot be rewritten over the lifetime of the chip.\nThe stored private key can only be used within computations of the microchip itself.\nIt employs a highly-secure hardware-based cryptographic key storage and cryptographic countermeasures which\neliminate potential backdoors linked to software weaknesses. Thus, ensuring that the key cannot be exfiltrated.\nThe decryption of data is only run on the chip itself and happens \u201coff-the-bus\u201d. Thereby, leaving an absolutely\nminimised attack surface for attackers trying to compromise the private key.\u201d"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"this does not address concerns with the onboard RNG, the Secure Element in use is EOL.")),(0,r.kt)("h3",{id:"cryptosteel"},"Cryptosteel"),(0,r.kt)("p",null,"\u201cThe Cryptosteel Capsule is the premier backup tool for autonomous offline storage of valuable data without any\nthird-party involvement. The solid metal device, designed to survive extreme conditions, works under nearly all\ncircumstances.\u201d"),(0,r.kt)("h3",{id:"vst--ladspa--lv2-plugins"},"VST / LADSPA / LV2 Plugins"),(0,r.kt)("p",null,"These audio plug-in systems use digital signal processing, come with a back-end, a front-end, presets and\ninterface with a larger system. They generally require a host. Of special interest is the architectural design\npattern of LV2:"),(0,r.kt)("p",null,"\u201cThe host program loads the plugin, and calls some initialization functions. The host can provide a list of\nLV2_Extension that it supports when it initializes the plugin, so the capabilities of the host are known to\nthe plugin when it is started. Similarly, the plugin uses Turtle metadata to provide a list of capabilities\nto the host, so the host can accommodate those. This capability concept is very powerful, but also difficult\nto understand at first. \u2018Atom\u2019 messages are sent between plugin event ports, and this mechanism is used to\ntransfer MIDI, OSC and Patch information between plugin instances.\u201d"),(0,r.kt)("p",null,"Here is an example of a VST Builder written in rust.\nHere is a solution for building a dylib for MacOS, and the accompanying \u201cbase plugin\u201d."),(0,r.kt)("h3",{id:"tee--trustzone"},"TEE / TrustZone"),(0,r.kt)("p",null,"Trusted Execution Environments can be considered to be a \u201csecure zone\u201d of a processing unit. Generally more\npowerful than a Secure Element, their architecture isolates processes such as boot and analyzing application\nintegrity. Obviously there are standards and any number of vendor implementations."),(0,r.kt)("h3",{id:"binary-obfuscation"},"Binary Obfuscation"),(0,r.kt)("p",null,"Here is a collection of research about Binary Obfuscation approaches:\nSean Taylor presentation at DefCon\nSeminal Paper on Functional Obfuscation (see Multilinear Jigsaw)\nRuntime Encryption (hyperion)\n",(0,r.kt)("a",{parentName:"p",href:"https://nullsecurity.net/tools/cryptography.html"},"https://nullsecurity.net/tools/cryptography.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://phrack.org/issues/63/13.html"},"http://phrack.org/issues/63/13.html"),' <- Excellent Writeup\nThis idea of finger printing the system is especially appealing. When adding more than one device with\n"entangled" setups; deriving multiple fingerprints or a fingerprint that runs on multiple devices might be\npossible.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/packz/binary-encryption/tree/master"},"https://github.com/packz/binary-encryption/tree/master")),(0,r.kt)("p",null,"Links from Tensor:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/obfuscator-llvm/obfuscator/wiki"},"https://github.com/obfuscator-llvm/obfuscator/wiki")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://repo.zenk-security.com/Reversing%20.%20cracking/HARES:%20Hardened%20Anti-Reverse%20Engineering%20System.pdf"},"https://repo.zenk-security.com/Reversing%20.%20cracking/HARES:%20Hardened%20Anti-Reverse%20Engineering%20System.pdf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.freepatentsonline.com/8145900.html"},"http://www.freepatentsonline.com/8145900.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/andrivet/ADVobfuscator"},"https://github.com/andrivet/ADVobfuscator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rootm0s/Protectors"},"https://github.com/rootm0s/Protectors"))),(0,r.kt)("h3",{id:"dashpay-bls-threshold-and-dkg"},"Dashpay BLS threshold and DKG"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dashpay/dips/blob/master/dip-0006/bls_m-of-n_threshold_scheme_and_dkg.md"},"https://github.com/dashpay/dips/blob/master/dip-0006/bls_m-of-n_threshold_scheme_and_dkg.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://crypto.stanford.edu/~dabo/pubs/papers/BLSmultisig.html"},"https://crypto.stanford.edu/~dabo/pubs/papers/BLSmultisig.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.dash.org/secret-sharing-and-threshold-signatures-with-bls-954d1587b5f?gi=1111957aa919"},"https://blog.dash.org/secret-sharing-and-threshold-signatures-with-bls-954d1587b5f?gi=1111957aa919"))),(0,r.kt)("h3",{id:"pillar"},"Pillar"),(0,r.kt)("p",null,"Smart contract wallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/pillarproject/understanding-plr-utility-part-i-pillar-smart-wallet-personal-data-locker-6138bb3058b5"},"https://medium.com/pillarproject/understanding-plr-utility-part-i-pillar-smart-wallet-personal-data-locker-6138bb3058b5"))),(0,r.kt)("h3",{id:"hashd"},"HashD"),(0,r.kt)("p",null,"See Section 6 on Identity Recovery\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.hashd.in/hashd-in-draft0/"},"https://blog.hashd.in/hashd-in-draft0/")),(0,r.kt)("h3",{id:"fireblocks"},"Fireblocks"),(0,r.kt)("p",null,"Fireblocks is a multisig system. Dom has more information about them.\n",(0,r.kt)("a",{parentName:"p",href:"https://www.fireblocks.com/"},"https://www.fireblocks.com/")),(0,r.kt)("h3",{id:"vault12"},"Vault12"),(0,r.kt)("p",null,"\u201cUsing a secure decentralized network made up of trusted people, Vault12 gives cryptocurrency owners the peace\nof mind that their crypto assets remain backed up, cryptographically secure but accessible regardless of\nthreats such as attacks on centralized servers and digital impersonation.\u201d\n",(0,r.kt)("a",{parentName:"p",href:"https://vault12.com/"},"https://vault12.com/")),(0,r.kt)("h3",{id:"emq-rule-engine"},"EMQ Rule Engine"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/emqx/emqx-rule-engine/blob/master/docs/design.md"},"https://github.com/emqx/emqx-rule-engine/blob/master/docs/design.md")),(0,r.kt)("h3",{id:"mesalink"},"MESALINK"),(0,r.kt)("p",null,"MesaLink implements OpenSSL C APIs with Rust FFI. If you call an exported C FFI function from Rust, it\u2019s no\ndifferent to calling that same exported C function from a different C or C++ library. Unlike Java/Go, there\nis zero overhead.\n",(0,r.kt)("a",{parentName:"p",href:"https://mesalink.io/faq/"},"https://mesalink.io/faq/")),(0,r.kt)("h3",{id:"non-bypassable-security-paradigm"},"Non-bypassable Security Paradigm"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-teaclave-sgx-sdk/blob/master/documents/nbsp.pdf"},"https://github.com/apache/incubator-teaclave-sgx-sdk/blob/master/documents/nbsp.pdf")),(0,r.kt)("h3",{id:"rsign2"},"RSIGN2"),(0,r.kt)("p",null,"minisign in wasm from Rust\n",(0,r.kt)("a",{parentName:"p",href:"https://wapm.io/package/jedisct1/rsign2"},"https://wapm.io/package/jedisct1/rsign2")),(0,r.kt)("h3",{id:"single-use-seals"},"Single Use Seals"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://petertodd.org/2017/scalable-single-use-seal-asset-transfer"},"https://petertodd.org/2017/scalable-single-use-seal-asset-transfer")),(0,r.kt)("h3",{id:"others"},"Others"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://guardtime.com/mida/"},"https://guardtime.com/mida/"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.riddleandcode.com/secure-element"},"https://www.riddleandcode.com/secure-element"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RiddleAndCode/secure-element-sdk/wiki/Raspberrypi-HSM"},"https://github.com/RiddleAndCode/secure-element-sdk/wiki/Raspberrypi-HSM"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://safenetwork.tech/faq/#what-is-self-authentication"},"https://safenetwork.tech/faq/#what-is-self-authentication"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://keycard.tech/"},"https://keycard.tech/")),(0,r.kt)("h2",{id:"unresolved-questions"},"Unresolved questions"),(0,r.kt)("h2",{id:"future-possibilities"},"Future possibilities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Having a CLI"),(0,r.kt)("li",{parentName:"ul"},"Having a service that can run as a daemon"),(0,r.kt)("li",{parentName:"ul"},"Using a remote stronghold")))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);