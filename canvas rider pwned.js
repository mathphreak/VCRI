// Canvas Rider RC7 by Pete & Maxime, a canvasrider.com exclusive
// De-minified and working on readability
// Bk relates to BMX, and Bn to MTB
// Scenery lines come after normal lines in trackcodes

function Location(x, y) {
    this.x = x;
    this.y = y;
}
Location.prototype.normalizeToWorld = function () {
    return new Location((this.x - theTrack.cameraCenter.x) * theTrack.zoomFactor + canvas.width / 2, (this.y - theTrack.cameraCenter.y) * theTrack.zoomFactor + canvas.height / 2);
};
Location.prototype.normalizeToCanvas = function () {
    return new Location((this.x - canvas.width / 2) / theTrack.zoomFactor + theTrack.cameraCenter.x, (this.y - canvas.height / 2) / theTrack.zoomFactor + theTrack.cameraCenter.y);
};
Location.prototype.set = function (U) {
    this.x = U.x;
    this.y = U.y;
};
Location.prototype.add = function (U) {
    this.x += U.x;
    this.y += U.y;
};
Location.prototype.cloneAdd = function (U) {
    return new Location(this.x + U.x, this.y + U.y);
};
Location.prototype.cloneSub = function (U) {
    return new Location(this.x - U.x, this.y - U.y);
};
Location.prototype.cloneScale = function (DF) {
    return new Location(this.x * DF, this.y * DF);
};
Location.prototype.dotProduct = function (U) {
    return this.x * U.x + this.y * U.y;
};
Location.prototype.cloneReciprocalScale = function (Cw) {
    return new Location(this.x / Cw, this.y / Cw);
};
Location.prototype.length = function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};
Location.prototype.lengthSquared = function () {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2);
};

function Ah(G, parent) {
    this.place = new Location(G.x, G.y);
    this._ = new Location(G.x, G.y);
    this.g = new Location(0, 0);
    this.parent = parent;
    this.Al = 10;
    this.B6 = 0;
    this.Ad = true;
}
Ah.prototype.drive = function (O) {
    this.place.add(O.cloneScale(-O.dotProduct(this.g) * this.B6));
    this.BR = true;
};
Ah.prototype.AO = function () {
    this.g.add(this.parent.Af);
    this.g = this.g.cloneScale(0.99);
    this.place.add(this.g);
    this.BR = false;
    if (this.Ad) {
        theTrack.Ad(this);
    }
    this.g = this.place.cloneSub(this._);
    this._.set(this.place);
};

function Ba(G, parent) {
    this.place = new Location(G.x, G.y);
    this._ = new Location(G.x, G.y);
    this.g = new Location(0, 0);
    this.parent = parent;
    this.Al = 10;
    this.B6 = 0;
    this.Ad = true;
    this.Af = true;
    this.Bq = 0;
    this.AX = 0;
}
Ba.prototype.drive = function (O) {
    this.place.add(O.cloneScale(this.AX * this.parent.O));
    if (this.down) {
        this.place.add(O.cloneScale(-O.dotProduct(this.g) * 0.3));
    }
    this.Bq = O.dotProduct(this.g) / this.Al;
    this.BR = true;
};
Ba.prototype.AO = function () {
    this.g.add(this.parent.Af);
    this.g = this.g.cloneScale(0.99);
    this.place.add(this.g);
    this.BR = false;
    if (this.Ad) {
        theTrack.Ad(this);
    }
    this.g = this.place.cloneSub(this._);
    this._.set(this.place);
};

function By(G, parent) {
    this.place = new Location(G.x + 5 * (Math.random() - Math.random()), G.y + 5 * (Math.random() - Math.random()));
    this._ = new Location(this.place.x, this.place.y);
    this.g = new Location(11 * (Math.random() - Math.random()), 11 * (Math.random() - Math.random()));
    this.parent = parent;
    this.Al = 2 + Math.random() * 9;
    this.rotation = Math.random() * 6.2;
    this.Bq = Math.random() - Math.random();
    this.B6 = 0.05;
    this.Ad = true;
    this.DG = new Array(1, 0.7, 0.8, 0.9, 0.5, 1, 0.7, 1);
}
By.prototype.draw = function () {
    var M = this.place.normalizeToWorld();
    this.rotation += this.Bq;
    var AS = this.DG[0] * this.Al / 2;
    var L = M.x + AS * Math.cos(this.rotation);
    var N = M.y + AS * Math.sin(this.rotation);
    graphics.beginPath();
    graphics.fillStyle = "black";
    graphics.moveTo(L, N);
    for (var AA = 2; AA < 8; AA++) {
        AS = this.DG[AA - 1] * this.Al / 2;
        L = M.x + AS * Math.cos(this.rotation + 6.283 * AA / 8);
        N = M.y + AS * Math.sin(this.rotation + 6.283 * AA / 8);
        graphics.lineTo(L, N);
    }
    graphics.fill();
};
By.prototype.drive = function (O) {
    this.Bq = O.dotProduct(this.g) / this.Al;
    this.place.add(O.cloneScale(-O.dotProduct(this.g) * this.B6));
    this.rotation += this.Bq;
    var AA = O.length();
    if (AA > 0) {
        var AS = new Location(-O.y / AA, O.x / AA);
        this._.add(AS.cloneScale(AS.dotProduct(this.g) * 0.8));
    }
};
By.prototype.AO = function () {
    this.g.add(this.parent.Af);
    this.g = this.g.cloneScale(0.99);
    this.place.add(this.g);
    this.BR = false;
    if (this.Ad) {
        theTrack.Ad(this);
    }
    this.g = this.place.cloneSub(this._);
    this._.set(this.place);
};

function Ac(A2, A4, parent) {
    this.A2 = A2;
    this.A4 = A4;
    this.parent = parent;
    this.A1 = 40;
    this.AB = 40;
    this.BE = 0.5;
    this.BC = 0.7;
}
Ac.prototype.A3 = function (AH, AK) {
    this.AB = this.AB + (this.A1 - AH - this.AB) / AK;
};
Ac.prototype.rotate = function (Bz) {
    var AJ = this.A4.place.cloneSub(this.A2.place);
    var DU = new Location(-AJ.y / this.AB, AJ.x / this.AB);
    this.A2.place.add(DU.cloneScale(Bz));
    this.A4.place.add(DU.cloneScale(-Bz));
};
Ac.prototype.AO = function () {
    var AJ = this.A4.place.cloneSub(this.A2.place);
    var length = AJ.length();
    if (length < 1) {
        return;
    }
    AJ = AJ.cloneScale(1 / length);
    var DD = AJ.cloneScale((length - this.AB) * this.BC);
    var B6 = this.A4.g.cloneSub(this.A2.g).dotProduct(AJ) * this.BE;
    DD.add(AJ.cloneScale(B6));
    this.A4.g.add(DD.cloneScale(-1));
    this.A2.g.add(DD);
};
Ac.prototype.Aq = function () {
    var CE = new Location;
    CE.set(this.A2.place);
    this.A2.place.set(this.A4.place);
    this.A4.place.set(CE);
    CE.set(this.A2._);
    this.A2._.set(this.A4._);
    this.A4._.set(CE);
    CE.set(this.A2.g);
    this.A2.g.set(this.A4.g);
    this.A4.g.set(CE);
    var Da = this.A2.rotation;
    this.A2.rotation = this.A4.rotation;
    this.A4.rotation = Da;
};

