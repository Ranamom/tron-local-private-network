var TronWeb = require('tronweb');
var tronWeb1 = new TronWeb({
        fullHost: 'http://localhost:16667',
        privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0'
    })

var tronWeb2 = new TronWeb({
        fullHost: 'http://localhost:16667',
        privateKey: 'f4df789d3210ac881cb900464dd30409453044d2777060a0c391cbdf4c6a4f57'
    })

async function one(){
    var unsignedProposal1Txn = await tronWeb1.transactionBuilder.createProposal([{"key":9,"value":1},{"key":10,"value":1},{"key":11,"value":280},{"key":19,"value":90000000000},{"key":15,"value":1},{"key":18,"value":1},{"key":16,"value":1},{"key":20,"value":1},{"key":26,"value":1},{"key":30,"value":1},{"key":5,"value":16000000},{"key":31,"value":160000000},{"key":32,"value":1},{"key":39,"value":1},{"key":41,"value":1},{"key":3,"value":1000},{"key":47,"value":10000000000},{"key":49,"value":1},{"key":13,"value":80},{"key":7,"value":1000000},{"key":61,"value":1500},{"key":63,"value":1},{"key":65,"value":1}],"41928c9af0651632157ef27a2cf17ca72c575a4d21")
    var signedProposal1Txn = await tronWeb1.trx.sign(unsignedProposal1Txn, "da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0");
    var receipt1 = await tronWeb1.trx.sendRawTransaction(signedProposal1Txn);
    console.log(receipt1)
}

one()

setTimeout(async function() { 
        console.log("SR-1: Vote proposal!") 
        var unsignedVoteP1Txn = await tronWeb1.transactionBuilder.voteProposal(1, true, tronWeb1.defaultAddress.hex)
        var signedVoteP1Txn = await tronWeb1.trx.sign(unsignedVoteP1Txn, "da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0");
        var rtn1 = await tronWeb1.trx.sendRawTransaction(signedVoteP1Txn);
        console.log("receipt1: " + rtn1)

        console.log("SR-2: Vote proposal!") 
        var unsignedVoteP1Txn = await tronWeb2.transactionBuilder.voteProposal(1, true, tronWeb2.defaultAddress.hex)
        var signedVoteP1Txn = await tronWeb2.trx.sign(unsignedVoteP1Txn, "f4df789d3210ac881cb900464dd30409453044d2777060a0c391cbdf4c6a4f57");
        var rtn2 = await tronWeb2.trx.sendRawTransaction(signedVoteP1Txn);
        console.log("receipt2: " + rtn2)

    }, 1000)