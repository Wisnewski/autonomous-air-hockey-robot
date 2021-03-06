function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Data Type Conversion */
	this.urlHashMap["FullDuplex_UDP:145"] = "FullDuplex_UDP.c:93";
	/* <Root>/X Step to Pulse */
	this.urlHashMap["FullDuplex_UDP:110"] = "FullDuplex_UDP.c:100,161,214,218,241,251";
	/* <S1>/MPComSend */
	this.urlHashMap["FullDuplex_UDP:93"] = "FullDuplex_UDP.c:189,228&FullDuplex_UDP.h:97,100&FullDuplex_UDP_data.c:68,71";
	/* <S1>/Pack */
	this.urlHashMap["FullDuplex_UDP:94"] = "FullDuplex_UDP.c:181,183&FullDuplex_UDP.h:52,56";
	/* <S1>/Unpack */
	this.urlHashMap["FullDuplex_UDP:95"] = "FullDuplex_UDP.c:85,87&FullDuplex_UDP.h:48,50";
	/* <S2>/Constant */
	this.urlHashMap["FullDuplex_UDP:112"] = "FullDuplex_UDP.c:150&FullDuplex_UDP.h:79&FullDuplex_UDP_data.c:50";
	/* <S2>/Counter */
	this.urlHashMap["FullDuplex_UDP:113"] = "FullDuplex_UDP.c:114,135,242&FullDuplex_UDP.h:54,58,64&FullDuplex_UDP_data.c:35&MWDSP_EPH_R_R.c:28,92";
	/* <S2>/Data Type Conversion */
	this.urlHashMap["FullDuplex_UDP:114"] = "FullDuplex_UDP.c:115";
	/* <S2>/Hold */
	this.urlHashMap["FullDuplex_UDP:115"] = "FullDuplex_UDP.c:131,147,246,250";
	/* <S2>/Relational
Operator */
	this.urlHashMap["FullDuplex_UDP:125"] = "FullDuplex_UDP.c:134";
	/* <S2>/Relational
Operator1 */
	this.urlHashMap["FullDuplex_UDP:126"] = "FullDuplex_UDP.c:152";
	/* <S2>/Scope */
	this.urlHashMap["FullDuplex_UDP:127"] = "msg=rtwMsg_reducedBlock&block=FullDuplex_UDP:127";
	/* <S2>/Switch1 */
	this.urlHashMap["FullDuplex_UDP:128"] = "FullDuplex_UDP.c:149,160";
	/* <S3>/Bitwise
Operator */
	this.urlHashMap["FullDuplex_UDP:134"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=FullDuplex_UDP:134";
	/* <S3>/GPIO Pin Select */
	this.urlHashMap["FullDuplex_UDP:135"] = "FullDuplex_UDP.c:92&FullDuplex_UDP.h:118&FullDuplex_UDP_data.c:89";
	/* <S3>/GPIO Setup1 */
	this.urlHashMap["FullDuplex_UDP:136"] = "FullDuplex_UDP.c:166,224&FullDuplex_UDP.h:109,112,124,127&FullDuplex_UDP_data.c:80,83,95,98";
	/* <S3>/GPIO Write */
	this.urlHashMap["FullDuplex_UDP:137"] = "FullDuplex_UDP.c:91&FullDuplex_UDP.h:103&FullDuplex_UDP_data.c:74";
	/* <S3>/Gain */
	this.urlHashMap["FullDuplex_UDP:138"] = "FullDuplex_UDP.c:94&FullDuplex_UDP.h:121&FullDuplex_UDP_data.c:92";
	/* <S3>/Scope */
	this.urlHashMap["FullDuplex_UDP:140"] = "msg=rtwMsg_reducedBlock&block=FullDuplex_UDP:140";
	/* <S4>/DebugPrint2_sfcn */
	this.urlHashMap["FullDuplex_UDP:90:129"] = "FullDuplex_UDP.c:177&FullDuplex_UDP.h:130&FullDuplex_UDP_data.c:102";
	/* <S4>/Pack */
	this.urlHashMap["FullDuplex_UDP:90:130"] = "FullDuplex_UDP.c:169,171&FullDuplex_UDP.h:51,55";
	/* <S5>/Enabled
Subsystem */
	this.urlHashMap["FullDuplex_UDP:92:120"] = "FullDuplex_UDP.c:73,83,232,239";
	/* <S5>/S-Function */
	this.urlHashMap["FullDuplex_UDP:92:124"] = "FullDuplex_UDP.c:67,82,210&FullDuplex_UDP.h:85,88&FullDuplex_UDP_data.c:56,59";
	/* <S6>/In1 */
	this.urlHashMap["FullDuplex_UDP:92:121"] = "FullDuplex_UDP.c:68&FullDuplex_UDP.h:57";
	/* <S6>/Enable */
	this.urlHashMap["FullDuplex_UDP:92:122"] = "FullDuplex_UDP.c:74";
	/* <S6>/Out1 */
	this.urlHashMap["FullDuplex_UDP:92:123"] = "FullDuplex_UDP.c:233,238&FullDuplex_UDP.h:115&FullDuplex_UDP_data.c:86";
	/* <S7>/Memory */
	this.urlHashMap["FullDuplex_UDP:118"] = "FullDuplex_UDP.c:133,144,247&FullDuplex_UDP.h:49,82&FullDuplex_UDP_data.c:53";
	/* <S7>/Switch2 */
	this.urlHashMap["FullDuplex_UDP:119"] = "FullDuplex_UDP.c:132,142";
	/* <S8>/Data Type Conversion1 */
	this.urlHashMap["FullDuplex_UDP:122"] = "FullDuplex_UDP.c:116,151";
	/* <S8>/Pulse
Generator */
	this.urlHashMap["FullDuplex_UDP:123"] = "FullDuplex_UDP.c:101,112,215&FullDuplex_UDP.h:53,67,70,73,76&FullDuplex_UDP_data.c:38,41,44,47";
	/* <S9>/S-Function2 */
	this.urlHashMap["FullDuplex_UDP:139:151"] = "FullDuplex_UDP.c:163,220,258&FullDuplex_UDP.h:91,94,106&FullDuplex_UDP_data.c:62,65,77";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "FullDuplex_UDP"};
	this.sidHashMap["FullDuplex_UDP"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "FullDuplex_UDP:87"};
	this.sidHashMap["FullDuplex_UDP:87"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "FullDuplex_UDP:110"};
	this.sidHashMap["FullDuplex_UDP:110"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "FullDuplex_UDP:131"};
	this.sidHashMap["FullDuplex_UDP:131"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "FullDuplex_UDP:90"};
	this.sidHashMap["FullDuplex_UDP:90"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "FullDuplex_UDP:92"};
	this.sidHashMap["FullDuplex_UDP:92"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "FullDuplex_UDP:92:120"};
	this.sidHashMap["FullDuplex_UDP:92:120"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "FullDuplex_UDP:115"};
	this.sidHashMap["FullDuplex_UDP:115"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "FullDuplex_UDP:121"};
	this.sidHashMap["FullDuplex_UDP:121"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<S9>"] = {sid: "FullDuplex_UDP:139"};
	this.sidHashMap["FullDuplex_UDP:139"] = {rtwname: "<S9>"};
	this.rtwnameHashMap["<Root>/Data Type Conversion"] = {sid: "FullDuplex_UDP:145"};
	this.sidHashMap["FullDuplex_UDP:145"] = {rtwname: "<Root>/Data Type Conversion"};
	this.rtwnameHashMap["<Root>/UDP RECEIVE"] = {sid: "FullDuplex_UDP:87"};
	this.sidHashMap["FullDuplex_UDP:87"] = {rtwname: "<Root>/UDP RECEIVE"};
	this.rtwnameHashMap["<Root>/X Step to Pulse"] = {sid: "FullDuplex_UDP:110"};
	this.sidHashMap["FullDuplex_UDP:110"] = {rtwname: "<Root>/X Step to Pulse"};
	this.rtwnameHashMap["<Root>/X-Axis"] = {sid: "FullDuplex_UDP:131"};
	this.sidHashMap["FullDuplex_UDP:131"] = {rtwname: "<Root>/X-Axis"};
	this.rtwnameHashMap["<S1>/Advanced Debug Print"] = {sid: "FullDuplex_UDP:90"};
	this.sidHashMap["FullDuplex_UDP:90"] = {rtwname: "<S1>/Advanced Debug Print"};
	this.rtwnameHashMap["<S1>/Demux"] = {sid: "FullDuplex_UDP:91"};
	this.sidHashMap["FullDuplex_UDP:91"] = {rtwname: "<S1>/Demux"};
	this.rtwnameHashMap["<S1>/MPComRecv"] = {sid: "FullDuplex_UDP:92"};
	this.sidHashMap["FullDuplex_UDP:92"] = {rtwname: "<S1>/MPComRecv"};
	this.rtwnameHashMap["<S1>/MPComSend"] = {sid: "FullDuplex_UDP:93"};
	this.sidHashMap["FullDuplex_UDP:93"] = {rtwname: "<S1>/MPComSend"};
	this.rtwnameHashMap["<S1>/Pack"] = {sid: "FullDuplex_UDP:94"};
	this.sidHashMap["FullDuplex_UDP:94"] = {rtwname: "<S1>/Pack"};
	this.rtwnameHashMap["<S1>/Unpack"] = {sid: "FullDuplex_UDP:95"};
	this.sidHashMap["FullDuplex_UDP:95"] = {rtwname: "<S1>/Unpack"};
	this.rtwnameHashMap["<S1>/X"] = {sid: "FullDuplex_UDP:96"};
	this.sidHashMap["FullDuplex_UDP:96"] = {rtwname: "<S1>/X"};
	this.rtwnameHashMap["<S1>/Steps "] = {sid: "FullDuplex_UDP:97"};
	this.sidHashMap["FullDuplex_UDP:97"] = {rtwname: "<S1>/Steps "};
	this.rtwnameHashMap["<S2>/Steps"] = {sid: "FullDuplex_UDP:111"};
	this.sidHashMap["FullDuplex_UDP:111"] = {rtwname: "<S2>/Steps"};
	this.rtwnameHashMap["<S2>/Constant"] = {sid: "FullDuplex_UDP:112"};
	this.sidHashMap["FullDuplex_UDP:112"] = {rtwname: "<S2>/Constant"};
	this.rtwnameHashMap["<S2>/Counter"] = {sid: "FullDuplex_UDP:113"};
	this.sidHashMap["FullDuplex_UDP:113"] = {rtwname: "<S2>/Counter"};
	this.rtwnameHashMap["<S2>/Data Type Conversion"] = {sid: "FullDuplex_UDP:114"};
	this.sidHashMap["FullDuplex_UDP:114"] = {rtwname: "<S2>/Data Type Conversion"};
	this.rtwnameHashMap["<S2>/Hold"] = {sid: "FullDuplex_UDP:115"};
	this.sidHashMap["FullDuplex_UDP:115"] = {rtwname: "<S2>/Hold"};
	this.rtwnameHashMap["<S2>/PWM2"] = {sid: "FullDuplex_UDP:121"};
	this.sidHashMap["FullDuplex_UDP:121"] = {rtwname: "<S2>/PWM2"};
	this.rtwnameHashMap["<S2>/Relational Operator"] = {sid: "FullDuplex_UDP:125"};
	this.sidHashMap["FullDuplex_UDP:125"] = {rtwname: "<S2>/Relational Operator"};
	this.rtwnameHashMap["<S2>/Relational Operator1"] = {sid: "FullDuplex_UDP:126"};
	this.sidHashMap["FullDuplex_UDP:126"] = {rtwname: "<S2>/Relational Operator1"};
	this.rtwnameHashMap["<S2>/Scope"] = {sid: "FullDuplex_UDP:127"};
	this.sidHashMap["FullDuplex_UDP:127"] = {rtwname: "<S2>/Scope"};
	this.rtwnameHashMap["<S2>/Switch1"] = {sid: "FullDuplex_UDP:128"};
	this.sidHashMap["FullDuplex_UDP:128"] = {rtwname: "<S2>/Switch1"};
	this.rtwnameHashMap["<S2>/Pulses"] = {sid: "FullDuplex_UDP:129"};
	this.sidHashMap["FullDuplex_UDP:129"] = {rtwname: "<S2>/Pulses"};
	this.rtwnameHashMap["<S3>/Direction"] = {sid: "FullDuplex_UDP:132"};
	this.sidHashMap["FullDuplex_UDP:132"] = {rtwname: "<S3>/Direction"};
	this.rtwnameHashMap["<S3>/Speed (%)"] = {sid: "FullDuplex_UDP:133"};
	this.sidHashMap["FullDuplex_UDP:133"] = {rtwname: "<S3>/Speed (%)"};
	this.rtwnameHashMap["<S3>/Bitwise Operator"] = {sid: "FullDuplex_UDP:134"};
	this.sidHashMap["FullDuplex_UDP:134"] = {rtwname: "<S3>/Bitwise Operator"};
	this.rtwnameHashMap["<S3>/GPIO Pin Select"] = {sid: "FullDuplex_UDP:135"};
	this.sidHashMap["FullDuplex_UDP:135"] = {rtwname: "<S3>/GPIO Pin Select"};
	this.rtwnameHashMap["<S3>/GPIO Setup1"] = {sid: "FullDuplex_UDP:136"};
	this.sidHashMap["FullDuplex_UDP:136"] = {rtwname: "<S3>/GPIO Setup1"};
	this.rtwnameHashMap["<S3>/GPIO Write"] = {sid: "FullDuplex_UDP:137"};
	this.sidHashMap["FullDuplex_UDP:137"] = {rtwname: "<S3>/GPIO Write"};
	this.rtwnameHashMap["<S3>/Gain"] = {sid: "FullDuplex_UDP:138"};
	this.sidHashMap["FullDuplex_UDP:138"] = {rtwname: "<S3>/Gain"};
	this.rtwnameHashMap["<S3>/PWM Output X-Axis"] = {sid: "FullDuplex_UDP:139"};
	this.sidHashMap["FullDuplex_UDP:139"] = {rtwname: "<S3>/PWM Output X-Axis"};
	this.rtwnameHashMap["<S3>/Scope"] = {sid: "FullDuplex_UDP:140"};
	this.sidHashMap["FullDuplex_UDP:140"] = {rtwname: "<S3>/Scope"};
	this.rtwnameHashMap["<S4>/VarIn1"] = {sid: "FullDuplex_UDP:90:127"};
	this.sidHashMap["FullDuplex_UDP:90:127"] = {rtwname: "<S4>/VarIn1"};
	this.rtwnameHashMap["<S4>/VarIn2"] = {sid: "FullDuplex_UDP:90:128"};
	this.sidHashMap["FullDuplex_UDP:90:128"] = {rtwname: "<S4>/VarIn2"};
	this.rtwnameHashMap["<S4>/DebugPrint2_sfcn"] = {sid: "FullDuplex_UDP:90:129"};
	this.sidHashMap["FullDuplex_UDP:90:129"] = {rtwname: "<S4>/DebugPrint2_sfcn"};
	this.rtwnameHashMap["<S4>/Pack"] = {sid: "FullDuplex_UDP:90:130"};
	this.sidHashMap["FullDuplex_UDP:90:130"] = {rtwname: "<S4>/Pack"};
	this.rtwnameHashMap["<S5>/Enabled Subsystem"] = {sid: "FullDuplex_UDP:92:120"};
	this.sidHashMap["FullDuplex_UDP:92:120"] = {rtwname: "<S5>/Enabled Subsystem"};
	this.rtwnameHashMap["<S5>/S-Function"] = {sid: "FullDuplex_UDP:92:124"};
	this.sidHashMap["FullDuplex_UDP:92:124"] = {rtwname: "<S5>/S-Function"};
	this.rtwnameHashMap["<S5>/Out1"] = {sid: "FullDuplex_UDP:92:125"};
	this.sidHashMap["FullDuplex_UDP:92:125"] = {rtwname: "<S5>/Out1"};
	this.rtwnameHashMap["<S6>/In1"] = {sid: "FullDuplex_UDP:92:121"};
	this.sidHashMap["FullDuplex_UDP:92:121"] = {rtwname: "<S6>/In1"};
	this.rtwnameHashMap["<S6>/Enable"] = {sid: "FullDuplex_UDP:92:122"};
	this.sidHashMap["FullDuplex_UDP:92:122"] = {rtwname: "<S6>/Enable"};
	this.rtwnameHashMap["<S6>/Out1"] = {sid: "FullDuplex_UDP:92:123"};
	this.sidHashMap["FullDuplex_UDP:92:123"] = {rtwname: "<S6>/Out1"};
	this.rtwnameHashMap["<S7>/u"] = {sid: "FullDuplex_UDP:116"};
	this.sidHashMap["FullDuplex_UDP:116"] = {rtwname: "<S7>/u"};
	this.rtwnameHashMap["<S7>/Hold"] = {sid: "FullDuplex_UDP:117"};
	this.sidHashMap["FullDuplex_UDP:117"] = {rtwname: "<S7>/Hold"};
	this.rtwnameHashMap["<S7>/Memory"] = {sid: "FullDuplex_UDP:118"};
	this.sidHashMap["FullDuplex_UDP:118"] = {rtwname: "<S7>/Memory"};
	this.rtwnameHashMap["<S7>/Switch2"] = {sid: "FullDuplex_UDP:119"};
	this.sidHashMap["FullDuplex_UDP:119"] = {rtwname: "<S7>/Switch2"};
	this.rtwnameHashMap["<S7>/y"] = {sid: "FullDuplex_UDP:120"};
	this.sidHashMap["FullDuplex_UDP:120"] = {rtwname: "<S7>/y"};
	this.rtwnameHashMap["<S8>/Data Type Conversion1"] = {sid: "FullDuplex_UDP:122"};
	this.sidHashMap["FullDuplex_UDP:122"] = {rtwname: "<S8>/Data Type Conversion1"};
	this.rtwnameHashMap["<S8>/Pulse Generator"] = {sid: "FullDuplex_UDP:123"};
	this.sidHashMap["FullDuplex_UDP:123"] = {rtwname: "<S8>/Pulse Generator"};
	this.rtwnameHashMap["<S8>/PWM"] = {sid: "FullDuplex_UDP:124"};
	this.sidHashMap["FullDuplex_UDP:124"] = {rtwname: "<S8>/PWM"};
	this.rtwnameHashMap["<S9>/Duty Cycle (%)"] = {sid: "FullDuplex_UDP:139:58"};
	this.sidHashMap["FullDuplex_UDP:139:58"] = {rtwname: "<S9>/Duty Cycle (%)"};
	this.rtwnameHashMap["<S9>/S-Function2"] = {sid: "FullDuplex_UDP:139:151"};
	this.sidHashMap["FullDuplex_UDP:139:151"] = {rtwname: "<S9>/S-Function2"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