function Bk() { // connected with BMX only - maybe BMX bike itself?
    this.D = new Array;
    this.D.push(new Ah(new Location(bmxConstants[bmxConstants.length - 1][0], bmxConstants[bmxConstants.length - 1][1]), this));
    this.D[0]._ = new Location(bmxConstants[bmxConstants.length - 1][2], bmxConstants[bmxConstants.length - 1][3]);
    this.D[0].g = new Location(bmxConstants[bmxConstants.length - 1][4], bmxConstants[bmxConstants.length - 1][5]);
    this.D.push(new Ba(new Location(bmxConstants[bmxConstants.length - 1][6], bmxConstants[bmxConstants.length - 1][7]), this));
    this.D[1]._ = new Location(bmxConstants[bmxConstants.length - 1][8], bmxConstants[bmxConstants.length - 1][9]);
    this.D[1].g = new Location(bmxConstants[bmxConstants.length - 1][10], bmxConstants[bmxConstants.length - 1][11]);
    this.D[1].AX = bmxConstants[bmxConstants.length - 1][12];
    this.D.push(new Ba(new Location(bmxConstants[bmxConstants.length - 1][13], bmxConstants[bmxConstants.length - 1][14]), this));
    this.D[2]._ = new Location(bmxConstants[bmxConstants.length - 1][15], bmxConstants[bmxConstants.length - 1][16]);
    this.D[2].g = new Location(bmxConstants[bmxConstants.length - 1][17], bmxConstants[bmxConstants.length - 1][18]);
    this.D[2].AX = bmxConstants[bmxConstants.length - 1][19];
    this.h = this.D[0];
    this.h.Al = 14;
    this.h.drive = function () {
        AP.DB();
    };
    this.Q = this.D[1];
    this.Q.Al = 11.7;
    this.AI = this.D[2];
    this.AI.Al = 11.7;
    this.S = new Array;
    this.S.push(new Ac(this.D[0], this.D[1], this));
    this.S.push(new Ac(this.D[1], this.D[2], this));
    this.S.push(new Ac(this.D[2], this.D[0], this));
    this.AM = this.S[0];
    this.AM.A1 = 45;
    this.AM.AB = bmxConstants[bmxConstants.length - 1][20];
    this.AM.BC = 0.35;
    this.AM.BE = 0.3;
    this.AQ = this.S[1];
    this.AQ.A1 = 42;
    this.AQ.AB = bmxConstants[bmxConstants.length - 1][21];
    this.AQ.BC = 0.35;
    this.AQ.BE = 0.3;
    this.AU = this.S[2];
    this.AU.A1 = 45;
    this.AU.AB = bmxConstants[bmxConstants.length - 1][22];
    this.AU.BC = 0.35;
    this.AU.BE = 0.3;
    this.save = false;
    this.A9 = false;
    this.At = 0;
    this.O = bmxConstants[bmxConstants.length - 1][23];
    this.Af = new Location(bmxConstants[bmxConstants.length - 1][24], bmxConstants[bmxConstants.length - 1][25]);
    this.A8 = bmxConstants[bmxConstants.length - 1][26];
    theTrack.targetsReached = bmxConstants[bmxConstants.length - 1][27];
    for (var j = 0; j < theTrack.objects.length; j++) {
        theTrack.objects[j].BM = bmxConstants[bmxConstants.length - 1][28][j];
    }
    this.Bj = 0;
    this.Bm = 0;
    this.Br = 0;
    this.Bo = 0;
    this.z = bmxConstants[bmxConstants.length - 1][29];
    if (this.z) {
        this.Bj = bmxConstants[bmxConstants.length - 1][30];
        this.Bm = bmxConstants[bmxConstants.length - 1][31];
        this.Br = bmxConstants[bmxConstants.length - 1][32];
        this.Bo = bmxConstants[bmxConstants.length - 1][33];
        for (var BD = 0; BD < AZ.length; BD++) {
            for (var BJ in AZ[BD]) {
                if (BJ >= this.z) {
                    delete AZ[BD][BJ];
                }
            }
        }
    } else {
        AZ = new Array(new Array, new Array, new Array, new Array, new Array);
    }
}
Bk.prototype.Aq = function () {
    Ct = Aq = false;
    this.O *= -1;
    this.AQ.Aq();
    var AM = this.S[0].AB;
    this.AM.AB = this.S[2].AB;
    this.AU.AB = AM;
};
Bk.prototype.DC = function () {
    this.save = false;
    if (theTrack.numTargets && theTrack.targetsReached == theTrack.numTargets) {
        if (this.z > 5000 && (!theTrack.z || this.z < theTrack.z) && (AZ[0].length || AZ[1].length) && theTrack.ID != undefined) {
            var Ao = document.cookie.indexOf("; ID=");
            if (Ao == -1 && !document.cookie.indexOf("ID=")) {
                Ao = -2;
            }
            if (Ao != -1) {
                Ao += 5;
                var end = document.cookie.indexOf(";", Ao);
                if (end == -1) {
                    end = document.cookie.length;
                }
                var ID = document.cookie.substring(Ao, end);
                if (confirm("You just set a new track record!\nYour run will be saved for others to enjoy.")) {
                    var AT = "";
                    for (var BJ = 0; BJ < AZ.length; BJ++) {
                        for (var Ay in AZ[BJ]) {
                            if (!isNaN(Ay)) {
                                AT += Ay + " ";
                            }
                        }
                        AT += ",";
                    }
                    var request = new XMLHttpRequest;
                    request.open("POST", "js/save.php", false);
                    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    request.setRequestHeader("User-Agent", "CanvasRider");
                    request.send("trackID=" + theTrack.ID + "&playerID=" + ID + "&vehicle=" + currentBike + "&time=" + this.z + "&controls=" + AT);
                }
            } else {
                alert("You just set a new track record!\nRegister & log in to save your run next time!");
            }
            left = right = up = down = 0;
        }
    } else {
        bmxConstants.push(new Array(this.D[0].place.x, this.D[0].place.y, this.D[0]._.x, this.D[0]._.y, this.D[0].g.x, this.D[0].g.y, this.D[1].place.x, this.D[1].place.y, this.D[1]._.x, this.D[1]._.y, this.D[1].g.x, this.D[1].g.y, this.D[1].AX, this.D[2].place.x, this.D[2].place.y, this.D[2]._.x, this.D[2]._.y, this.D[2].g.x, this.D[2].g.y, this.D[2].AX, this.S[0].AB, this.S[1].AB, this.S[2].AB, this.O, this.Af.x, this.Af.y, this.A8, theTrack.targetsReached, new Array, this.z, this.Bj, this.Bm, this.Br, this.Bo));
        for (var j = 0; j < theTrack.objects.length; j++) {
            bmxConstants[bmxConstants.length - 1][28].push(theTrack.objects[j].BM);
        }
        if (W) {
            K.push(new Array(W.D[0].place.x, W.D[0].place.y, W.D[0]._.x, W.D[0]._.y, W.D[0].g.x, W.D[0].g.y, W.D[1].place.x, W.D[1].place.y, W.D[1]._.x, W.D[1]._.y, W.D[1].g.x, W.D[1].g.y, W.D[1].AX, W.D[2].place.x, W.D[2].place.y, W.D[2]._.x, W.D[2]._.y, W.D[2].g.x, W.D[2].g.y, W.D[2].AX, W.S[0].AB, W.S[1].AB, W.S[2].AB, W.O, W.Af.x, W.Af.y, W.A8, W.left, W.right, W.up, W.down));
        }
    }
};
Bk.prototype.BS = function () {
    if (Aq) {
        this.Aq();
    }
    this.Q.AX += (up - this.D[1].AX) / 10;
    if (up) {
        this.At += this.Q.Bq / 5;
    }
    this.Q.down = this.AI.down = down;
    var As = left - right;
    this.AM.A3(As * 5 * this.O, 5);
    this.AU.A3(-As * 5 * this.O, 5);
    this.AQ.rotate(As / 6);
    if (!As && up) {
        this.AM.A3(-7, 5);
        this.AU.A3(7, 5);
    }
};
Bk.prototype.draw = function () {
    var Q = this.Q.place.normalizeToWorld();
    var AI = this.AI.place.normalizeToWorld();
    graphics.beginPath();
    graphics.strokeStyle = "black";
    graphics.lineWidth = 3.5 * theTrack.zoomFactor;
    graphics.arc(Q.x, Q.y, 10 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.moveTo(AI.x + 10 * theTrack.zoomFactor, AI.y);
    graphics.arc(AI.x, AI.y, 10 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.stroke();
    var length = AI.cloneSub(Q);
    var AC = new Location((AI.y - Q.y) * this.O, (Q.x - AI.x) * this.O);
    var A$ = Q.cloneAdd(length.cloneScale(0.3)).cloneAdd(AC.cloneScale(0.25));
    var Ca = Q.cloneAdd(length.cloneScale(0.84)).cloneAdd(AC.cloneScale(0.42));
    var Cf = Q.cloneAdd(length.cloneScale(0.84)).cloneAdd(AC.cloneScale(0.37));
    var BG = Q.cloneAdd(length.cloneScale(0.4)).cloneAdd(AC.cloneScale(0.05));
    graphics.beginPath();
    graphics.lineWidth = 3 * theTrack.zoomFactor;
    graphics.moveTo(Q.x, Q.y);
    graphics.lineTo(A$.x, A$.y);
    graphics.lineTo(Ca.x, Ca.y);
    graphics.moveTo(Cf.x, Cf.y);
    graphics.lineTo(BG.x, BG.y);
    graphics.lineTo(Q.x, Q.y);
    var CY = new Location(6 * Math.cos(this.At) * theTrack.zoomFactor, 6 * Math.sin(this.At) * theTrack.zoomFactor);
    var BV = BG.cloneAdd(CY);
    var BW = BG.cloneSub(CY);
    graphics.moveTo(BV.x, BV.y);
    graphics.lineTo(BW.x, BW.y);
    var CS = Q.cloneAdd(length.cloneScale(0.17)).cloneAdd(AC.cloneScale(0.38));
    var Cg = Q.cloneAdd(length.cloneScale(0.3)).cloneAdd(AC.cloneScale(0.45));
    graphics.moveTo(CS.x, CS.y);
    graphics.lineTo(Cg.x, Cg.y);
    var Ci = Q.cloneAdd(length.cloneScale(0.25)).cloneAdd(AC.cloneScale(0.4));
    graphics.moveTo(BG.x, BG.y);
    graphics.lineTo(Ci.x, Ci.y);
    var Cj = Q.cloneAdd(length.cloneScale(1)).cloneAdd(AC.cloneScale(0));
    var Cl = Q.cloneAdd(length.cloneScale(0.97)).cloneAdd(AC.cloneScale(0));
    var CO = Q.cloneAdd(length.cloneScale(0.8)).cloneAdd(AC.cloneScale(0.48));
    var CQ = Q.cloneAdd(length.cloneScale(0.86)).cloneAdd(AC.cloneScale(0.5));
    var Ck = Q.cloneAdd(length.cloneScale(0.82)).cloneAdd(AC.cloneScale(0.65));
    var BL = Q.cloneAdd(length.cloneScale(0.78)).cloneAdd(AC.cloneScale(0.67));
    graphics.moveTo(Cj.x, Cj.y);
    graphics.lineTo(Cl.x, Cl.y);
    graphics.lineTo(CO.x, CO.y);
    graphics.lineTo(CQ.x, CQ.y);
    graphics.lineTo(Ck.x, Ck.y);
    graphics.lineTo(BL.x, BL.y);
    graphics.stroke();
    if (this.A9) {
        return;
    }
    var h = this.h.place.normalizeToWorld();
    AC = h.cloneSub(Q.cloneAdd(length.cloneScale(0.5)));
    var An = A$.cloneAdd(length.cloneScale(-0.1)).cloneAdd(AC.cloneScale(0.3));
    var Ar = BV.cloneSub(An);
    var BA = new Location(Ar.y * this.O, -Ar.x * this.O);
    BA = BA.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var Cn = An.cloneAdd(Ar.cloneScale(0.5)).cloneAdd(BA.cloneScale(200 / Ar.lengthSquared()));
    Ar = BW.cloneSub(An);
    BA = new Location(Ar.y * this.O, -Ar.x * this.O);
    BA = BA.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var Co = An.cloneAdd(Ar.cloneScale(0.5)).cloneAdd(BA.cloneScale(200 / Ar.lengthSquared()));
    graphics.beginPath();
    graphics.lineWidth = 6 * theTrack.zoomFactor;
    graphics.strokeStyle = "rgba(0, 0, 0, 0.5)";
    graphics.moveTo(BW.x, BW.y);
    graphics.lineTo(Co.x, Co.y);
    graphics.lineTo(An.x, An.y);
    graphics.stroke();
    graphics.beginPath();
    graphics.strokeStyle = "black";
    graphics.moveTo(BV.x, BV.y);
    graphics.lineTo(Cn.x, Cn.y);
    graphics.lineTo(An.x, An.y);
    graphics.stroke();
    var BY = A$.cloneAdd(length.cloneScale(0.05)).cloneAdd(AC.cloneScale(0.9));
    graphics.beginPath();
    graphics.lineWidth = 8 * theTrack.zoomFactor;
    graphics.moveTo(An.x, An.y);
    graphics.lineTo(BY.x, BY.y);
    graphics.stroke();
    var Bs = A$.cloneAdd(length.cloneScale(0.15)).cloneAdd(AC.cloneScale(1.05));
    var Ch = A$.cloneAdd(length.cloneScale(0.4)).cloneAdd(AC.cloneScale(1.1));
    var Cd = A$.cloneAdd(length.cloneScale(0.05)).cloneAdd(AC.cloneScale(1.05));
    graphics.beginPath();
    graphics.lineWidth = 2 * theTrack.zoomFactor;
    graphics.moveTo(Bs.x + 5 * theTrack.zoomFactor, Bs.y);
    graphics.arc(Bs.x, Bs.y, 5 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.moveTo(Ch.x, Ch.y);
    graphics.lineTo(Cd.x, Cd.y);
    graphics.stroke();
    length = BY.cloneSub(BL);
    AC = new Location(length.y * this.O, -length.x * this.O);
    AC = AC.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var CV = BL.cloneAdd(length.cloneScale(0.4)).cloneAdd(AC.cloneScale(130 / length.lengthSquared()));
    graphics.beginPath();
    graphics.lineWidth = 5 * theTrack.zoomFactor;
    graphics.moveTo(BY.x, BY.y);
    graphics.lineTo(CV.x, CV.y);
    graphics.lineTo(BL.x, BL.y);
    graphics.stroke();
};
Bk.prototype.C1 = function () {
    var $ = new Object;
    var AQ = this.AI.place.cloneSub(this.Q.place);
    var AA = this.h.place.cloneSub(this.AI.place.cloneAdd(this.Q.place).cloneScale(0.5));
    var AS = new Location(AQ.y * this.O, -AQ.x * this.O);
    $.h = this.Q.place.cloneAdd(AQ.cloneScale(0.35)).cloneAdd(AA.cloneScale(1.2));
    $.BO = $.B0 = this.Q.place.cloneAdd(AQ.cloneScale(0.8)).cloneAdd(AS.cloneScale(0.68));
    var N = $.h.cloneSub($.BO);
    N = new Location(N.y * this.O, -N.x * this.O);
    $.Bx = $.Bu = $.h.cloneAdd($.BO).cloneScale(0.5).cloneAdd(N.cloneScale(130 / N.lengthSquared()));
    $.Ab = this.Q.place.cloneAdd(AQ.cloneScale(0.2)).cloneAdd(AS.cloneScale(0.5));
    var R = new Location(6 * Math.cos(this.At), 6 * Math.sin(this.At));
    $.BQ = this.Q.place.cloneAdd(AQ.cloneScale(0.4)).cloneAdd(AS.cloneScale(0.05)).cloneAdd(R);
    N = $.Ab.cloneSub($.BQ);
    N = new Location(-N.y * this.O, N.x * this.O);
    $.Bw = $.Ab.cloneAdd($.BQ).cloneScale(0.5).cloneAdd(N.cloneScale(160 / N.lengthSquared()));
    $.BN = this.Q.place.cloneAdd(AQ.cloneScale(0.4)).cloneAdd(AS.cloneScale(0.05)).cloneSub(R);
    N = $.Ab.cloneSub($.BN);
    N = new Location(-N.y * this.O, N.x * this.O);
    $.Bv = $.Ab.cloneAdd($.BN).cloneScale(0.5).cloneAdd(N.cloneScale(160 / N.lengthSquared()));
    return $;
};
Bk.prototype.DB = function () {
    this.A9 = true;
    this.h.drive = function () {};
    this.Q.AX = 0;
    this.Q.down = false;
    this.AI.down = false;
    this.h.Ad = false;
    AP = new Cp(this, this.C1());
};
Bk.prototype.AO = function () {
    if (this.save) {
        this.DC();
    }
    if (left != this.Bj) {
        AZ[0][this.z] = 1;
        this.Bj = left;
    }
    if (right != this.Bm) {
        AZ[1][this.z] = 1;
        this.Bm = right;
    }
    if (up != this.Br) {
        AZ[2][this.z] = 1;
        this.Br = up;
    }
    if (down != this.Bo) {
        AZ[3][this.z] = 1;
        this.Bo = down;
    }
    if (Aq) {
        AZ[4][this.z] = 1;
    }
    if (!this.A9) {
        this.BS();
    }
    for (var T = this.S.length - 1; T >= 0; T--) {
        this.S[T].AO();
    }
    for (var u = this.D.length - 1; u >= 0; u--) {
        this.D[u].AO();
    }
    if (this.Q.BR && this.AI.BR) {
        this.A8 = false;
    }
    if (!this.A8 && !this.A9) {
        this.BS();
        for (var T = this.S.length - 1; T >= 0; T--) {
            this.S[T].AO();
        }
        for (var u = this.D.length - 1; u >= 0; u--) {
            this.D[u].AO();
        }
    }
};

function Cb(AT) {
    this.D = new Array;
    this.D.push(new Ah(new Location(K[K.length - 1][0], K[K.length - 1][1]), this));
    this.D[0]._ = new Location(K[K.length - 1][2], K[K.length - 1][3]);
    this.D[0].g = new Location(K[K.length - 1][4], K[K.length - 1][5]);
    this.D.push(new Ba(new Location(K[K.length - 1][6], K[K.length - 1][7]), this));
    this.D[1]._ = new Location(K[K.length - 1][8], K[K.length - 1][9]);
    this.D[1].g = new Location(K[K.length - 1][10], K[K.length - 1][11]);
    this.D[1].AX = K[K.length - 1][12];
    this.D.push(new Ba(new Location(K[K.length - 1][13], K[K.length - 1][14]), this));
    this.D[2]._ = new Location(K[K.length - 1][15], K[K.length - 1][16]);
    this.D[2].g = new Location(K[K.length - 1][17], K[K.length - 1][18]);
    this.D[2].AX = K[K.length - 1][19];
    this.h = this.D[0];
    this.h.Al = 14;
    this.h.drive = function () {
        W = false;
    };
    this.Q = this.D[1];
    this.Q.Al = 11.7;
    this.AI = this.D[2];
    this.AI.Al = 11.7;
    this.S = new Array;
    this.S.push(new Ac(this.D[0], this.D[1], this));
    this.S.push(new Ac(this.D[1], this.D[2], this));
    this.S.push(new Ac(this.D[2], this.D[0], this));
    this.AM = this.S[0];
    this.AM.A1 = 45;
    this.AM.AB = K[K.length - 1][20];
    this.AM.BC = 0.35;
    this.AM.BE = 0.3;
    this.AQ = this.S[1];
    this.AQ.A1 = 42;
    this.AQ.AB = K[K.length - 1][21];
    this.AQ.BC = 0.35;
    this.AQ.BE = 0.3;
    this.AU = this.S[2];
    this.AU.A1 = 45;
    this.AU.AB = K[K.length - 1][22];
    this.AU.BC = 0.35;
    this.AU.BE = 0.3;
    this.Cq = true;
    this.At = 0;
    this.O = K[K.length - 1][23];
    this.Af = new Location(K[K.length - 1][24], K[K.length - 1][25]);
    this.A8 = K[K.length - 1][26];
    this.left = K[K.length - 1][27];
    this.right = K[K.length - 1][28];
    this.up = K[K.length - 1][29];
    this.down = K[K.length - 1][30];
    this.AT = AT;
    this.z = this.AT[5];
}
Cb.prototype.Aq = function () {
    this.O *= -1;
    this.AQ.Aq();
    var AM = this.S[0].AB;
    this.AM.AB = this.S[2].AB;
    this.AU.AB = AM;
};
Cb.prototype.BS = function () {
    this.Q.AX += (this.up - this.D[1].AX) / 10;
    if (this.up) {
        this.At += this.Q.Bq / 5;
    }
    this.Q.down = this.AI.down = this.down;
    var As = this.left - this.right;
    this.AM.A3(As * 5 * this.O, 5);
    this.AU.A3(-As * 5 * this.O, 5);
    this.AQ.rotate(As / 6);
    if (!As && this.up) {
        this.AM.A3(-7, 5);
        this.AU.A3(7, 5);
    }
};
Cb.prototype.draw = function () {
    var Q = this.Q.place.normalizeToWorld();
    var AI = this.AI.place.normalizeToWorld();
    graphics.beginPath();
    graphics.strokeStyle = "rgba(0, 0, 0, 0.5)";
    graphics.lineWidth = 3.5 * theTrack.zoomFactor;
    graphics.arc(Q.x, Q.y, 10 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.moveTo(AI.x + 10 * theTrack.zoomFactor, AI.y);
    graphics.arc(AI.x, AI.y, 10 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.stroke();
    var length = AI.cloneSub(Q);
    var AC = new Location((AI.y - Q.y) * this.O, (Q.x - AI.x) * this.O);
    var A$ = Q.cloneAdd(length.cloneScale(0.3)).cloneAdd(AC.cloneScale(0.25));
    var Ca = Q.cloneAdd(length.cloneScale(0.84)).cloneAdd(AC.cloneScale(0.42));
    var Cf = Q.cloneAdd(length.cloneScale(0.84)).cloneAdd(AC.cloneScale(0.37));
    var BG = Q.cloneAdd(length.cloneScale(0.4)).cloneAdd(AC.cloneScale(0.05));
    graphics.beginPath();
    graphics.lineWidth = 3 * theTrack.zoomFactor;
    graphics.moveTo(Q.x, Q.y);
    graphics.lineTo(A$.x, A$.y);
    graphics.lineTo(Ca.x, Ca.y);
    graphics.moveTo(Cf.x, Cf.y);
    graphics.lineTo(BG.x, BG.y);
    graphics.lineTo(Q.x, Q.y);
    var CY = new Location(6 * theTrack.zoomFactor * Math.cos(this.At), 6 * theTrack.zoomFactor * Math.sin(this.At));
    var BV = BG.cloneAdd(CY);
    var BW = BG.cloneSub(CY);
    graphics.moveTo(BV.x, BV.y);
    graphics.lineTo(BW.x, BW.y);
    var CS = Q.cloneAdd(length.cloneScale(0.17)).cloneAdd(AC.cloneScale(0.38));
    var Cg = Q.cloneAdd(length.cloneScale(0.3)).cloneAdd(AC.cloneScale(0.45));
    graphics.moveTo(CS.x, CS.y);
    graphics.lineTo(Cg.x, Cg.y);
    var Ci = Q.cloneAdd(length.cloneScale(0.25)).cloneAdd(AC.cloneScale(0.4));
    graphics.moveTo(BG.x, BG.y);
    graphics.lineTo(Ci.x, Ci.y);
    var Cj = Q.cloneAdd(length.cloneScale(1)).cloneAdd(AC.cloneScale(0));
    var Cl = Q.cloneAdd(length.cloneScale(0.97)).cloneAdd(AC.cloneScale(0));
    var CO = Q.cloneAdd(length.cloneScale(0.8)).cloneAdd(AC.cloneScale(0.48));
    var CQ = Q.cloneAdd(length.cloneScale(0.86)).cloneAdd(AC.cloneScale(0.5));
    var Ck = Q.cloneAdd(length.cloneScale(0.82)).cloneAdd(AC.cloneScale(0.65));
    var BL = Q.cloneAdd(length.cloneScale(0.78)).cloneAdd(AC.cloneScale(0.67));
    graphics.moveTo(Cj.x, Cj.y);
    graphics.lineTo(Cl.x, Cl.y);
    graphics.lineTo(CO.x, CO.y);
    graphics.lineTo(CQ.x, CQ.y);
    graphics.lineTo(Ck.x, Ck.y);
    graphics.lineTo(BL.x, BL.y);
    graphics.stroke();
    var h = this.h.place.normalizeToWorld();
    AC = h.cloneSub(Q.cloneAdd(length.cloneScale(0.5)));
    var An = A$.cloneAdd(length.cloneScale(-0.1)).cloneAdd(AC.cloneScale(0.3));
    var Ar = BV.cloneSub(An);
    var BA = new Location(Ar.y * this.O, -Ar.x * this.O);
    BA = BA.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var Cn = An.cloneAdd(Ar.cloneScale(0.5)).cloneAdd(BA.cloneScale(200 / Ar.lengthSquared()));
    Ar = BW.cloneSub(An);
    BA = new Location(Ar.y * this.O, -Ar.x * this.O);
    BA = BA.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var Co = An.cloneAdd(Ar.cloneScale(0.5)).cloneAdd(BA.cloneScale(200 / Ar.lengthSquared()));
    graphics.beginPath();
    graphics.lineWidth = 6 * theTrack.zoomFactor;
    graphics.strokeStyle = "rgba(0, 0, 0, 0.25)";
    graphics.moveTo(BW.x, BW.y);
    graphics.lineTo(Co.x, Co.y);
    graphics.lineTo(An.x, An.y);
    graphics.stroke();
    graphics.beginPath();
    graphics.strokeStyle = "rgba(0, 0, 0, 0.5)";
    graphics.lineWidth = 6 * theTrack.zoomFactor;
    graphics.moveTo(BV.x, BV.y);
    graphics.lineTo(Cn.x, Cn.y);
    graphics.lineTo(An.x, An.y);
    graphics.stroke();
    var BY = A$.cloneAdd(length.cloneScale(0.05)).cloneAdd(AC.cloneScale(0.9));
    graphics.beginPath();
    graphics.lineWidth = 8 * theTrack.zoomFactor;
    graphics.moveTo(An.x, An.y);
    graphics.lineTo(BY.x, BY.y);
    graphics.stroke();
    var Bs = A$.cloneAdd(length.cloneScale(0.15)).cloneAdd(AC.cloneScale(1.05));
    var Ch = A$.cloneAdd(length.cloneScale(0.4)).cloneAdd(AC.cloneScale(1.1));
    var Cd = A$.cloneAdd(length.cloneScale(0.05)).cloneAdd(AC.cloneScale(1.05));
    graphics.beginPath();
    graphics.lineWidth = 2 * theTrack.zoomFactor;
    graphics.moveTo(Bs.x + 5 * theTrack.zoomFactor, Bs.y);
    graphics.arc(Bs.x, Bs.y, 5 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.moveTo(Ch.x, Ch.y);
    graphics.lineTo(Cd.x, Cd.y);
    graphics.stroke();
    length = BY.cloneSub(BL);
    AC = new Location(length.y * this.O, -length.x * this.O);
    AC = AC.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var CV = BL.cloneAdd(length.cloneScale(0.4)).cloneAdd(AC.cloneScale(130 / length.lengthSquared()));
    graphics.beginPath();
    graphics.lineWidth = 5 * theTrack.zoomFactor;
    graphics.moveTo(BY.x, BY.y);
    graphics.lineTo(CV.x, CV.y);
    graphics.lineTo(BL.x, BL.y);
    graphics.stroke();
    graphics.strokeStyle = "black";
};
Cb.prototype.AO = function () {
    if (AP.z > this.z) {
        this.AO = function () {};
    }
    if (this.AT[0][AP.z]) {
        this.left = this.left ? 0 : 1;
    }
    if (this.AT[1][AP.z]) {
        this.right = this.right ? 0 : 1;
    }
    if (this.AT[2][AP.z]) {
        this.up = this.up ? 0 : 1;
    }
    if (this.AT[3][AP.z]) {
        this.down = this.down ? 0 : 1;
    }
    if (this.AT[4][AP.z]) {
        this.Aq();
    }
    this.BS();
    for (var T = this.S.length - 1; T >= 0; T--) {
        this.S[T].AO();
    }
    for (var u = this.D.length - 1; u >= 0; u--) {
        this.D[u].AO();
    }
    if (this.Q.BR && this.AI.BR) {
        this.A8 = false;
    }
    if (!this.A8) {
        this.BS();
        for (var T = this.S.length - 1; T >= 0; T--) {
            this.S[T].AO();
        }
        for (var u = this.D.length - 1; u >= 0; u--) {
            this.D[u].AO();
        }
    }
};

function Bn() {
    this.D = new Array;
    this.D.push(new Ah(new Location(mtbConstants[mtbConstants.length - 1][0], mtbConstants[mtbConstants.length - 1][1]), this));
    this.D[0]._ = new Location(mtbConstants[mtbConstants.length - 1][2], mtbConstants[mtbConstants.length - 1][3]);
    this.D[0].g = new Location(mtbConstants[mtbConstants.length - 1][4], mtbConstants[mtbConstants.length - 1][5]);
    this.D.push(new Ba(new Location(mtbConstants[mtbConstants.length - 1][6], mtbConstants[mtbConstants.length - 1][7]), this));
    this.D[1]._ = new Location(mtbConstants[mtbConstants.length - 1][8], mtbConstants[mtbConstants.length - 1][9]);
    this.D[1].g = new Location(mtbConstants[mtbConstants.length - 1][10], mtbConstants[mtbConstants.length - 1][11]);
    this.D[1].AX = mtbConstants[mtbConstants.length - 1][12];
    this.D.push(new Ba(new Location(mtbConstants[mtbConstants.length - 1][13], mtbConstants[mtbConstants.length - 1][14]), this));
    this.D[2]._ = new Location(mtbConstants[mtbConstants.length - 1][15], mtbConstants[mtbConstants.length - 1][16]);
    this.D[2].g = new Location(mtbConstants[mtbConstants.length - 1][17], mtbConstants[mtbConstants.length - 1][18]);
    this.D[2].AX = mtbConstants[mtbConstants.length - 1][19];
    this.h = this.D[0];
    this.h.Al = 14;
    this.h.drive = function () {
        AP.DB();
    };
    this.Q = this.D[1];
    this.Q.Al = 14;
    this.AI = this.D[2];
    this.AI.Al = 14;
    this.S = new Array;
    this.S.push(new Ac(this.D[0], this.D[1], this));
    this.S.push(new Ac(this.D[1], this.D[2], this));
    this.S.push(new Ac(this.D[2], this.D[0], this));
    this.AM = this.S[0];
    this.AM.A1 = 47;
    this.AM.AB = mtbConstants[mtbConstants.length - 1][20];
    this.AM.BC = 0.2;
    this.AM.BE = 0.3;
    this.AQ = this.S[1];
    this.AQ.A1 = 45;
    this.AQ.AB = mtbConstants[mtbConstants.length - 1][21];
    this.AQ.BC = 0.2;
    this.AQ.BE = 0.3;
    this.AU = this.S[2];
    this.AU.A1 = 45;
    this.AU.AB = mtbConstants[mtbConstants.length - 1][22];
    this.AU.BC = 0.2;
    this.AU.BE = 0.3;
    this.save = false;
    this.A9 = false;
    this.At = 0;
    this.O = mtbConstants[mtbConstants.length - 1][23];
    this.Af = new Location(mtbConstants[mtbConstants.length - 1][24], mtbConstants[mtbConstants.length - 1][25]);
    this.A8 = mtbConstants[mtbConstants.length - 1][26];
    theTrack.targetsReached = mtbConstants[mtbConstants.length - 1][27];
    for (var j = 0; j < theTrack.objects.length; j++) {
        theTrack.objects[j].BM = mtbConstants[mtbConstants.length - 1][28][j];
    }
    this.Bj = 0;
    this.Bm = 0;
    this.Br = 0;
    this.Bo = 0;
    this.z = mtbConstants[mtbConstants.length - 1][29];
    if (this.z) {
        this.Bj = mtbConstants[mtbConstants.length - 1][30];
        this.Bm = mtbConstants[mtbConstants.length - 1][31];
        this.Br = mtbConstants[mtbConstants.length - 1][32];
        this.Bo = mtbConstants[mtbConstants.length - 1][33];
        for (var BD = 0; BD < AZ.length; BD++) {
            for (var BJ in AZ[BD]) {
                if (BJ >= this.z) {
                    delete AZ[BD][BJ];
                }
            }
        }
    } else {
        AZ = new Array(new Array, new Array, new Array, new Array, new Array);
    }
}
Bn.prototype.Aq = function () {
    Ct = Aq = false;
    this.O *= -1;
    this.AQ.Aq();
    var AM = this.S[0].AB;
    this.AM.AB = this.S[2].AB;
    this.AU.AB = AM;
};
Bn.prototype.DC = function () {
    this.save = false;
    if (theTrack.numTargets && theTrack.targetsReached == theTrack.numTargets) {
        if (this.z > 5000 && (!theTrack.z || this.z < theTrack.z) && (AZ[0].length || AZ[1].length) && theTrack.ID != undefined) {
            var Ao = document.cookie.indexOf("; ID=");
            if (Ao == -1 && !document.cookie.indexOf("ID=")) {
                Ao = -2;
            }
            if (Ao != -1) {
                Ao += 5;
                var end = document.cookie.indexOf(";", Ao);
                if (end == -1) {
                    end = document.cookie.length;
                }
                var ID = document.cookie.substring(Ao, end);
                if (confirm("You just set a new track record!!!\nYour run will be saved for others to enjoy.")) {
                    var AT = "";
                    for (var BJ = 0; BJ < AZ.length; BJ++) {
                        for (var Ay in AZ[BJ]) {
                            if (!isNaN(Ay)) {
                                AT += Ay + " ";
                            }
                        }
                        AT += ",";
                    }
                    var request = new XMLHttpRequest;
                    request.open("POST", "js/save.php", false);
                    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    request.setRequestHeader("User-Agent", "CanvasRider");
                    request.send("trackID=" + theTrack.ID + "&playerID=" + ID + "&vehicle=" + currentBike + "&time=" + this.z + "&controls=" + AT);
                }
            } else {
                alert("You just set a new track record!\nRegister & log in to save your run next time!");
            }
            left = right = up = down = 0;
        }
    } else {
        mtbConstants.push(new Array(this.D[0].place.x, this.D[0].place.y, this.D[0]._.x, this.D[0]._.y, this.D[0].g.x, this.D[0].g.y, this.D[1].place.x, this.D[1].place.y, this.D[1]._.x, this.D[1]._.y, this.D[1].g.x, this.D[1].g.y, this.D[1].AX, this.D[2].place.x, this.D[2].place.y, this.D[2]._.x, this.D[2]._.y, this.D[2].g.x, this.D[2].g.y, this.D[2].AX, this.S[0].AB, this.S[1].AB, this.S[2].AB, this.O, this.Af.x, this.Af.y, this.A8, theTrack.targetsReached, new Array, this.z, this.Bj, this.Bm, this.Br, this.Bo));
        for (var j = 0; j < theTrack.objects.length; j++) {
            mtbConstants[mtbConstants.length - 1][28].push(theTrack.objects[j].BM);
        }
        if (W) {
            K.push(new Array(W.D[0].place.x, W.D[0].place.y, W.D[0]._.x, W.D[0]._.y, W.D[0].g.x, W.D[0].g.y, W.D[1].place.x, W.D[1].place.y, W.D[1]._.x, W.D[1]._.y, W.D[1].g.x, W.D[1].g.y, W.D[1].AX, W.D[2].place.x, W.D[2].place.y, W.D[2]._.x, W.D[2]._.y, W.D[2].g.x, W.D[2].g.y, W.D[2].AX, W.S[0].AB, W.S[1].AB, W.S[2].AB, W.O, W.Af.x, W.Af.y, W.A8, W.left, W.right, W.up, W.down));
        }
    }
};
Bn.prototype.BS = function () {
    if (Aq) {
        this.Aq();
    }
    this.Q.AX += (up - this.D[1].AX) / 10;
    if (up) {
        this.At += this.Q.Bq / 5;
    }
    this.Q.down = this.AI.down = down;
    var As = left - right;
    this.AM.A3(As * 5 * this.O, 5);
    this.AU.A3(-As * 5 * this.O, 5);
    this.AQ.rotate(As / 8);
    if (!As && up) {
        this.AM.A3(-7, 5);
        this.AU.A3(7, 5);
    }
};
Bn.prototype.draw = function () {
    var M = this.Q.place.normalizeToWorld();
    var AA = this.AI.place.normalizeToWorld();
    var AS = this.h.place.normalizeToWorld();
    var L = AA.cloneSub(M);
    var N = new Location((AA.y - M.y) * this.O, (M.x - AA.x) * this.O);
    var R = AS.cloneSub(M.cloneAdd(L.cloneScale(0.5)));
    graphics.beginPath();
    graphics.strokeStyle = "black";
    graphics.lineWidth = 3.5 * theTrack.zoomFactor;
    graphics.arc(M.x, M.y, 12.5 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.moveTo(AA.x + 12.5 * theTrack.zoomFactor, AA.y);
    graphics.arc(AA.x, AA.y, 12.5 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.stroke();
    graphics.beginPath();
    graphics.fillStyle = "grey";
    graphics.moveTo(M.x + 5 * theTrack.zoomFactor, M.y);
    graphics.arc(M.x, M.y, 5 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.moveTo(AA.x + 4 * theTrack.zoomFactor, AA.y);
    graphics.arc(AA.x, AA.y, 4 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.fill();
    graphics.beginPath();
    graphics.lineWidth = 5 * theTrack.zoomFactor;
    graphics.moveTo(M.x, M.y);
    graphics.lineTo(M.x + L.x * 0.4 + N.x * 0.05, M.y + L.y * 0.4 + N.y * 0.05);
    graphics.moveTo(M.x + L.x * 0.72 + R.x * 0.64, M.y + L.y * 0.72 + R.y * 0.64);
    graphics.lineTo(M.x + L.x * 0.46 + R.x * 0.4, M.y + L.y * 0.46 + R.y * 0.4);
    graphics.lineTo(M.x + L.x * 0.4 + N.x * 0.05, M.y + L.y * 0.4 + N.y * 0.05);
    graphics.stroke();
    graphics.beginPath();
    graphics.lineWidth = 2 * theTrack.zoomFactor;
    graphics.moveTo(M.x + L.x * 0.72 + R.x * 0.64, M.y + L.y * 0.72 + R.y * 0.64);
    graphics.lineTo(M.x + L.x * 0.43 + N.x * 0.05, M.y + L.y * 0.43 + N.y * 0.05);
    graphics.moveTo(M.x + L.x * 0.45 + R.x * 0.3, M.y + L.y * 0.45 + R.y * 0.3);
    graphics.lineTo(M.x + L.x * 0.3 + R.x * 0.4, M.y + L.y * 0.3 + R.y * 0.4);
    graphics.lineTo(M.x + L.x * 0.25 + R.x * 0.6, M.y + L.y * 0.25 + R.y * 0.6);
    graphics.moveTo(M.x + L.x * 0.17 + R.x * 0.6, M.y + L.y * 0.17 + R.y * 0.6);
    graphics.lineTo(M.x + L.x * 0.3 + R.x * 0.6, M.y + L.y * 0.3 + R.y * 0.6);
    var Ap = new Location(6 * Math.cos(this.At) * theTrack.zoomFactor, 6 * Math.sin(this.At) * theTrack.zoomFactor);
    graphics.moveTo(M.x + L.x * 0.43 + N.x * 0.05 + Ap.x, M.y + L.y * 0.43 + N.y * 0.05 + Ap.y);
    graphics.lineTo(M.x + L.x * 0.43 + N.x * 0.05 - Ap.x, M.y + L.y * 0.43 + N.y * 0.05 - Ap.y);
    graphics.stroke();
    graphics.beginPath();
    graphics.lineWidth = theTrack.zoomFactor;
    graphics.moveTo(M.x + L.x * 0.46 + R.x * 0.4, M.y + L.y * 0.46 + R.y * 0.4);
    graphics.lineTo(M.x + L.x * 0.28 + R.x * 0.5, M.y + L.y * 0.28 + R.y * 0.5);
    graphics.stroke();
    graphics.beginPath();
    graphics.lineWidth = 3 * theTrack.zoomFactor;
    graphics.moveTo(AA.x, AA.y);
    graphics.lineTo(M.x + L.x * 0.71 + R.x * 0.73, M.y + L.y * 0.71 + R.y * 0.73);
    graphics.lineTo(M.x + L.x * 0.73 + R.x * 0.77, M.y + L.y * 0.73 + R.y * 0.77);
    graphics.lineTo(M.x + L.x * 0.7 + R.x * 0.8, M.y + L.y * 0.7 + R.y * 0.8);
    graphics.stroke();
    if (this.A9) {
        return;
    }
    N = AS.cloneSub(M.cloneAdd(L.cloneScale(0.5)));
    var Aw = M.cloneAdd(L.cloneScale(0.3)).cloneAdd(N.cloneScale(0.25));
    var B2 = M.cloneAdd(L.cloneScale(0.4)).cloneAdd(N.cloneScale(0.05));
    var Bp = B2.cloneAdd(Ap);
    var A6 = B2.cloneSub(Ap);
    var A7 = M.cloneAdd(L.cloneScale(0.67)).cloneAdd(N.cloneScale(0.8));
    var AY = Aw.cloneAdd(L.cloneScale(-0.05)).cloneAdd(N.cloneScale(0.42));
    var Aa = Bp.cloneSub(AY);
    R = new Location(Aa.y * this.O, -Aa.x * this.O);
    R = R.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var CZ = AY.cloneAdd(Aa.cloneScale(0.5)).cloneAdd(R.cloneScale(200 / Aa.lengthSquared()));
    Aa = A6.cloneSub(AY);
    R = new Location(Aa.y * this.O, -Aa.x * this.O);
    R = R.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var CX = AY.cloneAdd(Aa.cloneScale(0.5)).cloneAdd(R.cloneScale(200 / Aa.lengthSquared()));
    graphics.beginPath();
    graphics.lineWidth = 6 * theTrack.zoomFactor;
    graphics.strokeStyle = "rgba(0, 0, 0, 0.5)";
    graphics.moveTo(A6.x, A6.y);
    graphics.lineTo(CX.x, CX.y);
    graphics.lineTo(AY.x, AY.y);
    graphics.stroke();
    graphics.beginPath();
    graphics.strokeStyle = "black";
    graphics.moveTo(Bp.x, Bp.y);
    graphics.lineTo(CZ.x, CZ.y);
    graphics.lineTo(AY.x, AY.y);
    graphics.stroke();
    var BX = Aw.cloneAdd(L.cloneScale(0.1)).cloneAdd(N.cloneScale(0.95));
    graphics.beginPath();
    graphics.lineWidth = 8 * theTrack.zoomFactor;
    graphics.moveTo(AY.x, AY.y);
    graphics.lineTo(BX.x, BX.y);
    graphics.stroke();
    var Bl = Aw.cloneAdd(L.cloneScale(0.2)).cloneAdd(N.cloneScale(1.09));
    var CT = Aw.cloneAdd(L.cloneScale(0.4)).cloneAdd(N.cloneScale(1.15));
    var Ce = Aw.cloneAdd(L.cloneScale(0.1)).cloneAdd(N.cloneScale(1.05));
    graphics.beginPath();
    graphics.lineWidth = 2 * theTrack.zoomFactor;
    graphics.moveTo(Bl.x + 5 * theTrack.zoomFactor, Bl.y);
    graphics.arc(Bl.x, Bl.y, 5 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.moveTo(CT.x, CT.y);
    graphics.lineTo(Ce.x, Ce.y);
    graphics.stroke();
    L = BX.cloneSub(A7);
    N = new Location(L.y * this.O, -L.x * this.O);
    N = N.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var CU = A7.cloneAdd(L.cloneScale(0.3)).cloneAdd(N.cloneScale(80 / L.lengthSquared()));
    graphics.beginPath();
    graphics.lineWidth = 5 * theTrack.zoomFactor;
    graphics.moveTo(BX.x, BX.y);
    graphics.lineTo(CU.x, CU.y);
    graphics.lineTo(A7.x, A7.y);
    graphics.stroke();
};
Bn.prototype.C1 = function () {
    var $ = new Object;
    var M = this.AI.place.cloneSub(this.Q.place);
    var AA = this.h.place.cloneSub(this.AI.place.cloneAdd(this.Q.place).cloneScale(0.5));
    var AS = new Location(M.y * this.O, -M.x * this.O);
    $.h = this.Q.place.cloneAdd(M.cloneScale(0.35)).cloneAdd(AA.cloneScale(1.2));
    $.BO = $.B0 = this.Q.place.cloneAdd(M.cloneScale(0.8)).cloneAdd(AS.cloneScale(0.68));
    var N = $.h.cloneSub($.BO);
    N = new Location(N.y * this.O, -N.x * this.O);
    $.Bx = $.Bu = $.h.cloneAdd($.BO).cloneScale(0.5).cloneAdd(N.cloneScale(130 / N.lengthSquared()));
    $.Ab = this.Q.place.cloneAdd(M.cloneScale(0.2)).cloneAdd(AS.cloneScale(0.5));
    var R = new Location(6 * Math.cos(this.At), 6 * Math.sin(this.At));
    $.BQ = this.Q.place.cloneAdd(M.cloneScale(0.4)).cloneAdd(AS.cloneScale(0.05)).cloneAdd(R);
    N = $.Ab.cloneSub($.BQ);
    N = new Location(-N.y * this.O, N.x * this.O);
    $.Bw = $.Ab.cloneAdd($.BQ).cloneScale(0.5).cloneAdd(N.cloneScale(160 / N.lengthSquared()));
    $.BN = this.Q.place.cloneAdd(M.cloneScale(0.4)).cloneAdd(AS.cloneScale(0.05)).cloneSub(R);
    N = $.Ab.cloneSub($.BN);
    N = new Location(-N.y * this.O, N.x * this.O);
    $.Bv = $.Ab.cloneAdd($.BN).cloneScale(0.5).cloneAdd(N.cloneScale(160 / N.lengthSquared()));
    return $;
};
Bn.prototype.DB = function () {
    this.A9 = true;
    this.h.drive = function () {};
    this.Q.AX = 0;
    this.Q.down = false;
    this.AI.down = false;
    this.h.Ad = false;
    AP = new Cp(this, this.C1());
};
Bn.prototype.AO = function () {
    if (this.save) {
        this.DC();
    }
    if (left != this.Bj) {
        AZ[0][this.z] = 1;
        this.Bj = left;
    }
    if (right != this.Bm) {
        AZ[1][this.z] = 1;
        this.Bm = right;
    }
    if (up != this.Br) {
        AZ[2][this.z] = 1;
        this.Br = up;
    }
    if (down != this.Bo) {
        AZ[3][this.z] = 1;
        this.Bo = down;
    }
    if (Aq) {
        AZ[4][this.z] = 1;
    }
    if (!this.A9) {
        this.BS();
    }
    for (var T = this.S.length - 1; T >= 0; T--) {
        this.S[T].AO();
    }
    for (var u = this.D.length - 1; u >= 0; u--) {
        this.D[u].AO();
    }
    if (this.Q.BR && this.AI.BR) {
        this.A8 = false;
    }
    if (!this.A8 && !this.A9) {
        this.BS();
        for (var T = this.S.length - 1; T >= 0; T--) {
            this.S[T].AO();
        }
        for (var u = this.D.length - 1; u >= 0; u--) {
            this.D[u].AO();
        }
    }
};

function CW(AT) {
    this.D = new Array;
    this.D.push(new Ah(new Location(K[K.length - 1][0], K[K.length - 1][1]), this));
    this.D[0]._ = new Location(K[K.length - 1][2], K[K.length - 1][3]);
    this.D[0].g = new Location(K[K.length - 1][4], K[K.length - 1][5]);
    this.D.push(new Ba(new Location(K[K.length - 1][6], K[K.length - 1][7]), this));
    this.D[1]._ = new Location(K[K.length - 1][8], K[K.length - 1][9]);
    this.D[1].g = new Location(K[K.length - 1][10], K[K.length - 1][11]);
    this.D[1].AX = K[K.length - 1][12];
    this.D.push(new Ba(new Location(K[K.length - 1][13], K[K.length - 1][14]), this));
    this.D[2]._ = new Location(K[K.length - 1][15], K[K.length - 1][16]);
    this.D[2].g = new Location(K[K.length - 1][17], K[K.length - 1][18]);
    this.D[2].AX = K[K.length - 1][19];
    this.h = this.D[0];
    this.h.Al = 14;
    this.h.drive = function () {
        W = false;
    };
    this.Q = this.D[1];
    this.Q.Al = 14;
    this.AI = this.D[2];
    this.AI.Al = 14;
    this.S = new Array;
    this.S.push(new Ac(this.D[0], this.D[1], this));
    this.S.push(new Ac(this.D[1], this.D[2], this));
    this.S.push(new Ac(this.D[2], this.D[0], this));
    this.AM = this.S[0];
    this.AM.A1 = 47;
    this.AM.AB = K[K.length - 1][20];
    this.AM.BC = 0.2;
    this.AM.BE = 0.3;
    this.AQ = this.S[1];
    this.AQ.A1 = 45;
    this.AQ.AB = K[K.length - 1][21];
    this.AQ.BC = 0.2;
    this.AQ.BE = 0.3;
    this.AU = this.S[2];
    this.AU.A1 = 45;
    this.AU.AB = K[K.length - 1][22];
    this.AU.BC = 0.2;
    this.AU.BE = 0.3;
    this.Cq = true;
    this.At = 0;
    this.O = K[K.length - 1][23];
    this.Af = new Location(K[K.length - 1][24], K[K.length - 1][25]);
    this.A8 = K[K.length - 1][26];
    this.left = K[K.length - 1][27];
    this.right = K[K.length - 1][28];
    this.up = K[K.length - 1][29];
    this.down = K[K.length - 1][30];
    this.AT = AT;
    this.z = this.AT[5];
}
CW.prototype.Aq = function () {
    this.O *= -1;
    this.AQ.Aq();
    var AM = this.S[0].AB;
    this.AM.AB = this.S[2].AB;
    this.AU.AB = AM;
};
CW.prototype.BS = function () {
    this.Q.AX += (this.up - this.D[1].AX) / 10;
    if (this.up) {
        this.At += this.Q.Bq / 5;
    }
    this.Q.down = this.AI.down = this.down;
    var As = this.left - this.right;
    this.AM.A3(As * 5 * this.O, 5);
    this.AU.A3(-As * 5 * this.O, 5);
    this.AQ.rotate(As / 8);
    if (!As && this.up) {
        this.AM.A3(-7, 5);
        this.AU.A3(7, 5);
    }
};
CW.prototype.draw = function () {
    var M = this.Q.place.normalizeToWorld();
    var AA = this.AI.place.normalizeToWorld();
    var AS = this.h.place.normalizeToWorld();
    var L = AA.cloneSub(M);
    var N = new Location((AA.y - M.y) * this.O, (M.x - AA.x) * this.O);
    var R = AS.cloneSub(M.cloneAdd(L.cloneScale(0.5)));
    graphics.beginPath();
    graphics.strokeStyle = "rgba(0, 0, 0, 0.5)";
    graphics.lineWidth = 3.5 * theTrack.zoomFactor;
    graphics.arc(M.x, M.y, 12.5 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.moveTo(AA.x + 12.5 * theTrack.zoomFactor, AA.y);
    graphics.arc(AA.x, AA.y, 12.5 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.stroke();
    graphics.beginPath();
    graphics.fillStyle = "rgba(0, 0, 0, 0.25)";
    graphics.moveTo(M.x + 5 * theTrack.zoomFactor, M.y);
    graphics.arc(M.x, M.y, 5 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.moveTo(AA.x + 4 * theTrack.zoomFactor, AA.y);
    graphics.arc(AA.x, AA.y, 4 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.fill();
    graphics.beginPath();
    graphics.lineWidth = 5 * theTrack.zoomFactor;
    graphics.moveTo(M.x, M.y);
    graphics.lineTo(M.x + L.x * 0.4 + N.x * 0.05, M.y + L.y * 0.4 + N.y * 0.05);
    graphics.moveTo(M.x + L.x * 0.72 + R.x * 0.64, M.y + L.y * 0.72 + R.y * 0.64);
    graphics.lineTo(M.x + L.x * 0.46 + R.x * 0.4, M.y + L.y * 0.46 + R.y * 0.4);
    graphics.lineTo(M.x + L.x * 0.4 + N.x * 0.05, M.y + L.y * 0.4 + N.y * 0.05);
    graphics.stroke();
    graphics.beginPath();
    graphics.lineWidth = 2 * theTrack.zoomFactor;
    graphics.moveTo(M.x + L.x * 0.72 + R.x * 0.64, M.y + L.y * 0.72 + R.y * 0.64);
    graphics.lineTo(M.x + L.x * 0.43 + N.x * 0.05, M.y + L.y * 0.43 + N.y * 0.05);
    graphics.moveTo(M.x + L.x * 0.45 + R.x * 0.3, M.y + L.y * 0.45 + R.y * 0.3);
    graphics.lineTo(M.x + L.x * 0.3 + R.x * 0.4, M.y + L.y * 0.3 + R.y * 0.4);
    graphics.lineTo(M.x + L.x * 0.25 + R.x * 0.6, M.y + L.y * 0.25 + R.y * 0.6);
    graphics.moveTo(M.x + L.x * 0.17 + R.x * 0.6, M.y + L.y * 0.17 + R.y * 0.6);
    graphics.lineTo(M.x + L.x * 0.3 + R.x * 0.6, M.y + L.y * 0.3 + R.y * 0.6);
    var Ap = new Location(6 * Math.cos(this.At) * theTrack.zoomFactor, 6 * Math.sin(this.At) * theTrack.zoomFactor);
    graphics.moveTo(M.x + L.x * 0.43 + N.x * 0.05 + Ap.x, M.y + L.y * 0.43 + N.y * 0.05 + Ap.y);
    graphics.lineTo(M.x + L.x * 0.43 + N.x * 0.05 - Ap.x, M.y + L.y * 0.43 + N.y * 0.05 - Ap.y);
    graphics.stroke();
    graphics.beginPath();
    graphics.lineWidth = theTrack.zoomFactor;
    graphics.moveTo(M.x + L.x * 0.46 + R.x * 0.4, M.y + L.y * 0.46 + R.y * 0.4);
    graphics.lineTo(M.x + L.x * 0.28 + R.x * 0.5, M.y + L.y * 0.28 + R.y * 0.5);
    graphics.stroke();
    graphics.beginPath();
    graphics.lineWidth = 3 * theTrack.zoomFactor;
    graphics.moveTo(AA.x, AA.y);
    graphics.lineTo(M.x + L.x * 0.71 + R.x * 0.73, M.y + L.y * 0.71 + R.y * 0.73);
    graphics.lineTo(M.x + L.x * 0.73 + R.x * 0.77, M.y + L.y * 0.73 + R.y * 0.77);
    graphics.lineTo(M.x + L.x * 0.7 + R.x * 0.8, M.y + L.y * 0.7 + R.y * 0.8);
    graphics.stroke();
    N = AS.cloneSub(M.cloneAdd(L.cloneScale(0.5)));
    var Aw = M.cloneAdd(L.cloneScale(0.3)).cloneAdd(N.cloneScale(0.25));
    var B2 = M.cloneAdd(L.cloneScale(0.4)).cloneAdd(N.cloneScale(0.05));
    var Bp = B2.cloneAdd(Ap);
    var A6 = B2.cloneSub(Ap);
    var A7 = M.cloneAdd(L.cloneScale(0.67)).cloneAdd(N.cloneScale(0.8));
    var AY = Aw.cloneAdd(L.cloneScale(-0.05)).cloneAdd(N.cloneScale(0.42));
    var Aa = Bp.cloneSub(AY);
    R = new Location(Aa.y * this.O, -Aa.x * this.O);
    R = R.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var CZ = AY.cloneAdd(Aa.cloneScale(0.5)).cloneAdd(R.cloneScale(200 / Aa.lengthSquared()));
    Aa = A6.cloneSub(AY);
    R = new Location(Aa.y * this.O, -Aa.x * this.O);
    R = R.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var CX = AY.cloneAdd(Aa.cloneScale(0.5)).cloneAdd(R.cloneScale(200 / Aa.lengthSquared()));
    graphics.beginPath();
    graphics.lineWidth = 6 * theTrack.zoomFactor;
    graphics.strokeStyle = "rgba(0, 0, 0, 0.25)";
    graphics.moveTo(A6.x, A6.y);
    graphics.lineTo(CX.x, CX.y);
    graphics.lineTo(AY.x, AY.y);
    graphics.stroke();
    graphics.beginPath();
    graphics.strokeStyle = "rgba(0, 0, 0, 0.5)";
    graphics.moveTo(Bp.x, Bp.y);
    graphics.lineTo(CZ.x, CZ.y);
    graphics.lineTo(AY.x, AY.y);
    graphics.stroke();
    var BX = Aw.cloneAdd(L.cloneScale(0.1)).cloneAdd(N.cloneScale(0.95));
    graphics.beginPath();
    graphics.lineWidth = 8 * theTrack.zoomFactor;
    graphics.moveTo(AY.x, AY.y);
    graphics.lineTo(BX.x, BX.y);
    graphics.stroke();
    var Bl = Aw.cloneAdd(L.cloneScale(0.2)).cloneAdd(N.cloneScale(1.09));
    var CT = Aw.cloneAdd(L.cloneScale(0.4)).cloneAdd(N.cloneScale(1.15));
    var Ce = Aw.cloneAdd(L.cloneScale(0.1)).cloneAdd(N.cloneScale(1.05));
    graphics.beginPath();
    graphics.lineWidth = 2 * theTrack.zoomFactor;
    graphics.moveTo(Bl.x + 5 * theTrack.zoomFactor, Bl.y);
    graphics.arc(Bl.x, Bl.y, 5 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.moveTo(CT.x, CT.y);
    graphics.lineTo(Ce.x, Ce.y);
    graphics.stroke();
    L = BX.cloneSub(A7);
    N = new Location(L.y * this.O, -L.x * this.O);
    N = N.cloneScale(theTrack.zoomFactor * theTrack.zoomFactor);
    var CU = A7.cloneAdd(L.cloneScale(0.3)).cloneAdd(N.cloneScale(80 / L.lengthSquared()));
    graphics.beginPath();
    graphics.lineWidth = 5 * theTrack.zoomFactor;
    graphics.moveTo(BX.x, BX.y);
    graphics.lineTo(CU.x, CU.y);
    graphics.lineTo(A7.x, A7.y);
    graphics.stroke();
    graphics.strokeStyle = "black";
};
CW.prototype.AO = function () {
    if (AP.z > this.z) {
        this.AO = function () {};
    }
    if (this.AT[0][AP.z]) {
        this.left = this.left ? 0 : 1;
    }
    if (this.AT[1][AP.z]) {
        this.right = this.right ? 0 : 1;
    }
    if (this.AT[2][AP.z]) {
        this.up = this.up ? 0 : 1;
    }
    if (this.AT[3][AP.z]) {
        this.down = this.down ? 0 : 1;
    }
    if (this.AT[4][AP.z]) {
        this.Aq();
    }
    this.BS();
    for (var T = this.S.length - 1; T >= 0; T--) {
        this.S[T].AO();
    }
    for (var u = this.D.length - 1; u >= 0; u--) {
        this.D[u].AO();
    }
    if (this.Q.BR && this.AI.BR) {
        this.A8 = false;
    }
    if (!this.A8) {
        this.BS();
        for (var T = this.S.length - 1; T >= 0; T--) {
            this.S[T].AO();
        }
        for (var u = this.D.length - 1; u >= 0; u--) {
            this.D[u].AO();
        }
    }
};

function $(Cx) {
    this.A9 = true;
    this.D = new Array;
    this.S = new Array;
    this.O = 1;
    var U = new Location(0, 0);
    this.D.push(new Ah(U, this));
    this.h = this.D[0];
    this.D.push(new Ah(U, this));
    this.Ab = this.D[1];
    this.S.push(new Ac(this.h, this.Ab, this));
    this.D.push(new Ah(U, this));
    this.Bx = this.D[2];
    this.D.push(new Ah(U, this));
    this.Bu = this.D[3];
    this.D.push(new Ah(U, this));
    this.BO = this.D[4];
    this.D.push(new Ah(U, this));
    this.B0 = this.D[5];
    this.S.push(new Ac(this.h, this.Bx, this));
    this.S.push(new Ac(this.Bx, this.BO, this));
    this.S.push(new Ac(this.h, this.Bu, this));
    this.S.push(new Ac(this.Bu, this.B0, this));
    this.D.push(new Ah(U, this));
    this.Bw = this.D[6];
    this.D.push(new Ah(U, this));
    this.Bv = this.D[7];
    this.D.push(new Ah(U, this));
    this.BQ = this.D[8];
    this.D.push(new Ah(U, this));
    this.BN = this.D[9];
    this.S.push(new Ac(this.Ab, this.Bw, this));
    this.S.push(new Ac(this.Bw, this.BQ, this));
    this.S.push(new Ac(this.Ab, this.Bv, this));
    this.S.push(new Ac(this.Bv, this.BN, this));
    for (var u = 0; u < this.D.length; u++) {
        this.D[u].Al = 3;
        this.D[u].B6 = 0.05;
    }
    this.h.Al = this.Ab.Al = 8;
    for (var T = 0; T < this.S.length; T++) {
        this.S[T].BC = 0.4;
        this.S[T].BE = 0.7;
    }
    for (var U in Cx) {
        this[U].place.set(Cx[U]);
    }
}
$.prototype.draw = function () {
    var h = this.h.place.normalizeToWorld();
    var Bx = this.Bx.place.normalizeToWorld();
    var BO = this.BO.place.normalizeToWorld();
    var Bu = this.Bu.place.normalizeToWorld();
    var B0 = this.B0.place.normalizeToWorld();
    var Bw = this.Bw.place.normalizeToWorld();
    var BQ = this.BQ.place.normalizeToWorld();
    var Bv = this.Bv.place.normalizeToWorld();
    var BN = this.BN.place.normalizeToWorld();
    var Ab = this.Ab.place.normalizeToWorld();
    graphics.beginPath();
    graphics.lineWidth = 5 * theTrack.zoomFactor;
    graphics.strokeStyle = "rgba(0,0,0,0.5)";
    graphics.moveTo(h.x, h.y);
    graphics.lineTo(Bu.x, Bu.y);
    graphics.lineTo(B0.x, B0.y);
    graphics.moveTo(Ab.x, Ab.y);
    graphics.lineTo(Bv.x, Bv.y);
    graphics.lineTo(BN.x, BN.y);
    graphics.stroke();
    graphics.beginPath();
    graphics.strokeStyle = "black";
    graphics.moveTo(h.x, h.y);
    graphics.lineTo(Bx.x, Bx.y);
    graphics.lineTo(BO.x, BO.y);
    graphics.moveTo(Ab.x, Ab.y);
    graphics.lineTo(Bw.x, Bw.y);
    graphics.lineTo(BQ.x, BQ.y);
    graphics.stroke();
    graphics.beginPath();
    graphics.lineWidth = 8 * theTrack.zoomFactor;
    graphics.moveTo(Ab.x, Ab.y);
    graphics.lineTo(h.x, h.y);
    graphics.stroke();
    h.add(h.cloneSub(Ab).cloneScale(0.25));
    graphics.beginPath();
    graphics.lineWidth = 2 * theTrack.zoomFactor;
    graphics.moveTo(h.x + 5 * theTrack.zoomFactor, h.y);
    graphics.arc(h.x, h.y, 5 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.stroke();
    var A6 = h.cloneSub(Ab);
    var A7 = new Location(A6.y, -A6.x);
    var AY = new Location(0, 0);
    var Aa = new Location(0, 0);
    if (this.O == 1) {
        AY = h.cloneAdd(A7.cloneScale(0.15)).cloneAdd(A6.cloneScale(-0.05));
        Aa = h.cloneAdd(A7.cloneScale(-0.35)).cloneAdd(A6.cloneScale(0.15));
    } else {
        AY = h.cloneAdd(A7.cloneScale(-0.15)).cloneAdd(A6.cloneScale(0.15));
        Aa = h.cloneAdd(A7.cloneScale(0.35)).cloneAdd(A6.cloneScale(-0.05));
    }
    AY = h.cloneAdd(A7.cloneScale(0.15 * this.O)).cloneAdd(A6.cloneScale(-0.05));
    Aa = h.cloneAdd(A7.cloneScale(-0.35 * this.O)).cloneAdd(A6.cloneScale(0.15));
    graphics.beginPath();
    graphics.moveTo(AY.x, AY.y);
    graphics.lineTo(Aa.x, Aa.y);
    graphics.stroke();
};
$.prototype.AO = function () {
    for (var T = this.S.length - 1; T >= 0; T--) {
        this.S[T].AO();
    }
    for (var u = this.D.length - 1; u >= 0; u--) {
        this.D[u].AO();
    }
};
$.prototype.DY = function (C6, C3) {
    C6 = C6.cloneScale(0.7);
    C3 = C3.cloneScale(0.7);
    for (var T = 0; T < this.S.length; T++) {
        this.S[T].A1 = this.S[T].AB = this.S[T].A4.place.cloneSub(this.S[T].A2.place).length();
        if (this.S[T].AB > 20) {
            this.S[T].A1 = this.S[T].AB = 20;
        }
    }
    for (var T = 1; T < 5; T++) {
        this.S[T].A1 = 13;
        this.S[T].AB = 13;
    }
    var L = new Array(this.h, this.Bx, this.Bu, this.BO, this.B0);
    var N = new Array(this.Ab, this.Bw, this.Bv, this.BQ, this.BN);
    for (var Az = 0; Az < L.length; Az++) {
        L[Az]._ = L[Az].place.cloneSub(C6);
    }
    for (var Az = 0; Az < N.length; Az++) {
        N[Az]._ = N[Az].place.cloneSub(C3);
    }
    for (var u = this.D.length - 1; u >= 0; u--) {
        this.D[u].g.set(this.D[u].place.cloneSub(this.D[u]._));
        this.D[u].g.x += Math.random() - Math.random();
        this.D[u].g.y += Math.random() - Math.random();
    }
};

function Cp(B7, Cx) {
    this.A9 = true;
    this.B$ = new $(Cx);
    this.B$.DY(B7.h.g, B7.Q.g);
    this.B$.O = B7.O;
    this.B$.Af = B7.Af;
    this.Af = B7.Af;
    this.z = B7.z;
    this.h = this.B$.h;
    this.DL = B7;
}
Cp.prototype.draw = function () {
    this.DL.draw();
    this.B$.draw();
};
Cp.prototype.AO = function () {
    this.DL.AO();
    this.B$.AO();
};

function C5(G, Af, z) {
    this.A9 = true;
    this.Ay = 30 + 20 * Math.random();
    this.Df = 0;
    this.D = new Array;
    this.D.push(new By(G, this));
    this.D.push(new By(G, this));
    this.D.push(new By(G, this));
    this.D.push(new By(G, this));
    this.D.push(new By(G, this));
    this.place = new Location(G.x, G.y);
    this.Af = Af;
    this.z = z;
    this.h = new Ah(G, this);
    this.h.g.x = 20;
    this.A9 = true;
}
C5.prototype.draw = function () {
    if (this.Ay > 0) {
        this.Ay -= 10;
        var M = this.place.normalizeToWorld();
        var AS = Math.random() * 6.2;
        var L = this.Ay / 2;
        var N = M.x + L * Math.cos(AS);
        var R = M.y + L * Math.sin(AS);
        graphics.beginPath();
        graphics.fillStyle = "yellow";
        graphics.moveTo(N, R);
        for (AA = 1; AA < 16; AA++) {
            L = (this.Ay + 30 * Math.random()) / 2;
            N = M.x + L * Math.cos(AS + 6.283 * AA / 16);
            R = M.y + L * Math.sin(AS + 6.283 * AA / 16);
            graphics.lineTo(N, R);
        }
        graphics.fill();
    }
    for (var u = 0; u < this.D.length; u++) {
        this.D[u].draw();
    }
};
C5.prototype.AO = function () {
    for (var u = this.D.length - 1; u >= 0; u--) {
        this.D[u].AO();
    }
};

function target(x, y) {
    this.place = new Location(x, y);
    this.reached = false;
}
target.prototype.draw = function () {
    graphics.beginPath();
    graphics.fillStyle = this.reached ? "#FFFFAA" : "#FFFF00";
    graphics.lineWidth = 2 * theTrack.zoomFactor;
    graphics.moveTo(this.place.normalizeToWorld().x + 7 * theTrack.zoomFactor, this.place.normalizeToWorld().y);
    graphics.arc(this.place.normalizeToWorld().x, this.place.normalizeToWorld().y, 7 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.fill();
    graphics.stroke();
};
target.prototype.Ad = function (AV) {
    if (!this.reached && AV.place.cloneSub(this.place).lengthSquared() < 500 && !AV.parent.Cq) {
        this.reached = true;
        theTrack.targetsReached++;
        if (theTrack.numTargets && theTrack.targetsReached == theTrack.numTargets) {
            AV.parent.save = true;
        }
    }
};
target.prototype.checkDelete = function (eraserLocation) {
    if (eraserLocation.cloneSub(this.place).length() < eraserSize + 7) {
        theTrack.numTargets--;
        this.remove = true;
        theTrack.remove(this.place);
    }
};
target.prototype.asString = function () {
    return "T " + this.place.x.toString(32) + " " + this.place.y.toString(32);
};

function checkpoint(x, y) {
    this.place = new Location(x, y);
    this.reached = false;
}
checkpoint.prototype.draw = function () {
    graphics.beginPath();
    graphics.fillStyle = this.reached ? "#AAAAFF" : "#0000FF";
    graphics.moveTo(this.place.normalizeToWorld().x + 7 * theTrack.zoomFactor, this.place.normalizeToWorld().y);
    graphics.arc(this.place.normalizeToWorld().x, this.place.normalizeToWorld().y, 7 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.fill();
    graphics.stroke();
};
checkpoint.prototype.Ad = function (AV) {
    if (!this.reached && AV.place.cloneSub(this.place).lengthSquared() < 500 && !AV.parent.Cq) {
        this.reached = true;
        AV.parent.save = true;
    }
};
checkpoint.prototype.checkDelete = function (eraserLocation) {
    if (eraserLocation.cloneSub(this.place).length() < eraserSize + 7) {
        this.remove = true;
        theTrack.remove(this.place);
    }
};
checkpoint.prototype.asString = function () {
    return "C " + this.place.x.toString(32) + " " + this.place.y.toString(32);
};

function boost(x, y, rotation) {
    this.rotation = rotation;
    var Bz = this.rotation * Math.PI / 180;
    this.place = new Location(x, y);
    this.O = new Location(-Math.sin(Bz), Math.cos(Bz));
}
boost.prototype.draw = function () {
    graphics.beginPath();
    graphics.fillStyle = "yellow";
    graphics.save();
    graphics.translate(this.place.normalizeToWorld().x, this.place.normalizeToWorld().y);
    graphics.rotate(this.rotation * Math.PI / 180);
    graphics.moveTo(-7 * theTrack.zoomFactor, -10 * theTrack.zoomFactor);
    graphics.lineTo(0, 10 * theTrack.zoomFactor);
    graphics.lineTo(7 * theTrack.zoomFactor, -10 * theTrack.zoomFactor);
    graphics.lineTo(-7 * theTrack.zoomFactor, -10 * theTrack.zoomFactor);
    graphics.fill();
    graphics.stroke();
    graphics.restore();
};
boost.prototype.Ad = function (AV) {
    if (AV.place.cloneSub(this.place).lengthSquared() < 1000) {
        for (var u = 0; u < AV.parent.D.length; u++) {
            AV.parent.D[u].place.add(this.O);
        }
    }
};
boost.prototype.checkDelete = function (eraserLocation) {
    if (eraserLocation.cloneSub(this.place).length() < eraserSize + 7) {
        this.remove = true;
        theTrack.remove(this.place);
    }
};
boost.prototype.asString = function () {
    return "B " + this.place.x.toString(32) + " " + this.place.y.toString(32) + " " + (this.rotation - 180).toString(32);
};

function gravity(x, y, rotation) {
    this.rotation = rotation;
    var Bz = this.rotation * Math.PI / 180;
    this.place = new Location(x, y);
    this.O = new Location(-0.3 * Math.sin(Bz), 0.3 * Math.cos(Bz));
}
gravity.prototype.draw = function () {
    graphics.beginPath();
    graphics.fillStyle = "#00FF00";
    graphics.save();
    graphics.translate(this.place.normalizeToWorld().x, this.place.normalizeToWorld().y);
    graphics.rotate(this.rotation * Math.PI / 180);
    graphics.moveTo(-7 * theTrack.zoomFactor, -10 * theTrack.zoomFactor);
    graphics.lineTo(0, 10 * theTrack.zoomFactor);
    graphics.lineTo(7 * theTrack.zoomFactor, -10 * theTrack.zoomFactor);
    graphics.lineTo(-7 * theTrack.zoomFactor, -10 * theTrack.zoomFactor);
    graphics.fill();
    graphics.stroke();
    graphics.restore();
};
gravity.prototype.Ad = function (AV) {
    if (AV.place.cloneSub(this.place).lengthSquared() < 1000) {
        AV.parent.Af.set(this.O);
    }
};
gravity.prototype.checkDelete = function (eraserLocation) {
    if (eraserLocation.cloneSub(this.place).length() < eraserSize + 7) {
        this.remove = true;
        theTrack.remove(this.place);
    }
};
gravity.prototype.asString = function () {
    return "G " + this.place.x.toString(32) + " " + this.place.y.toString(32) + " " + (this.rotation - 180).toString(32);
};

function sloMo(x, y) {
    this.place = new Location(x, y);
}
sloMo.prototype.draw = function () {
    graphics.beginPath();
    graphics.moveTo(this.place.normalizeToWorld().x + 7 * theTrack.zoomFactor, this.place.normalizeToWorld().y);
    graphics.arc(this.place.normalizeToWorld().x, this.place.normalizeToWorld().y, 7 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.stroke();
};
sloMo.prototype.Ad = function (AV) {
    if (AV.place.cloneSub(this.place).lengthSquared() < 500) {
        AV.parent.A8 = true;
    }
};
sloMo.prototype.checkDelete = function (eraserLocation) {
    if (eraserLocation.cloneSub(this.place).length() < eraserSize + 7) {
        this.remove = true;
        theTrack.remove(this.place);
    }
};
sloMo.prototype.asString = function () {
    return "S " + this.place.x.toString(32) + " " + this.place.y.toString(32);
};

function bomb(x, y) {
    this.place = new Location(x, y);
}
bomb.prototype.draw = function () {
    graphics.beginPath();
    graphics.fillStyle = "red";
    graphics.moveTo(this.place.normalizeToWorld().x + 7 * theTrack.zoomFactor, this.place.normalizeToWorld().y);
    graphics.arc(this.place.normalizeToWorld().x, this.place.normalizeToWorld().y, 7 * theTrack.zoomFactor, 0, 2 * Math.PI, true);
    graphics.fill();
    graphics.stroke();
};
bomb.prototype.Ad = function (AV) {
    if (AV.place.cloneSub(this.place).lengthSquared() < 500 && !AV.parent.Cq) {
        AP = new C5(this.place, AP.Af, AP.z);
    }
};
bomb.prototype.checkDelete = function (eraserLocation) {
    if (eraserLocation.cloneSub(this.place).length() < eraserSize + 7) {
        this.remove = true;
        theTrack.remove(this.place);
    }
};
bomb.prototype.asString = function () {
    return "O " + this.place.x.toString(32) + " " + this.place.y.toString(32);
};

function line(x1, y1, x2, y2) {
    this.point1 = new Location(Math.round(x1), Math.round(y1));
    this.point2 = new Location(Math.round(x2), Math.round(y2));
    this.vector = this.point2.cloneSub(this.point1);
    this.length = this.vector.length();
    this.remove = false;
}
line.prototype.custDraw = function (graphic, CI, CP) {
    graphic.beginPath();
    graphic.moveTo(this.point1.x * theTrack.zoomFactor - CI, this.point1.y * theTrack.zoomFactor - CP);
    graphic.lineTo(this.point2.x * theTrack.zoomFactor - CI, this.point2.y * theTrack.zoomFactor - CP);
    graphic.stroke();
};
line.prototype.Ad = function (Ah) {
    if (this.DN) {
        return;
    }
    this.DN = true;
    var AA = Ah.place;
    var AS = Ah.g;
    var L = Ah.Al;
    var N = new Location(0, 0);
    var R = 0;
    var Ap = AA.cloneSub(this.point1);
    var Aw = Ap.dotProduct(this.vector) / this.length / this.length;
    if (Aw >= 0 && Aw <= 1) {
        var B2 = (Ap.x * this.vector.y - Ap.y * this.vector.x) * ((Ap.x - AS.x) * this.vector.y - (Ap.y - AS.y) * this.vector.x) < 0 ? -1 : 1;
        N = Ap.cloneSub(this.vector.cloneScale(Aw));
        R = N.length();
        if (R < L || B2 < 0) {
            AA.add(N.cloneScale((L * B2 - R) / R));
            Ah.drive(new Location(-N.y / R, N.x / R));
            return;
        }
    }
    if (Aw * this.length < -L || Aw * this.length > this.length + L) {
        return;
    }
    var Bp = Aw > 0 ? this.point2 : this.point1;
    N = AA.cloneSub(Bp);
    R = N.length();
    if (R < L) {
        AA.add(N.cloneScale((L - R) / R));
        Ah.drive(new Location(-N.y / R, N.x / R));
        return;
    }
};
line.prototype.checkDelete = function (eraserLocation) {
    var C4 = eraserLocation.cloneSub(this.point1);
    var B8 = C4.dotProduct(this.vector.cloneReciprocalScale(this.length));
    var Bi = new Location(0, 0);
    if (B8 <= 0) {
        Bi.set(this.point1);
    } else if (B8 >= this.length) {
        Bi.set(this.point2);
    } else {
        Bi.set(this.point1.cloneAdd(this.vector.cloneReciprocalScale(this.length).cloneScale(B8)));
    }
    var DA = eraserLocation.cloneSub(Bi);
    if (DA.length() <= eraserSize) {
        this.remove = true;
        theTrack.remove(this.point1, this.point2);
    }
};
line.prototype.CR = function () {
    this.B9 = true;
    var end = " " + this.point2.x.toString(32) + " " + this.point2.y.toString(32);
    var next = theTrack.I[Math.floor(this.point2.x / theTrack.q)][Math.floor(this.point2.y / theTrack.q)].search(this.point2, "line");
    if (next != undefined) {
        end += next.CR();
    }
    return end;
};

function B5(C_, C9, C8, C$) {
    this.AH = new Location(Math.round(C_), Math.round(C9));
    this.AK = new Location(Math.round(C8), Math.round(C$));
    this.BK = this.AK.cloneSub(this.AH);
    this.length = this.BK.length();
    this.remove = false;
}
B5.prototype.custDraw = function (graphic, CI, CP) {
    graphic.beginPath();
    graphic.moveTo(this.AH.x * theTrack.zoomFactor - CI, this.AH.y * theTrack.zoomFactor - CP);
    graphic.lineTo(this.AK.x * theTrack.zoomFactor - CI, this.AK.y * theTrack.zoomFactor - CP);
    graphic.stroke();
};
B5.prototype.checkDelete = function (eraserLocation) {
    var C4 = eraserLocation.cloneSub(this.AH);
    var B8 = C4.dotProduct(this.BK.cloneReciprocalScale(this.length));
    var Bi = new Location(0, 0);
    if (B8 <= 0) {
        Bi.set(this.AH);
    } else if (B8 >= this.length) {
        Bi.set(this.AK);
    } else {
        Bi.set(this.AH.cloneAdd(this.BK.cloneReciprocalScale(this.length).cloneScale(B8)));
    }
    var DA = eraserLocation.cloneSub(Bi);
    if (DA.length() <= eraserSize) {
        this.remove = true;
        theTrack.remove(this.AH, this.AK);
    }
};
B5.prototype.CR = function () {
    this.B9 = true;
    var end = " " + this.AK.x.toString(32) + " " + this.AK.y.toString(32);
    var next = theTrack.I[Math.floor(this.AK.x / theTrack.q)][Math.floor(this.AK.y / theTrack.q)].search(this.AK, "sline");
    if (next != undefined) {
        end += next.CR();
    }
    return end;
};

function BP() {
    this.AG = new Array;
    this.AL = new Array;
    this.objects = new Array;
}
BP.prototype.Ad = function (AV) {
    for (var P = this.AG.length - 1; P >= 0; P--) {
        this.AG[P].Ad(AV);
    }
    if (!AV.parent.A9) {
        for (var j = this.objects.length - 1; j >= 0; j--) {
            this.objects[j].Ad(AV);
        }
    }
};
BP.prototype.Cy = function () {
    for (var P = 0; P < this.AG.length; P++) {
        this.AG[P].DN = false;
    }
};
BP.prototype.remove = function () {
    for (var P = 0; P < this.AG.length; P++) {
        if (this.AG[P].remove) {
            this.AG.splice(P, 1);
            P--;
        }
    }
    for (var v = 0; v < this.AL.length; v++) {
        if (this.AL[v].remove) {
            this.AL.splice(v, 1);
            v--;
        }
    }
    for (var j = 0; j < this.objects.length; j++) {
        if (this.objects[j].remove != undefined) {
            this.objects.splice(j, 1);
            j--;
        }
    }
};
BP.prototype.search = function (U, type) {
    if (type == "sline") {
        for (var v = 0; v < this.AL.length; v++) {
            if (this.AL[v].AH.x == U.x && this.AL[v].AH.y == U.y && this.AL[v].B9 == undefined) {
                return this.AL[v];
            }
        }
    } else {
        for (var P = 0; P < this.AG.length; P++) {
            if (this.AG[P].AH.x == U.x && this.AG[P].AH.y == U.y && this.AG[P].B9 == undefined) {
                return this.AG[P];
            }
        }
    }
};

function CG(Av, BZ, q) {
    var I = new Array;
    var A_ = new Location(Av.x, Av.y);
    var DM = (BZ.y - Av.y) / (BZ.x - Av.x);
    var O = new Location(Av.x < BZ.x ? 1 : -1, Av.y < BZ.y ? 1 : -1);
    var DP = 0;
    I.push(Av);
    while (DP < 5000) {
        if (Math.floor(A_.x / q) == Math.floor(BZ.x / q) && Math.floor(A_.y / q) == Math.floor(BZ.y / q)) {
            break;
        }
        var B4 = new Location;
        if (O.x < 0) {
            B4.x = Math.round(Math.ceil((A_.x + 1) / q + O.x) * q) - 1;
        } else {
            B4.x = Math.round(Math.floor(A_.x / q + O.x) * q);
        }
        B4.y = Math.round(Av.y + (B4.x - Av.x) * DM);
        var B1 = new Location;
        if (O.y < 0) {
            B1.y = Math.round(Math.ceil((A_.y + 1) / q + O.y) * q) - 1;
        } else {
            B1.y = Math.round(Math.floor(A_.y / q + O.y) * q);
        }
        B1.x = Math.round(Av.x + (B1.y - Av.y) / DM);
        if (Math.pow(B4.x - Av.x, 2) + Math.pow(B4.y - Av.y, 2) < Math.pow(B1.x - Av.x, 2) + Math.pow(B1.y - Av.y, 2)) {
            A_ = B4;
            I.push(B4);
        } else {
            A_ = B1;
            I.push(B1);
        }
        DP++;
    }
    return I;
}
function track(ID) {
    this.I = new Array;
    this.q = 100;
    this.Ax = new Array;
    this.zoomFactor = 0.6;
    this.ID = ID;
    graphics.fillText("Loading track... Please wait.", 36, 16);
    if (this.ID == "banner") {
        currentTool = "";
        canvas.width = document.body.offsetWidth;
        graphics.lineCap = "round";
        graphics.lineJoin = "round";
        graphics.font = "8px eiven";
        toolbar2.style.display = "none";
        toolbar1.style.left = canvas.offsetLeft + "px";
        this.zoomFactor = 0.5;
        this.cameraCenter = new Location(730, -52);
        var rawTrack = "42 1i 5u a,8e a 8e -a 8e -u 8e -1i 92 -18 92 0 9m a aa 0 au -a au a,8e -1i 9m -26 au -1i aa -18 9m -1i 92 -18,6i a 84 a,b8 -a b8 a cg u d4 k do u do a do -a do -u cg -1i bs -18,do -u d4 -k bs -18,b8 -a bs -k bs 0 cg a d4 0 d4 -k,e2 k e2 -1i em -18,e2 -u em -k em u,fa -u fu -k gi -u fa -1i em -18,fu -k fu k fu u,gi k gi -u,fa -u em -k,6i a 5u a,gs -u gs 0 gs a i4 u jc a jc -u,gs -18 gs -u,gs -18 hg -1i hg 0 gs a,hg 0 i4 a io 0 jc a,io 0 io -1i jc -18 jc -u,jm a ku u li k m6 u m6 a,jm a jm -a ka -k ka 0 ku a li 0 li -k m6 -u m6 a,li -k ka -18 ku -1i m6 -u,mg a no u p0 a p0 -a oc -k no -u,oc -k p0 -u no -1i no -18 no -a,mg a n4 0 no a oc 0 no -a,qi a qi k r6 u r6 0 t2 u t2 a se 0 t2 -a,qi a qi -a,qi -1i qi 0,qi -1i rq -26 t2 -1i t2 -u t2 -a,r6 -18 rq -1i se -18 t2 -1i,se -18 se -k rq -a r6 -k r6 -18,qi -1i r6 -18,tc k u0 u,tc k tc 0 tc -18 u0 -1i u0 u,ua a vi u 10q a 10q -k 10q -1s 106 -26 106 -1i,ua a ua -a ua -u uu -k uu 0 vi a 106 0 106 -k 10q -u,ua -u vi -1i 106 -18 106 -1i,106 -k vi -u uu -k,114 a 12c u 130 k 11o 0 11o -a,114 a 114 -a 114 -u 12c -1i 13k -u 130 -k 130 -a 130 0 13k -a 13k -u,130 -k 12c -u 11o -k 114 -u,11o -k 11o -a,13u k 13u -u 13u -18 14i -1i 14i 0,13u k 14i u 14i 0,17m a 19i 1i 1es 1i 3d2 1i,pa a q8 a,8e a 9m u au a,e2 k em u,gi k fu u,42 1i -1mm 1i,17m a 14s a#9m -1i 9m -a aa 0,9m -a 92 0,bs 0 cg -a cg -u,cg -a d4 0,bs -k cg -u,em -k fa -a fa a fu 0,fa -a fu -k,em 0 fa a,hg 0 i4 -a io 0,hg -k i4 -u i4 -a,i4 -u io -k,ka 0 ku -a li 0,ku -a ku -u,ka -k ku -u,no -1i mg -u mg -a n4 0,mg -u no -a,no -u n4 -k,r6 -18 rq -u rq -a,rq -u se -18,tc -18 tc -1s u0 -1i,uu 0 vi -a vi -u,vi -a 106 0,11o -k 12c -a 12c a,12c -a 130 -k,130 0 12c a,14i -1i 156 -18 156 -k 14i -u##BMX#";
    } else {
        this.cameraCenter = new Location(0, 0);
        if (this.ID == undefined) {
            var rawTrack = "-18 1i 18 1i##";
            toolbar2.style.display = "block";
            currentTool = "line";
        } else if (this.ID.length > 7) {
            var rawTrack = this.ID;
            this.ID = undefined;
            toolbar2.style.display = "block";
            currentTool = "line";
        } else {
            var request = new XMLHttpRequest;
            request.open("POST", "js/load.php", false);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send("track=" + this.ID);
            var rawTrack = request.responseText;
        }
    }
    var hashSplit = rawTrack.split("#");
    var AG = hashSplit[0].split(",");
    for (var Az = 0; Az < AG.length; Az++) {
        var AJ = AG[Az].split(" ");
        if (AJ.length > 3) {
            for (var U = 0; U < AJ.length - 2; U += 2) {
                var P = new line(parseInt(AJ[U], 32), parseInt(AJ[U + 1], 32), parseInt(AJ[U + 2], 32), parseInt(AJ[U + 3], 32));
                if (P.length >= 2 && P.length < 100000) {
                    var I = CG(new Location(P.AH.x, P.AH.y), new Location(P.AK.x, P.AK.y), this.q);
                    for (var T = 0; T < I.length; T++) {
                        var x = Math.floor(I[T].x / this.q);
                        var y = Math.floor(I[T].y / this.q);
                        if (this.I[x] == undefined) {
                            this.I[x] = new Array;
                        }
                        if (this.I[x][y] == undefined) {
                            this.I[x][y] = new BP(x, y);
                        }
                        this.I[x][y].AG.push(P);
                    }
                }
            }
        }
    }
    var AL = hashSplit[1].split(",");
    for (var Az = 0; Az < AL.length; Az++) {
        var AJ = AL[Az].split(" ");
        if (AJ.length > 3) {
            for (var U = 0; U < AJ.length - 2; U += 2) {
                var v = new B5(parseInt(AJ[U], 32), parseInt(AJ[U + 1], 32), parseInt(AJ[U + 2], 32), parseInt(AJ[U + 3], 32));
                if (v.length >= 2 && v.length < 100000) {
                    var I = CG(new Location(v.AH.x, v.AH.y), new Location(v.AK.x, v.AK.y), this.q);
                    for (var T = 0; T < I.length; T++) {
                        var x = Math.floor(I[T].x / this.q);
                        var y = Math.floor(I[T].y / this.q);
                        if (this.I[x] == undefined) {
                            this.I[x] = new Array;
                        }
                        if (this.I[x][y] == undefined) {
                            this.I[x][y] = new BP;
                        }
                        this.I[x][y].AL.push(v);
                    }
                }
            }
        }
    }
    this.numTargets = 0;
    this.targetsReached = 0;
    this.objects = new Array;
    var objects = hashSplit[2].split(",");
    for (var j = 0; j < objects.length; j++) {
        var AJ = objects[j].split(" ");
        if (AJ.length > 2) {
            switch (AJ[0]) {
            case "T":
                var Ag = new target(parseInt(AJ[1], 32), parseInt(AJ[2], 32));
                this.numTargets++;
                this.objects.push(Ag);
                break;
            case "C":
                var Ag = new checkpoint(parseInt(AJ[1], 32), parseInt(AJ[2], 32));
                this.objects.push(Ag);
                break;
            case "B":
                var Ag = new boost(parseInt(AJ[1], 32), parseInt(AJ[2], 32), parseInt(AJ[3], 32) + 180);
                break;
            case "G":
                var Ag = new gravity(parseInt(AJ[1], 32), parseInt(AJ[2], 32), parseInt(AJ[3], 32) + 180);
                break;
            case "O":
                var Ag = new bomb(parseInt(AJ[1], 32), parseInt(AJ[2], 32));
                break;
            case "S":
                var Ag = new sloMo(parseInt(AJ[1], 32), parseInt(AJ[2], 32));
                break;
            default:
                ;
            }
            var x = Math.floor(Ag.place.x / this.q);
            var y = Math.floor(Ag.place.y / this.q);
            if (this.I[x] == undefined) {
                this.I[x] = new Array;
            }
            if (this.I[x][y] == undefined) {
                this.I[x][y] = new BP(x, y);
            }
            this.I[x][y].objects.push(Ag);
        }
    }
    if (hashSplit[3] == "MTB" || hashSplit[3] == "BMX") {
        currentBike = hashSplit[3];
        this.z = hashSplit[4] != "" ? hashSplit[4] : false;
    } else {
        this.z = hashSplit[3] != "" ? hashSplit[3] : false;
    }
}
track.prototype.popCheckpoint = function () {
    if (bmxConstants.length > 1) {
        bmxConstants.pop();
    }
    if (mtbConstants.length > 1) {
        mtbConstants.pop();
    }
    if (W && K.length > 1) {
        K.pop();
    }
};
track.prototype.restart = function () {
    this.DV();
    paused = false;
    AP = currentBike == "BMX" ? new Bk : new Bn;
    focus = AP.h;
    if (W) {
        W = this.AT[6] == "BMX" ? new Cb(this.AT) : new CW(this.AT);
        if (K.length == 1 && !up) {
            focus = W.h;
        }
    }
    if (this.ID != "banner") {
        this.cameraCenter = new Location(AP.h.place.x, AP.h.place.y);
    }
};
track.prototype.Cs = function () {
    bmxConstants = new Array(new Array(0, -1, 0, -1, 0, 0, -21, 38, -21, 38, 0, 0, 0, 21, 38, 21, 38, 0, 0, 0, 45, 42, 45, 1, 0, 0.3, false, 0, new Array, 0));
    mtbConstants = new Array(new Array(2, -3, 2, -3, 0, 0, -23, 35, -23, 35, 0, 0, 0, 23, 35, 23, 35, 0, 0, 0, 47, 45, 45, 1, 0, 0.3, false, 0, new Array, 0));
    if (W) {
        K = this.AT[6] == "BMX" ? new Array(new Array(0, -1, 0, -1, 0, 0, -21, 38, -21, 38, 0, 0, 0, 21, 38, 21, 38, 0, 0, 0, 45, 42, 45, 1, 0, 0.3, false, 0, 0, 0, 0)) : new Array(new Array(2, -3, 2, -3, 0, 0, -23, 35, -23, 35, 0, 0, 0, 23, 35, 23, 35, 0, 0, 0, 47, 45, 45, 1, 0, 0.3, false, 0, 0, 0, 0));
    }
    this.restart();
};
track.prototype.DV = function () {
    for (var x in this.I) {
        for (var y in this.I[x]) {
            for (var j = 0; j < this.I[x][y].objects.length; j++) {
                if (this.I[x][y].objects[j].BM != undefined) {
                    this.I[x][y].objects[j].BM = false;
                }
            }
        }
    }
};
track.prototype.Ad = function (AV) {
    var x = Math.floor(AV.place.x / this.q - 0.5);
    var y = Math.floor(AV.place.y / this.q - 0.5);
    if (this.I[x] != undefined) {
        if (this.I[x][y] != undefined) {
            this.I[x][y].Cy();
        }
        if (this.I[x][y + 1] != undefined) {
            this.I[x][y + 1].Cy();
        }
    }
    if (this.I[x + 1] != undefined) {
        if (this.I[x + 1][y] != undefined) {
            this.I[x + 1][y].Cy();
        }
        if (this.I[x + 1][y + 1] != undefined) {
            this.I[x + 1][y + 1].Cy();
        }
    }
    if (this.I[x] != undefined && this.I[x][y] != undefined) {
        this.I[x][y].Ad(AV);
    }
    if (this.I[x + 1] != undefined) {
        if (this.I[x + 1][y] != undefined) {
            this.I[x + 1][y].Ad(AV);
        }
        if (this.I[x + 1][y + 1] != undefined) {
            this.I[x + 1][y + 1].Ad(AV);
        }
    }
    if (this.I[x] != undefined && this.I[x][y + 1] != undefined) {
        this.I[x][y + 1].Ad(AV);
    }
};
track.prototype.draw = function () {
    if (focus && this.ID != "banner") {
        this.cameraCenter.add(focus.place.cloneSub(this.cameraCenter).cloneReciprocalScale(5));
    }
    graphics.clearRect(0, 0, canvas.width, canvas.height);
    graphics.lineWidth = Math.max(2 * this.zoomFactor, 0.5);
    if ((currentTool == "line" || currentTool == "scenery line" || currentTool == "brush" || currentTool == "scenery brush") && snapFromPrevLine) {
        if (mousePos.normalizeToWorld().x < 50) {
            theTrack.cameraCenter.x -= 10 / this.zoomFactor;
            mousePos.x -= 10 / this.zoomFactor;
        } else if (mousePos.normalizeToWorld().x > canvas.width - 50) {
            theTrack.cameraCenter.x += 10 / this.zoomFactor;
            mousePos.x += 10 / this.zoomFactor;
        }
        if (mousePos.normalizeToWorld().y < 50) {
            theTrack.cameraCenter.y -= 10 / this.zoomFactor;
            mousePos.y -= 10 / this.zoomFactor;
        } else if (mousePos.normalizeToWorld().y > canvas.height - 50) {
            theTrack.cameraCenter.y += 10 / this.zoomFactor;
            mousePos.y += 10 / this.zoomFactor;
        }
        graphics.beginPath();
        graphics.strokeStyle = "red";
        graphics.moveTo(lastClick.normalizeToWorld().x, lastClick.normalizeToWorld().y);
        graphics.lineTo(mousePos.normalizeToWorld().x, mousePos.normalizeToWorld().y);
        graphics.stroke();
    }
    var A_ = (new Location(0, 0)).normalizeToCanvas();
    var CH = (new Location(canvas.width, canvas.height)).normalizeToCanvas();
    A_.x = Math.floor(A_.x / this.q);
    A_.y = Math.floor(A_.y / this.q);
    CH.x = Math.floor(CH.x / this.q);
    CH.y = Math.floor(CH.y / this.q);
    var DI = new Array;
    for (var x = A_.x; x <= CH.x; x++) {
        for (var y = A_.y; y <= CH.y; y++) {
            if (this.I[x] != undefined && this.I[x][y] != undefined) {
                if (this.I[x][y].AG.length > 0 || this.I[x][y].AL.length > 0) {
                    DI[x + "_" + y] = 1;
                    if (this.Ax[x + "_" + y] == undefined) {
                        this.Ax[x + "_" + y] = document.createElement("canvas");
                        this.Ax[x + "_" + y].width = this.q * this.zoomFactor;
                        this.Ax[x + "_" + y].height = this.q * this.zoomFactor;
                        var graphic = this.Ax[x + "_" + y].getContext("2d");
                        graphic.lineCap = "round";
                        graphic.lineWidth = Math.max(2 * this.zoomFactor, 0.5);
                        graphic.strokeStyle = "#AAAAAA";
                        for (var v = 0; v < this.I[x][y].AL.length; v++) {
                            this.I[x][y].AL[v].custDraw(this.Ax[x + "_" + y].getContext("2d"), x * this.q * this.zoomFactor, y * this.q * this.zoomFactor);
                        }
                        graphic.strokeStyle = "black";
                        if (shadeLines) {
                            graphic.shadowOffsetX = 2;
                            graphic.shadowOffsetY = 2;
                            graphic.shadowBlur = Math.max(2, 10 * this.zoomFactor);
                            graphic.shadowColor = "black";
                        }
                        for (var P = 0; P < this.I[x][y].AG.length; P++) {
                            this.I[x][y].AG[P].custDraw(this.Ax[x + "_" + y].getContext("2d"), x * this.q * this.zoomFactor, y * this.q * this.zoomFactor);
                        }
                    }
                    graphics.drawImage(this.Ax[x + "_" + y], Math.floor(canvas.width / 2 - this.cameraCenter.x * this.zoomFactor + x * this.q * this.zoomFactor), Math.floor(canvas.height / 2 - this.cameraCenter.y * this.zoomFactor + y * this.q * this.zoomFactor));
                }
                graphics.strokeStyle = "black";
                for (var j = 0; j < this.I[x][y].objects.length; j++) {
                    this.I[x][y].objects[j].draw();
                }
            }
        }
    }
    for (var Ay in this.Ax) {
        if (DI[[Ay]] == undefined) {
            delete this.Ax[Ay];
        }
    }
    if (canvas.width == 250) {
        return;
    }
    if (currentTool != "camera" && !focus) {
        switch (currentTool) {
        case "line":
        case "scenery line":
        case "brush":
        case "scenery brush":
            graphics.beginPath();
            graphics.lineWidth = 1;
            graphics.strokeStyle = "black";
            var x = Math.round(mousePos.normalizeToWorld().x);
            var y = Math.round(mousePos.normalizeToWorld().y);
            graphics.moveTo(x - 10, y);
            graphics.lineTo(x + 10, y);
            graphics.moveTo(x, y + 10);
            graphics.lineTo(x, y - 10);
            graphics.stroke();
            break;
        case "eraser":
            graphics.beginPath();
            graphics.fillStyle = "lightpink";
            graphics.arc(mousePos.normalizeToWorld().x, mousePos.normalizeToWorld().y, (eraserSize - 1) * this.zoomFactor, 0, 2 * Math.PI, true);
            graphics.fill();
            break;
        case "goal":
        case "checkpoint":
        case "bomb":
            graphics.beginPath();
            graphics.fillStyle = currentTool == "goal" ? "yellow" : currentTool == "checkpoint" ? "blue" : "red";
            graphics.arc(mousePos.normalizeToWorld().x, mousePos.normalizeToWorld().y, 7 * this.zoomFactor, 0, 2 * Math.PI, true);
            graphics.fill();
            graphics.stroke();
            break;
        case "boost":
        case "gravity":
            graphics.beginPath();
            graphics.fillStyle = currentTool == "boost" ? "yellow" : "#00FF00";
            graphics.save();
            if (!snapFromPrevLine) {
                graphics.translate(mousePos.normalizeToWorld().x, mousePos.normalizeToWorld().y);
            } else {
                graphics.translate(lastClick.normalizeToWorld().x, lastClick.normalizeToWorld().y);
                graphics.rotate(Math.atan2(-(mousePos.x - lastClick.x), mousePos.y - lastClick.y));
            }
            graphics.moveTo(-7 * theTrack.zoomFactor, -10 * theTrack.zoomFactor);
            graphics.lineTo(0, 10 * theTrack.zoomFactor);
            graphics.lineTo(7 * theTrack.zoomFactor, -10 * theTrack.zoomFactor);
            graphics.lineTo(-7 * theTrack.zoomFactor, -10 * theTrack.zoomFactor);
            graphics.fill();
            graphics.stroke();
            graphics.restore();
            break;
        default:
            ;
        }
    }
    graphics.beginPath();
    graphics.fillStyle = "yellow";
    graphics.lineWidth = 1;
    graphics.arc(40, 12, 3.5, 0, 2 * Math.PI, true);
    graphics.fill();
    graphics.stroke();
    graphics.beginPath();
    graphics.lineWidth = 10;
    graphics.strokeStyle = "white";
    graphics.fillStyle = "black";
    if (paused) {
        var text = "Game paused";
    } else if (AP.A9) {
        var text = bmxConstants.length > 1 || mtbConstants.length > 1 ? "Press ENTER to restart or BACKSPACE to cancel checkpoint" : "Press ENTER to restart";
    } else if (this.ID == undefined || this.ID == "banner") {
        var text = "CANVAS RIDER RC7";
        if (this.ID == undefined) {
            if (gridDetail == 10 && (currentTool == "line" || currentTool == "scenery line" || currentTool == "brush" || currentTool == "scenery brush")) {
                text += " - Grid ";
            }
            text += " - " + currentTool;
            if (currentTool == "brush" || currentTool == "scenery brush") {
                text += " ( size " + drawingSize + " )";
            }
        }
        if ((label && label[0] && !label[1])) {
            text = "CANVAS RIDER RC7";
        }
    } else {
        var CN = Math.floor(AP.z / 60000);
        var CK = Math.floor(AP.z % 60000 / 1000);
        var Dd = Math.floor((AP.z - CN * 60000 - CK * 1000) / 100);
        if (CN < 10) {
            CN = "0" + CN;
        }
        if (CK < 10) {
            CK = "0" + CK;
        }
        var text = CN + ":" + CK + "." + Dd;
    }
    if (label && !label[0] && !label[1]) {
        text += " - " + (paused ? "Unpause" : "Pause") + " ( SPACE )";
    }
    graphics.strokeText(": " + this.targetsReached + " / " + this.numTargets + "  -  " + text, 50, 16);
    graphics.fillText(": " + this.targetsReached + " / " + this.numTargets + "  -  " + text, 50, 16);
    if (label) {
        if (!label[0]) {
            graphics.strokeText(label[2], 36, 15 + label[1] * 25);
            graphics.fillText(label[2], 36, 15 + label[1] * 25);
        } else {
            graphics.textAlign = "right";
            if (document.documentElement.offsetHeight <= window.innerHeight) {
                graphics.strokeText(label[2], canvas.width - 36, 15 + label[1] * 25);
                graphics.fillText(label[2], canvas.width - 36, 15 + label[1] * 25);
            } else {
                graphics.strokeText(label[2], canvas.width - 51, 15 + label[1] * 25);
                graphics.fillText(label[2], canvas.width - 51, 15 + label[1] * 25);
            }
            graphics.textAlign = "left";
        }
    }
};
track.prototype.checkDelete = function (eraserLocation) {
    var x = Math.floor(eraserLocation.x / this.q - 0.5);
    var y = Math.floor(eraserLocation.y / this.q - 0.5);
    if (this.I[x] != undefined) {
        if (this.I[x][y] != undefined) {
            for (var P = 0; P < this.I[x][y].AG.length; P++) {
                this.I[x][y].AG[P].checkDelete(eraserLocation);
            }
            for (var v = 0; v < this.I[x][y].AL.length; v++) {
                this.I[x][y].AL[v].checkDelete(eraserLocation);
            }
            for (var j = 0; j < this.I[x][y].objects.length; j++) {
                this.I[x][y].objects[j].checkDelete(eraserLocation);
            }
        }
        if (this.I[x][y + 1] != undefined) {
            for (var P = 0; P < this.I[x][y + 1].AG.length; P++) {
                this.I[x][y + 1].AG[P].checkDelete(eraserLocation);
            }
            for (var v = 0; v < this.I[x][y + 1].AL.length; v++) {
                this.I[x][y + 1].AL[v].checkDelete(eraserLocation);
            }
            for (var j = 0; j < this.I[x][y + 1].objects.length; j++) {
                this.I[x][y + 1].objects[j].checkDelete(eraserLocation);
            }
        }
    }
    if (this.I[x + 1] != undefined) {
        if (this.I[x + 1][y] != undefined) {
            for (var P = 0; P < this.I[x + 1][y].AG.length; P++) {
                this.I[x + 1][y].AG[P].checkDelete(eraserLocation);
            }
            for (var v = 0; v < this.I[x + 1][y].AL.length; v++) {
                this.I[x + 1][y].AL[v].checkDelete(eraserLocation);
            }
            for (var j = 0; j < this.I[x + 1][y].objects.length; j++) {
                this.I[x + 1][y].objects[j].checkDelete(eraserLocation);
            }
        }
        if (this.I[x + 1][y + 1] != undefined) {
            for (var P = 0; P < this.I[x + 1][y + 1].AG.length; P++) {
                this.I[x + 1][y + 1].AG[P].checkDelete(eraserLocation);
            }
            for (var v = 0; v < this.I[x + 1][y + 1].AL.length; v++) {
                this.I[x + 1][y + 1].AL[v].checkDelete(eraserLocation);
            }
            for (var j = 0; j < this.I[x + 1][y + 1].objects.length; j++) {
                this.I[x + 1][y + 1].objects[j].checkDelete(eraserLocation);
            }
        }
    }
    for (var j = 0; j < this.objects.length; j++) {
        if (this.objects[j].remove != undefined) {
            this.objects.splice(j, 1);
            j--;
        }
    }
};
track.prototype.remove = function (Av, BZ) {
    if (BZ == undefined) {
        BZ = Av;
    }
    var I = CG(Av, BZ, this.q);
    for (var T = 0; T < I.length; T++) {
        var x = Math.floor(I[T].x / this.q);
        var y = Math.floor(I[T].y / this.q);
        this.I[x][y].remove();
        delete this.Ax[x + "_" + y];
    }
};
track.prototype.shortenLastLineSet = function () {
    if (currentTool == "scenery line" || currentTool == "scenery brush") {
        var x = Math.floor(lastScenery.x / this.q);
        var y = Math.floor(lastScenery.y / this.q);
        var v = this.I[x][y].AL[this.I[x][y].AL.length - 1];
        if (v != undefined && v.AK.x == Math.round(lastScenery.x) && v.AK.y == Math.round(lastScenery.y)) {
            v.remove = true;
            lastScenery.set(v.AH);
            this.remove(v.AH, v.AK);
        } else {
            alert("No more scenery line to erase!");
        }
    } else {
        var x = Math.floor(lastForeground.x / this.q);
        var y = Math.floor(lastForeground.y / this.q);
        var P = this.I[x][y].AG[this.I[x][y].AG.length - 1];
        if (P != undefined && P.AK.x == Math.round(lastForeground.x) && P.AK.y == Math.round(lastForeground.y)) {
            P.remove = true;
            lastForeground.set(P.AH);
            this.remove(P.AH, P.AK);
        } else {
            alert("No more line to erase!");
        }
    }
};
track.prototype.asString = function () {
    var AG = "";
    var AL = "";
    var objects = "";
    for (var x in this.I) {
        for (var y in this.I[x]) {
            for (var P = 0; P < this.I[x][y].AG.length; P++) {
                if (this.I[x][y].AG[P].B9 == undefined) {
                    AG += this.I[x][y].AG[P].AH.x.toString(32) + " " + this.I[x][y].AG[P].AH.y.toString(32) + this.I[x][y].AG[P].CR() + ",";
                }
            }
            for (var v = 0; v < this.I[x][y].AL.length; v++) {
                if (this.I[x][y].AL[v].B9 == undefined) {
                    AL += this.I[x][y].AL[v].AH.x.toString(32) + " " + this.I[x][y].AL[v].AH.y.toString(32) + this.I[x][y].AL[v].CR() + ",";
                }
            }
            for (var j = 0; j < this.I[x][y].objects.length; j++) {
                objects += this.I[x][y].objects[j].asString() + ",";
            }
        }
    }
    for (var x in this.I) {
        for (var y in this.I[x]) {
            for (var P = 0; P < this.I[x][y].AG.length; P++) {
                this.I[x][y].AG[P].B9 = undefined;
            }
            for (var v = 0; v < this.I[x][y].AL.length; v++) {
                this.I[x][y].AL[v].B9 = undefined;
            }
        }
    }
    return AG.substr(0, AG.length - 1) + "#" + AL.substr(0, AL.length - 1) + "#" + objects.substr(0, objects.length - 1) + "#" + currentBike;
};
if (location.href.substr(0, 22) != "http://canvasrider.com") {
    location.href = "http://canvasrider.com";
}
if (!document.createElement("canvas").getContext) {
    location.href = "http://canvasrider.com/error";
}
var canvas = document.getElementById("canvas_rider");
var graphics = canvas.getContext("2d");
graphics.lineCap = "round";
graphics.lineJoin = "round";
graphics.font = "8px eiven";
var toolbar1 = document.getElementById("toolbar1");
toolbar1.style.top = canvas.offsetTop + "px";
toolbar1.style.left = canvas.offsetLeft + "px";
toolbar1.style.display = "block";
var toolbar2 = document.getElementById("toolbar2");
toolbar2.style.top = canvas.offsetTop + "px";
toolbar2.style.left = canvas.offsetLeft + canvas.width - 22 + "px";
var theTrack;
var paused = false;
var currentBike = "BMX";
var bmxConstants = new Array(new Array(0, -1, 0, -1, 0, 0, -21, 38, -21, 38, 0, 0, 0, 21, 38, 21, 38, 0, 0, 0, 45, 42, 45, 1, 0, 0.3, false, 0, new Array, 0));
var mtbConstants = new Array(new Array(2, -3, 2, -3, 0, 0, -23, 35, -23, 35, 0, 0, 0, 23, 35, 23, 35, 0, 0, 0, 47, 45, 45, 1, 0, 0.3, false, 0, new Array, 0));
var K;
var AZ = new Array(new Array, new Array, new Array, new Array, new Array);
var left = 0;
var right = 0;
var up = 0;
var down = 0;
var Aq = 0;
var Ct = true;
var focus;
var snapFromPrevLine = false;
var lastClick = new Location(40, 50);
var mousePos = new Location(0, 0);
var W = false;
var eraserSize = 15;
var shift = false;
var drawingSize = 20;
var currentTool = "camera";
var lastTool = "camera";
var leaveCameraOnReleaseR = false;
var label = false;
var gridDetail = 1;
shadeLines = false;
var hints = new Array(new Array("", "Restart ( ENTER )", "Cancel checkpoint ( BACKSPACE )", "", "Switch bike ( B - Arrows to control, Z to turn )", "", "Enable line shading", "Enable fullscreen ( F )"), new Array("Brush ( A - Hold to snap, hold & scroll to adjust size )", "Scenery brush ( S - Hold to snap, hold & scroll to adjust size )", "Lines ( Q - Hold to snap )", "Scenery lines ( W - Hold to snap )", "Eraser ( E - Hold & scroll to adjust size )", "Camera ( R - Release or press again to switch back, scroll to zoom )", "Enable grid snapping ( G )", "", "Goal", "Checkpoint", "Boost", "Gravity modifier", "Bomb", "", "Shorten last set of lines ( Z )"));
var lastForeground = new Location(40, 50);
var lastScenery = new Location(-40, 50);

function canvas_ride(DZ, Db) {
    theTrack = new track(DZ, Db);
    AP = currentBike == "BMX" ? new Bk : new Bn;
    focus = AP.h;
    setInterval(run, 40);
}

function run() {
    if (!paused) {
        AP.AO();
        if (W) {
            W.AO();
        }
    }
    theTrack.draw();
    AP.draw();
    if (W) {
        W.draw();
    }
    if (!paused) {
        AP.z += 40;
    }
}
function watchGhost(DX) {
    var request = new XMLHttpRequest;
    request.open("POST", "js/load.php", false);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("track=" + theTrack.ID + "&ghost=" + DX);
    var DW = request.responseText;
    var CJ = DW.split(",");
    theTrack.AT = new Array(new Array, new Array, new Array, new Array, new Array, CJ[5], CJ[6]);
    for (var BD = 0; BD < CJ.length - 2; BD++) {
        var DT = CJ[BD].split(" ");
        for (var Ay = 0; Ay < DT.length - 1; Ay++) {
            theTrack.AT[BD][DT[Ay]] = 1;
        }
    }
    W = CJ[5];
    theTrack.Cs();
}
function switchBikes() {
    currentBike = currentBike == "BMX" ? "MTB" : "BMX";
    theTrack.Cs();
}
function toggleFullscreen() {
    if (theTrack.ID != "banner" && canvas.width != 250) {
        if (canvas.width == 600) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.position = "fixed";
            canvas.style.top = 0;
            canvas.style.left = 0;
            canvas.style.border = "none";
            if (document.documentElement.offsetHeight <= window.innerHeight) {
                toolbar2.style.left = canvas.width - 24 + "px";
            } else {
                toolbar2.style.left = canvas.width - 39 + "px";
            }
            label[2] = hints[0][7] = "Disable fullscreen ( ESC or F )";
            window.scrollTo(0, 0);
            canvas.style.zIndex = 3;
            toolbar1.style.zIndex = toolbar2.style.zIndex = 4;
        } else {
            canvas.width = 600;
            canvas.height = 400;
            canvas.style.position = "static";
            canvas.style.border = "1px solid black";
            toolbar2.style.left = canvas.offsetLeft + canvas.width - 22 + "px";
            label[2] = hints[0][7] = "Enable fullscreen ( F )";
            canvas.style.zIndex = 2;
            toolbar1.style.zIndex = toolbar2.style.zIndex = 2;
        }
        graphics.lineCap = "round";
        graphics.lineJoin = "round";
        graphics.font = "8px eiven";
        toolbar1.style.top = toolbar2.style.top = canvas.offsetTop + "px";
        toolbar1.style.left = canvas.offsetLeft + "px";
    }
}
document.onkeydown = function (event) {
    switch (event.keyCode) {
    case 8: // backspace
        if (canvas.width != 250) {
            event.preventDefault();
        }
        theTrack.popCheckpoint();
        theTrack.restart();
        break;
    case 13: // enter
        event.preventDefault();
        theTrack.restart();
        break;
    case 37: // left
        event.preventDefault();
        focus = AP.h;
        left = 1;
        break;
    case 39: // right
        event.preventDefault();
        focus = AP.h;
        right = 1;
        break;
    case 38: // up
        event.preventDefault();
        focus = AP.h;
        up = 1;
        break;
    case 40: // down
        event.preventDefault();
        focus = AP.h;
        down = 1;
        break;
    case 109: // minus
        if (theTrack.zoomFactor > 0.2) {
            theTrack.zoomFactor = Math.round(theTrack.zoomFactor * 10 - 2) / 10;
            theTrack.Ax = new Array;
        }
        break;
    case 107: // plus
        if (theTrack.zoomFactor < 4) {
            theTrack.zoomFactor = Math.round(theTrack.zoomFactor * 10 + 2) / 10;
            theTrack.Ax = new Array;
        }
        break;
    case 90: // Z
        if (!focus && theTrack.ID == undefined) {
            theTrack.shortenLastLineSet();
        } else if (Ct) {
            Aq = 1;
        }
        break;
    case 32: // space
        if (canvas.width != 250) {
            event.preventDefault();
        }
        paused = !paused;
        break;
    default:
        ;
    }
    if (theTrack.ID == undefined) {
        switch (event.keyCode) {
        case 65:
            if (currentTool != "brush") {
                currentTool = "brush";
                document.body.style.cursor = "none";
                shift = true;
            } else if (!snapFromPrevLine) {
                snapFromPrevLine = true;
                lastClick.set(lastForeground);
                shift = true;
            }
            break;
        case 83: // S
            if (currentTool != "scenery brush") {
                currentTool = "scenery brush";
                document.body.style.cursor = "none";
                shift = true;
            } else if (!snapFromPrevLine) {
                snapFromPrevLine = true;
                lastClick.set(lastScenery);
                shift = true;
            }
            break;
        case 81:
            if (currentTool != "line") {
                currentTool = "line";
                document.body.style.cursor = "none";
            } else if (!snapFromPrevLine) {
                snapFromPrevLine = true;
                lastClick.set(lastForeground);
                shift = true;
            }
            break;
        case 87:
            if (currentTool != "scenery line") {
                currentTool = "scenery line";
                document.body.style.cursor = "none";
            } else if (!snapFromPrevLine) {
                snapFromPrevLine = true;
                lastClick.set(lastScenery);
                shift = true;
            }
            break;
        case 69:
            currentTool = "eraser";
            document.body.style.cursor = "none";
            shift = true;
            break;
        case 82: // R
            if (currentTool != "camera") {
                lastTool = currentTool;
                currentTool = "camera";
                document.body.style.cursor = "move";
            } else {
                leaveCameraOnReleaseR = true;
            }
            break;
        default:
            ;
        }
    }
};
document.onkeypress = function (event) {
    switch (event.keyCode) {
    case 13: // enter
    case 37: // left
    case 39: // right
    case 38: // up
    case 40: // down
        event.preventDefault();
        break;
    case 8: // backspace
    case 32: // space
        if (canvas.width != 250) {
            event.preventDefault();
        }
        break;
    default:
        ;
    }
};
document.onkeyup = function (event) {
    switch (event.keyCode) {
    case 70:
    case 27: // esc, f
        toggleFullscreen();
        break;
    case 66: // B
        switchBikes();
        break;
    case 37:
        left = 0;
        break;
    case 39:
        right = 0;
        break;
    case 38:
        up = 0;
        break;
    case 40:
        down = 0;
        break;
    case 90: // Z
        Ct = true;
        break;
    case 71: // grid snapping (G)
        if (gridDetail == 1) {
            gridDetail = 10;
            hints[1][6] = "Disable grid snapping ( G )";
        } else {
            gridDetail = 1;
            hints[1][6] = "Enable grid snapping ( G )";
        }
        break;
    case 82: // R (camera toggle)
        if (leaveCameraOnReleaseR) {
            currentTool = lastTool;
            document.body.style.cursor = "none";
            leaveCameraOnReleaseR = false;
        }
        break;
    case 49: // 1
    case 50: // 2
    case 51: // 3
    case 52: // 4
    case 53: // 5
        if (theTrack.ID != undefined) {
            watchGhost(event.keyCode - 48);
        }
        break;
    case 81: // Q
    case 87: // W
    case 69: // E
    case 83: // S
    case 65: // A
        if (shift) {
            shift = false;
            snapFromPrevLine = false;
        }
        break;
    default:
        ;
    }
};
toolbar1.onmousemove = function (event) {
    var G = Math.floor((event.clientY - toolbar1.offsetTop + window.pageYOffset) / 25);
    label = new Array(0, G, hints[0][G]);
};
toolbar2.onmousemove = function (event) {
    var G = Math.floor((event.clientY - toolbar2.offsetTop + window.pageYOffset) / 25);
    label = new Array(1, G, hints[1][G]);
    if (G == 14) {
        if (currentTool == "sline" || currentTool == "sbrush") {
            label[2] = "Shorten last set of scenery lines ( Z )";
        }
    }
};
toolbar1.onmousedown = function (event) {
    focus = false;
    switch (Math.floor((event.clientY - toolbar1.offsetTop + window.pageYOffset) / 25) + 1) {
    case 1:
        paused = !paused;
        break;
    case 3:
        theTrack.popCheckpoint();
    case 2:
        theTrack.restart();
        break;
    case 5:
        switchBikes();
        break;
    case 7:
        if (!shadeLines) {
            shadeLines = true;
            label[2] = hints[0][6] = "Disable line shading";
        } else {
            shadeLines = false;
            label[2] = hints[0][6] = "Enable line shading";
        }
        theTrack.Ax = new Array;
        break;
    case 8:
        toggleFullscreen();
        break;
    default:
        ;
    }
};
toolbar2.onmousedown = function (event) {
    if (theTrack.ID != undefined) return false;
    focus = false;
    switch (Math.floor((event.clientY - toolbar1.offsetTop + window.pageYOffset) / 25) + 1) {
    case 1:
        currentTool = "brush";
        break;
    case 2:
        currentTool = "scenery brush";
        break;
    case 3:
        currentTool = "line";
        break;
    case 4:
        currentTool = "scenery line";
        break;
    case 5:
        currentTool = "eraser";
        break;
    case 6:
        currentTool = "camera";
        break;
    case 7:
        if (gridDetail == 1) {
            gridDetail = 10;
            label[2] = hints[1][6] = "Disable grid snapping ( G )";
        } else {
            gridDetail = 1;
            label[2] = hints[1][6] = "Enable grid snapping ( G )";
        }
        break;
    case 9:
        currentTool = "goal";
        break;
    case 10:
        currentTool = "checkpoint";
        break;
    case 11:
        currentTool = "boost";
        break;
    case 12:
        currentTool = "gravity";
        break;
    case 13:
        currentTool = "bomb";
        break;
    case 15:
        theTrack.shortenLastLineSet();
        break;
    default:
        ;
    }
};
canvas.onmouseover = function () {
    label = false;
    if (currentTool == "camera") {
        document.body.style.cursor = "move";
    } else {
        document.body.style.cursor = "none";
    }
};
canvas.onmousedown = function (event) {
    snapFromPrevLine = true;
    focus = false;
    if (!shift) {
        lastClick.set(mousePos);
    }
    switch (currentTool) {
    case "boost":
    case "gravity":
        document.body.style.cursor = "crosshair";
        break;
    case "eraser":
        theTrack.checkDelete(mousePos);
        break;
    case "goal":
        var Ag = new target(lastClick.x, lastClick.y);
        theTrack.numTargets++;
        theTrack.objects.push(Ag);
        break;
    case "checkpoint":
        var Ag = new checkpoint(lastClick.x, lastClick.y);
        theTrack.objects.push(Ag);
        break;
    case "bomb":
        var Ag = new bomb(lastClick.x, lastClick.y);
        break;
    case "brush":
    case "scenery brush":
        if (shift) {
            if (currentTool == "brush") {
                var P = new line(lastClick.x, lastClick.y, mousePos.x, mousePos.y);
            } else {
                var P = new B5(lastClick.x, lastClick.y, mousePos.x, mousePos.y);
            }
            if (P.length >= 2 && P.length < 100000) {
                var I = CG(new Location(P.AH.x, P.AH.y), new Location(P.AK.x, P.AK.y), theTrack.q);
                for (var T = 0; T < I.length; T++) {
                    var x = Math.floor(I[T].x / theTrack.q);
                    var y = Math.floor(I[T].y / theTrack.q);
                    if (theTrack.I[x] == undefined) {
                        theTrack.I[x] = new Array;
                    }
                    if (theTrack.I[x][y] == undefined) {
                        theTrack.I[x][y] = new BP;
                    }
                    if (currentTool == "brush") {
                        theTrack.I[x][y].AG.push(P);
                    } else {
                        theTrack.I[x][y].AL.push(P);
                    }
                    delete theTrack.Ax[x + "_" + y];
                }
                if (currentTool == "brush") {
                    lastForeground.set(mousePos);
                } else {
                    lastScenery.set(mousePos);
                }
                lastClick.set(mousePos);
            }
        }
        shift = false;
        snapFromPrevLine = true;
        break;
    default:
        ;
    }
    if (Ag != undefined) {
        var x = Math.floor(Ag.place.x / theTrack.q);
        var y = Math.floor(Ag.place.y / theTrack.q);
        if (theTrack.I[x] == undefined) {
            theTrack.I[x] = new Array;
        }
        if (theTrack.I[x][y] == undefined) {
            theTrack.I[x][y] = new BP(x, y);
        }
        theTrack.I[x][y].objects.push(Ag);
    }
};
document.onmousemove = function (event) {
    if (currentTool != "camera") {
        focus = false;
    }
    mousePos = (new Location(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop + window.pageYOffset)).normalizeToCanvas();
    if (currentTool != "eraser") {
        mousePos.x = Math.round(mousePos.x / gridDetail) * gridDetail;
        mousePos.y = Math.round(mousePos.y / gridDetail) * gridDetail;
    }
    if (snapFromPrevLine) {
        if (currentTool == "camera") {
            theTrack.cameraCenter.add(lastClick.cloneSub(mousePos));
            mousePos.set(lastClick);
        } else if (currentTool == "eraser") {
            theTrack.checkDelete(mousePos);
        } else if ((currentTool == "brush" || currentTool == "scenery brush") && lastClick.cloneSub(mousePos).length() >= drawingSize && !shift) {
            if (currentTool == "brush") {
                var P = new line(lastClick.x, lastClick.y, mousePos.x, mousePos.y);
            } else {
                var P = new B5(lastClick.x, lastClick.y, mousePos.x, mousePos.y);
            }
            var I = CG(new Location(P.AH.x, P.AH.y), new Location(P.AK.x, P.AK.y), theTrack.q);
            for (var T = 0; T < I.length; T++) {
                var x = Math.floor(I[T].x / theTrack.q);
                var y = Math.floor(I[T].y / theTrack.q);
                if (theTrack.I[x] == undefined) {
                    theTrack.I[x] = new Array;
                }
                if (theTrack.I[x][y] == undefined) {
                    theTrack.I[x][y] = new BP;
                }
                if (currentTool == "brush") {
                    theTrack.I[x][y].AG.push(P);
                } else {
                    theTrack.I[x][y].AL.push(P);
                }
                delete theTrack.Ax[x + "_" + y];
            }
            if (currentTool == "brush") {
                lastForeground.set(mousePos);
            } else {
                lastScenery.set(mousePos);
            }
            lastClick.set(mousePos);
        }
    }
};
canvas.onmouseup = function () {
    if (snapFromPrevLine) {
        if (currentTool == "line" || currentTool == "scenery line" || currentTool == "brush" || currentTool == "scenery brush") {
            if (currentTool == "line" || currentTool == "brush") {
                var P = new line(lastClick.x, lastClick.y, mousePos.x, mousePos.y);
            } else {
                var P = new B5(lastClick.x, lastClick.y, mousePos.x, mousePos.y);
            }
            if (P.length >= 2 && P.length < 100000) {
                var I = CG(new Location(P.AH.x, P.AH.y), new Location(P.AK.x, P.AK.y), theTrack.q);
                for (var T = 0; T < I.length; T++) {
                    var x = Math.floor(I[T].x / theTrack.q);
                    var y = Math.floor(I[T].y / theTrack.q);
                    if (theTrack.I[x] == undefined) {
                        theTrack.I[x] = new Array;
                    }
                    if (theTrack.I[x][y] == undefined) {
                        theTrack.I[x][y] = new BP;
                    }
                    if (currentTool == "line" || currentTool == "brush") {
                        theTrack.I[x][y].AG.push(P);
                    } else {
                        theTrack.I[x][y].AL.push(P);
                    }
                    delete theTrack.Ax[x + "_" + y];
                }
                if (currentTool == "line" || currentTool == "brush") {
                    lastForeground.set(mousePos);
                } else {
                    lastScenery.set(mousePos);
                }
                lastClick.set(mousePos);
            }
        } else if (currentTool == "boost" || currentTool == "gravity") {
            document.body.style.cursor = "none";
            var Ag = currentTool == "boost" ? new boost(lastClick.x, lastClick.y, Math.round(Math.atan2(-(mousePos.x - lastClick.x), mousePos.y - lastClick.y) * 180 / Math.PI)) : new gravity(lastClick.x, lastClick.y, Math.round(Math.atan2(-(mousePos.x - lastClick.x), mousePos.y - lastClick.y) * 180 / Math.PI));
            var x = Math.floor(Ag.place.x / theTrack.q);
            var y = Math.floor(Ag.place.y / theTrack.q);
            if (theTrack.I[x] == undefined) {
                theTrack.I[x] = new Array;
            }
            if (theTrack.I[x][y] == undefined) {
                theTrack.I[x][y] = new BP(x, y);
            }
            theTrack.I[x][y].objects.push(Ag);
        }
    }
};
document.onmouseup = function () {
    if (!shift) {
        snapFromPrevLine = false;
    }
};
canvas.onmouseout = function () {
    document.body.style.cursor = "default";
};
document.getElementById("new").onclick = function () {
    if (confirm("Do you really want to start a new track?")) {
        theTrack = new track;
        document.getElementById("charcount").innerHTML = "Trackcode";
        document.getElementById("trackcode").value = null;
        theTrack.Cs();
    }
};
document.getElementById("load").onclick = function () {
    if (document.getElementById("trackcode").value.length > 10) {
        theTrack = new track(document.getElementById("trackcode").value);
        document.getElementById("charcount").innerHTML = "Trackcode";
        document.getElementById("trackcode").value = null;
        theTrack.Cs();
    } else {
        alert("No trackcode to load!");
    }
};
document.getElementById("save").onclick = function () {
    if (theTrack.ID == undefined) {
        document.getElementById("trackcode").value = theTrack.asString();
        document.getElementById("trackcode").select();
        document.getElementById("charcount").innerHTML = "Trackcode - " + Math.round(document.getElementById("trackcode").value.length / 1000) + "k - CTRL + C to copy";
    }
};
document.getElementById("upload").onclick = function () {
    var Ao = document.cookie.indexOf("; ID=");
    if (Ao == -1 && !document.cookie.indexOf("ID=")) {
        Ao = -2;
    }
    if (Ao != -1) {
        Ao += 5;
        var end = document.cookie.indexOf(";", Ao);
        if (end == -1) {
            end = document.cookie.length;
        }
        var Dc = document.cookie.substring(Ao, end);
        var DH = theTrack.asString();
        if (DH.length > 2000) {
            paused = true;
            currentTool = "camera";
            canvas.width = 250;
            canvas.height = 150;
            toolbar1.style.display = "none";
            toolbar2.style.display = "none";
            graphics.lineCap = "round";
            graphics.lineJoin = "round";
            document.getElementById("track_menu").style.display = "none";
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("id", "name");
            input.setAttribute("size", 18);
            input.setAttribute("maxlength", 20);
            var submit = document.createElement("input");
            submit.setAttribute("type", "submit");
            submit.setAttribute("value", "SAVE NAME & THUMBNAIL");
            submit.onclick = function () {
                var DE = canvas.toDataURL("image/png");
                if (DE == "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACWCAYAAAD32pUcAAAAp0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBrSqQAAZytjkAAAAAASUVORK5CYII=") {
                    alert("The thumbnail is blank!\nDrag & fit an interesting part of your track inside.");
                    return false;
                }
                var name = input.value;
                if (name.length < 4) {
                    alert("The track name is too short!");
                    return false;
                }
                if (!/^[\w\s]+$/.test(name)) {
                    alert("No special characters allowed in the track name!");
                    return false;
                }
                submit.disabled = "disabled";
                var request = new XMLHttpRequest;
                request.open("POST", "js/save.php", false);
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send("authorID=" + Dc + "&name=" + name + "&code=" + DH);
                var Cz = request.responseText;
                if (Cz == "") {
                    alert("Your track was refused.");
                    return false;
                }
                request.open("POST", "js/save.php?thumbnailID=" + Cz, false);
                request.send(DE);
                location.href = "http://canvasrider.com/tracks/" + Cz;
            };
            var Bc = document.createElement("div");
            Bc.appendChild(input);
            Bc.appendChild(document.createTextNode(" "));
            Bc.appendChild(submit);
            document.getElementById("content").insertBefore(Bc, canvas.nextSibling);
            var adjust = document.createElement("div");
            adjust.style.color = canvas.style.borderColor = "red";
            adjust.innerHTML = "Use your mouse to drag & fit an interesting part of your track in the thumbnail<br/><br/>";
            document.getElementById("content").insertBefore(adjust, p);
        } else {
            alert("Sorry, but your track must be bigger or more detailed.");
            return false;
        }
    }
};

function onScroll(event) {
    if (theTrack.ID != "banner") {
        event.preventDefault();
        if (shift) {
            if (currentTool == "eraser") {
                if ((event.detail > 0 || event.wheelDelta < 0) && eraserSize > 5) {
                    eraserSize -= 5;
                } else if ((event.detail < 0 || event.wheelDelta > 0) && eraserSize < 40) {
                    eraserSize += 5;
                }
            } else if (currentTool == "brush" || currentTool == "scenery brush") {
                if ((event.detail > 0 || event.wheelDelta < 0) && drawingSize > 4) {
                    drawingSize -= 8;
                } else if ((event.detail < 0 || event.wheelDelta > 0) && drawingSize < 200) {
                    drawingSize += 8;
                }
            }
        } else {
            if ((event.detail > 0 || event.wheelDelta < 0) && theTrack.zoomFactor > 0.2) {
                theTrack.zoomFactor = Math.round(theTrack.zoomFactor * 10 - 2) / 10;
            } else if ((event.detail < 0 || event.wheelDelta > 0) && theTrack.zoomFactor < 4) {
                theTrack.zoomFactor = Math.round(theTrack.zoomFactor * 10 + 2) / 10;
            }
            theTrack.Ax = new Array;
        }
        var Cw = (new Location(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop + window.pageYOffset)).normalizeToCanvas();
        if (!focus) {
            theTrack.cameraCenter.add(mousePos.cloneSub(Cw));
        }
    }
}
canvas.addEventListener("DOMMouseScroll", onScroll, false);
canvas.addEventListener("mousewheel", onScroll, false);