function Mobile(name, messToId) {
    this.name = name;
    this.messToId = messToId;
    this.energy = 100;
    this.energyEle = document.getElementById(this.name + "Energy");
    this.status = true;
    this.message = {
        script: '',
        sent: '',
        received: ''
    };
    this.nofication = document.getElementById(this.name + 'Nofication');
    this.checkStatus = function() {
        if (this.energy < 1) return;
        this.energyEle.style.width = --this.energy + '%';
        if (this.status)
            this.nofication.innerHTML = 'The device is turn on';
        else this.nofication.innerHTML = 'The device is turn off';
        document.getElementById(this.name + 'Nofi').style.display = "block";
    };
    this.turnOnOff = function() {
        this.energyEle.style.width = --this.energy + '%';
        this.status = !this.status;
    };
    this.charge = function() {
        if (!this.status) return;
        this.energy = 100;
        this.energyEle.style.width = this.energy + '%';
        this.nofication.innerHTML = 'Charging completed, full of energy';
        document.getElementById(this.name + 'Nofi').style.display = "block";
    };
    this.showMess = function() {
        if (!this.status || this.energy < 1) return;
        this.energyEle.style.width = --this.energy + '%';
        document.getElementById(this.name + 'Message').style.display = "block";
        this.message.received = document.getElementById(this.name + 'Mess').value;
    };
    this.writeScript = function() {
        if (!this.status || this.energy < 1) return;
        iphone.energyEle.style.width = --iphone.energy + '%';
        document.getElementById(this.name + 'Script').style.display = "block";
    }
    this.sendMess = function() {
        if (!this.status || this.energy < 1) return;
        this.energyEle.style.width = --this.energy + '%';
        let mess = document.getElementById(this.name + 'Input').value;
        if (mess === '') return;
        this.message.sent += '_' + mess + '<br>';
        this.message.script += '_' + mess + '<br>';
        document.getElementById(this.messToId).innerHTML = this.message.sent;
    };
    this.showSent = function() {
        if (!this.status || this.energy < 1) return;
        this.energyEle.style.width = --this.energy + '%';
        this.nofication.innerHTML = this.message.sent;
        document.getElementById(this.name + 'Nofi').style.display = "block";
    }
}
let iphone = new Mobile('iphone', 'nokiaMess');
let nokia = new Mobile('nokia', 'iphoneMess');