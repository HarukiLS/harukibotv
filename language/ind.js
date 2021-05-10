const a = '```'

exports.wait = () => {
	return`*「 CALMA POHA 」 TO FAZENDO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVADO 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESATIVADO 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL AINDA NÃO ESTÁ ATIVADO*`
}

exports.noregis = () => {
	return`*「📝NÃO REGISTRADO📝」*\n\n*Ops, parece que você não está registrado. Envie ${prefix}daftar Seu nomr|Idade* \n*Exemplo ${prefix}daftar Haruki|18*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*falhou, tente repetir*`
}

exports.linkga = () => {
	return`*desculpe, link inválido*`
}

exports.groupo = () => {
	return`*「SOMENTE EM GRUPO」*`
}

exports.ownerb = () => {
	return`*「SOMENTE O HARUKI PODE USAR ISSO, QUEM É VC?」*`
}

exports.ownerg = () => {
	return`*「SOMENTE DONO DO GRUPO」*`
}

exports.admin = () => {
	return`*「👮SOMENTE ADM👮」*`
}

exports.badmin = () => {
	return`*「BOT DEVE SER ADM」*`
}

exports.nsfwoff = () => {
	return`*NSFW ESTÁ ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*formato incorreto/texto em branco*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*Se você não entendeu a mensagem.  significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS 」*\n\nVocê se registrou com os dados: \n\n┏━⊱Nome\n┗⊱${namaUser}\n┏━⊱Número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Idade\n┗⊱${umurUser}\n┏━⊱Hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n `
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\digite *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱Seu nível : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Level necessário : ${aha}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱Seu nível : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Level necessário : ${ahb}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱Seu nível : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Level necessário : ${ahc}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱Seu nível : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Level necessário : ${ahd}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱Seu nível : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Level necessário : ${ahe}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱Seu nível : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Level necessário : ${ahf}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, client , process) => { 
	return `
${a}❏ SOBRE O USUÁRIO${a}
 ${a}│ Nome : ${pushname}${a}
 ${a}│ Premium :${a} ${premi}
 ${a}│ Número : wa.me/${sender.split("@")[0]}${a}
 ${a}│ Sua grana : RS${uangku}${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Level : ${getLevelingLevel(sender)}${a}
 ${a}│ Role : ${role}${a}
 ${a}╰ Registros de usuário : ${_registered.length}${a}

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

${a}❏🌐MENU DE CRIAÇÃO🌐{a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}❏🐉MENU DIVERTIDO🐉${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}moddroid${a} *[VIP]*
 ${a}╰•${prefix}happymod${a} *[VIP]*
 
${a}❏💮MUTUAL💮${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}❏💾MENU DE MÍDIA💾${a}
 ${a}│•${prefix}brainly${a} *[VIP]*
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a} *[VIP]*
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}❏🎶MÚSICA🎶${a}
 ${a}╰•${prefix}joox${a} *[VIP]*
 
${a}❏🔞NSFW🔞${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}❏💹LIMITE & GRANA💲${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}❏👥MENU DE GRUPO👥${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}❏💮OUTROS💮${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}╰•${prefix}tupai${a}
 
${a}❏☁ARMAZENAMENTO NA NÚVEM☁${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}❏🔱MENU DO HARUKI🔱${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}
 
${a}❏SOBRE O BOT${a}
 ${a}│ • Nome : ${client.user.name}${a}
 ${a}│ • Browser : ${client.browserDescription[1]}${a}
 ${a}│ • Server : ${client.browserDescription[0]}${a}
 ${a}│ • Versão : ${client.browserDescription[2]}${a}
 ${a}│ • Velocidade : ${process.uptime()}${a}
 ${a}│ • Handphone : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ • Versão do Zap : ${client.user.phone.wa_version}${a}
 
${a}❏AGRADECIMENTOS${a}
 ${a}│${a}
 ${a}│ • ʜᴀʀᴜᴋɪ ʟs${a}
 ${a}│ • ᴅᴀɴᴛᴇ${a}
 ${a}│ • ᴀᴅᴍɪɴɪsᴛʀᴀᴄ̧ᴀ̃ᴏ ᴀɴɪᴍᴇᴢᴀɴᴅᴏ${a}
 ${a}│ • 🀄͜͡命͜͡ᴀɴɪᴍᴇᴢᴀɴᴅᴏ 2.0͜͡✇͜͡🔥${a}
 ${a}│${a}
 ${a}╰ • 🤖ʜᴀʀᴜᴋɪ ʙᴏᴛ🤖${a}
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 PARABÉNS 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE CONTAGEM 」*
Seu limite : ${limitCounts}

NOTA : para chegar ao limite.  pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Grana* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Nome* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Nome* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`DESCULPE ${pushname} VOCÊ NÃO É UM USUÁRIO PREMIUM`
}

