// Canvas Rider RC7 by Pete & Maxime, a canvasrider.com exclusive


function J(x, y) {
    this.x = x;
    this.y = y;
}
J.prototype.o = function () {
    return new J((this.x - C.A5.x) * C.H + p.width / 2, (this.y - C.A5.y) * C.H + p.height / 2);
};
J.prototype.Cr = function () {
    return new J((this.x - p.width / 2) / C.H + C.A5.x, (this.y - p.height / 2) / C.H + C.A5.y);
};
J.prototype.AN = function (U) {
    this.x = U.x;
    this.y = U.y;
};
J.prototype.Ai = function (U) {
    this.x += U.x;
    this.y += U.y;
};
J.prototype.add = function (U) {
    return new J(this.x + U.x, this.y + U.y);
};
J.prototype.sub = function (U) {
    return new J(this.x - U.x, this.y - U.y);
};
J.prototype.F = function (DF) {
    return new J(this.x * DF, this.y * DF);
};
J.prototype.Bd = function (U) {
    return this.x * U.x + this.y * U.y;
};
J.prototype.Bc = function (Cw) {
    return new J(this.x / Cw, this.y / Cw);
};
J.prototype.length = function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};
J.prototype.Ae = function () {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2);
};

function Ah(G, parent) {
    this.G = new J(G.x, G.y);
    this._ = new J(G.x, G.y);
    this.g = new J(0, 0);
    this.parent = parent;
    this.Al = 10;
    this.B6 = 0;
    this.Ad = true;
}
Ah.prototype.drive = function (O) {
    this.G.Ai(O.F(-O.Bd(this.g) * this.B6));
    this.BR = true;
};
Ah.prototype.AO = function () {
    this.g.Ai(this.parent.Af);
    this.g = this.g.F(0.99);
    this.G.Ai(this.g);
    this.BR = false;
    if (this.Ad) {
        C.Ad(this);
    }
    this.g = this.G.sub(this._);
    this._.AN(this.G);
};

function Ba(G, parent) {
    this.G = new J(G.x, G.y);
    this._ = new J(G.x, G.y);
    this.g = new J(0, 0);
    this.parent = parent;
    this.Al = 10;
    this.B6 = 0;
    this.Ad = true;
    this.Af = true;
    this.Bq = 0;
    this.AX = 0;
}
Ba.prototype.drive = function (O) {
    this.G.Ai(O.F(this.AX * this.parent.O));
    if (this.AR) {
        this.G.Ai(O.F(-O.Bd(this.g) * 0.3));
    }
    this.Bq = O.Bd(this.g) / this.Al;
    this.BR = true;
};
Ba.prototype.AO = function () {
    this.g.Ai(this.parent.Af);
    this.g = this.g.F(0.99);
    this.G.Ai(this.g);
    this.BR = false;
    if (this.Ad) {
        C.Ad(this);
    }
    this.g = this.G.sub(this._);
    this._.AN(this.G);
};

function By(G, parent) {
    this.G = new J(G.x + 5 * (Math.random() - Math.random()), G.y + 5 * (Math.random() - Math.random()));
    this._ = new J(this.G.x, this.G.y);
    this.g = new J(11 * (Math.random() - Math.random()), 11 * (Math.random() - Math.random()));
    this.parent = parent;
    this.Al = 2 + Math.random() * 9;
    this.Ak = Math.random() * 6.2;
    this.Bq = Math.random() - Math.random();
    this.B6 = 0.05;
    this.Ad = true;
    this.DG = new Array(1, 0.7, 0.8, 0.9, 0.5, 1, 0.7, 1);
}
By.prototype.Am = function () {
    var M = this.G.o();
    this.Ak += this.Bq;
    var AS = this.DG[0] * this.Al / 2;
    var L = M.x + AS * Math.cos(this.Ak);
    var N = M.y + AS * Math.sin(this.Ak);
    B.beginPath();
    B.fillStyle = "black";
    B.moveTo(L, N);
    for (var AA = 2; AA < 8; AA++) {
        AS = this.DG[AA - 1] * this.Al / 2;
        L = M.x + AS * Math.cos(this.Ak + 6.283 * AA / 8);
        N = M.y + AS * Math.sin(this.Ak + 6.283 * AA / 8);
        B.lineTo(L, N);
    }
    B.fill();
};
By.prototype.drive = function (O) {
    this.Bq = O.Bd(this.g) / this.Al;
    this.G.Ai(O.F(-O.Bd(this.g) * this.B6));
    this.Ak += this.Bq;
    var AA = O.length();
    if (AA > 0) {
        var AS = new J(-O.y / AA, O.x / AA);
        this._.Ai(AS.F(AS.Bd(this.g) * 0.8));
    }
};
By.prototype.AO = function () {
    this.g.Ai(this.parent.Af);
    this.g = this.g.F(0.99);
    this.G.Ai(this.g);
    this.BR = false;
    if (this.Ad) {
        C.Ad(this);
    }
    this.g = this.G.sub(this._);
    this._.AN(this.G);
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
    var AJ = this.A4.G.sub(this.A2.G);
    var DU = new J(-AJ.y / this.AB, AJ.x / this.AB);
    this.A2.G.Ai(DU.F(Bz));
    this.A4.G.Ai(DU.F(-Bz));
};
Ac.prototype.AO = function () {
    var AJ = this.A4.G.sub(this.A2.G);
    var length = AJ.length();
    if (length < 1) {
        return;
    }
    AJ = AJ.F(1 / length);
    var DD = AJ.F((length - this.AB) * this.BC);
    var B6 = this.A4.g.sub(this.A2.g).Bd(AJ) * this.BE;
    DD.Ai(AJ.F(B6));
    this.A4.g.Ai(DD.F(-1));
    this.A2.g.Ai(DD);
};
Ac.prototype.Aq = function () {
    var CE = new J;
    CE.AN(this.A2.G);
    this.A2.G.AN(this.A4.G);
    this.A4.G.AN(CE);
    CE.AN(this.A2._);
    this.A2._.AN(this.A4._);
    this.A4._.AN(CE);
    CE.AN(this.A2.g);
    this.A2.g.AN(this.A4.g);
    this.A4.g.AN(CE);
    var Da = this.A2.Ak;
    this.A2.Ak = this.A4.Ak;
    this.A4.Ak = Da;
};

function Bk() {
    this.D = new Array;
    this.D.push(new Ah(new J(Z[Z.length - 1][0], Z[Z.length - 1][1]), this));
    this.D[0]._ = new J(Z[Z.length - 1][2], Z[Z.length - 1][3]);
    this.D[0].g = new J(Z[Z.length - 1][4], Z[Z.length - 1][5]);
    this.D.push(new Ba(new J(Z[Z.length - 1][6], Z[Z.length - 1][7]), this));
    this.D[1]._ = new J(Z[Z.length - 1][8], Z[Z.length - 1][9]);
    this.D[1].g = new J(Z[Z.length - 1][10], Z[Z.length - 1][11]);
    this.D[1].AX = Z[Z.length - 1][12];
    this.D.push(new Ba(new J(Z[Z.length - 1][13], Z[Z.length - 1][14]), this));
    this.D[2]._ = new J(Z[Z.length - 1][15], Z[Z.length - 1][16]);
    this.D[2].g = new J(Z[Z.length - 1][17], Z[Z.length - 1][18]);
    this.D[2].AX = Z[Z.length - 1][19];
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
    this.AM.AB = Z[Z.length - 1][20];
    this.AM.BC = 0.35;
    this.AM.BE = 0.3;
    this.AQ = this.S[1];
    this.AQ.A1 = 42;
    this.AQ.AB = Z[Z.length - 1][21];
    this.AQ.BC = 0.35;
    this.AQ.BE = 0.3;
    this.AU = this.S[2];
    this.AU.A1 = 45;
    this.AU.AB = Z[Z.length - 1][22];
    this.AU.BC = 0.35;
    this.AU.BE = 0.3;
    this.save = false;
    this.A9 = false;
    this.At = 0;
    this.O = Z[Z.length - 1][23];
    this.Af = new J(Z[Z.length - 1][24], Z[Z.length - 1][25]);
    this.A8 = Z[Z.length - 1][26];
    C.Be = Z[Z.length - 1][27];
    for (var j = 0; j < C.AD.length; j++) {
        C.AD[j].BM = Z[Z.length - 1][28][j];
    }
    this.Bj = 0;
    this.Bm = 0;
    this.Br = 0;
    this.Bo = 0;
    this.z = Z[Z.length - 1][29];
    if (this.z) {
        this.Bj = Z[Z.length - 1][30];
        this.Bm = Z[Z.length - 1][31];
        this.Br = Z[Z.length - 1][32];
        this.Bo = Z[Z.length - 1][33];
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
    if (C.BU && C.Be == C.BU) {
        if (this.z > 5000 && (!C.z || this.z < C.z) && (AZ[0].length || AZ[1].length) && C.ID != undefined) {
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
                    request.send("trackID=" + C.ID + "&playerID=" + ID + "&vehicle=" + B3 + "&time=" + this.z + "&controls=" + AT);
                }
            } else {
                alert("You just set a new track record!\nRegister & log in to save your run next time!");
            }
            left = right = AW = AR = 0;
        }
    } else {
        Z.push(new Array(this.D[0].G.x, this.D[0].G.y, this.D[0]._.x, this.D[0]._.y, this.D[0].g.x, this.D[0].g.y, this.D[1].G.x, this.D[1].G.y, this.D[1]._.x, this.D[1]._.y, this.D[1].g.x, this.D[1].g.y, this.D[1].AX, this.D[2].G.x, this.D[2].G.y, this.D[2]._.x, this.D[2]._.y, this.D[2].g.x, this.D[2].g.y, this.D[2].AX, this.S[0].AB, this.S[1].AB, this.S[2].AB, this.O, this.Af.x, this.Af.y, this.A8, C.Be, new Array, this.z, this.Bj, this.Bm, this.Br, this.Bo));
        for (var j = 0; j < C.AD.length; j++) {
            Z[Z.length - 1][28].push(C.AD[j].BM);
        }
        if (W) {
            K.push(new Array(W.D[0].G.x, W.D[0].G.y, W.D[0]._.x, W.D[0]._.y, W.D[0].g.x, W.D[0].g.y, W.D[1].G.x, W.D[1].G.y, W.D[1]._.x, W.D[1]._.y, W.D[1].g.x, W.D[1].g.y, W.D[1].AX, W.D[2].G.x, W.D[2].G.y, W.D[2]._.x, W.D[2]._.y, W.D[2].g.x, W.D[2].g.y, W.D[2].AX, W.S[0].AB, W.S[1].AB, W.S[2].AB, W.O, W.Af.x, W.Af.y, W.A8, W.left, W.right, W.AW, W.AR));
        }
    }
};
Bk.prototype.BS = function () {
    if (Aq) {
        this.Aq();
    }
    this.Q.AX += (AW - this.D[1].AX) / 10;
    if (AW) {
        this.At += this.Q.Bq / 5;
    }
    this.Q.AR = this.AI.AR = AR;
    var As = left - right;
    this.AM.A3(As * 5 * this.O, 5);
    this.AU.A3(-As * 5 * this.O, 5);
    this.AQ.rotate(As / 6);
    if (!As && AW) {
        this.AM.A3(-7, 5);
        this.AU.A3(7, 5);
    }
};
Bk.prototype.Am = function () {
    var Q = this.Q.G.o();
    var AI = this.AI.G.o();
    B.beginPath();
    B.strokeStyle = "black";
    B.lineWidth = 3.5 * C.H;
    B.arc(Q.x, Q.y, 10 * C.H, 0, 2 * Math.PI, true);
    B.moveTo(AI.x + 10 * C.H, AI.y);
    B.arc(AI.x, AI.y, 10 * C.H, 0, 2 * Math.PI, true);
    B.stroke();
    var length = AI.sub(Q);
    var AC = new J((AI.y - Q.y) * this.O, (Q.x - AI.x) * this.O);
    var A$ = Q.add(length.F(0.3)).add(AC.F(0.25));
    var Ca = Q.add(length.F(0.84)).add(AC.F(0.42));
    var Cf = Q.add(length.F(0.84)).add(AC.F(0.37));
    var BG = Q.add(length.F(0.4)).add(AC.F(0.05));
    B.beginPath();
    B.lineWidth = 3 * C.H;
    B.moveTo(Q.x, Q.y);
    B.lineTo(A$.x, A$.y);
    B.lineTo(Ca.x, Ca.y);
    B.moveTo(Cf.x, Cf.y);
    B.lineTo(BG.x, BG.y);
    B.lineTo(Q.x, Q.y);
    var CY = new J(6 * Math.cos(this.At) * C.H, 6 * Math.sin(this.At) * C.H);
    var BV = BG.add(CY);
    var BW = BG.sub(CY);
    B.moveTo(BV.x, BV.y);
    B.lineTo(BW.x, BW.y);
    var CS = Q.add(length.F(0.17)).add(AC.F(0.38));
    var Cg = Q.add(length.F(0.3)).add(AC.F(0.45));
    B.moveTo(CS.x, CS.y);
    B.lineTo(Cg.x, Cg.y);
    var Ci = Q.add(length.F(0.25)).add(AC.F(0.4));
    B.moveTo(BG.x, BG.y);
    B.lineTo(Ci.x, Ci.y);
    var Cj = Q.add(length.F(1)).add(AC.F(0));
    var Cl = Q.add(length.F(0.97)).add(AC.F(0));
    var CO = Q.add(length.F(0.8)).add(AC.F(0.48));
    var CQ = Q.add(length.F(0.86)).add(AC.F(0.5));
    var Ck = Q.add(length.F(0.82)).add(AC.F(0.65));
    var BL = Q.add(length.F(0.78)).add(AC.F(0.67));
    B.moveTo(Cj.x, Cj.y);
    B.lineTo(Cl.x, Cl.y);
    B.lineTo(CO.x, CO.y);
    B.lineTo(CQ.x, CQ.y);
    B.lineTo(Ck.x, Ck.y);
    B.lineTo(BL.x, BL.y);
    B.stroke();
    if (this.A9) {
        return;
    }
    var h = this.h.G.o();
    AC = h.sub(Q.add(length.F(0.5)));
    var An = A$.add(length.F(-0.1)).add(AC.F(0.3));
    var Ar = BV.sub(An);
    var BA = new J(Ar.y * this.O, -Ar.x * this.O);
    BA = BA.F(C.H * C.H);
    var Cn = An.add(Ar.F(0.5)).add(BA.F(200 / Ar.Ae()));
    Ar = BW.sub(An);
    BA = new J(Ar.y * this.O, -Ar.x * this.O);
    BA = BA.F(C.H * C.H);
    var Co = An.add(Ar.F(0.5)).add(BA.F(200 / Ar.Ae()));
    B.beginPath();
    B.lineWidth = 6 * C.H;
    B.strokeStyle = "rgba(0, 0, 0, 0.5)";
    B.moveTo(BW.x, BW.y);
    B.lineTo(Co.x, Co.y);
    B.lineTo(An.x, An.y);
    B.stroke();
    B.beginPath();
    B.strokeStyle = "black";
    B.moveTo(BV.x, BV.y);
    B.lineTo(Cn.x, Cn.y);
    B.lineTo(An.x, An.y);
    B.stroke();
    var BY = A$.add(length.F(0.05)).add(AC.F(0.9));
    B.beginPath();
    B.lineWidth = 8 * C.H;
    B.moveTo(An.x, An.y);
    B.lineTo(BY.x, BY.y);
    B.stroke();
    var Bs = A$.add(length.F(0.15)).add(AC.F(1.05));
    var Ch = A$.add(length.F(0.4)).add(AC.F(1.1));
    var Cd = A$.add(length.F(0.05)).add(AC.F(1.05));
    B.beginPath();
    B.lineWidth = 2 * C.H;
    B.moveTo(Bs.x + 5 * C.H, Bs.y);
    B.arc(Bs.x, Bs.y, 5 * C.H, 0, 2 * Math.PI, true);
    B.moveTo(Ch.x, Ch.y);
    B.lineTo(Cd.x, Cd.y);
    B.stroke();
    length = BY.sub(BL);
    AC = new J(length.y * this.O, -length.x * this.O);
    AC = AC.F(C.H * C.H);
    var CV = BL.add(length.F(0.4)).add(AC.F(130 / length.Ae()));
    B.beginPath();
    B.lineWidth = 5 * C.H;
    B.moveTo(BY.x, BY.y);
    B.lineTo(CV.x, CV.y);
    B.lineTo(BL.x, BL.y);
    B.stroke();
};
Bk.prototype.C1 = function () {
    var $ = new Object;
    var AQ = this.AI.G.sub(this.Q.G);
    var AA = this.h.G.sub(this.AI.G.add(this.Q.G).F(0.5));
    var AS = new J(AQ.y * this.O, -AQ.x * this.O);
    $.h = this.Q.G.add(AQ.F(0.35)).add(AA.F(1.2));
    $.BO = $.B0 = this.Q.G.add(AQ.F(0.8)).add(AS.F(0.68));
    var N = $.h.sub($.BO);
    N = new J(N.y * this.O, -N.x * this.O);
    $.Bx = $.Bu = $.h.add($.BO).F(0.5).add(N.F(130 / N.Ae()));
    $.Ab = this.Q.G.add(AQ.F(0.2)).add(AS.F(0.5));
    var R = new J(6 * Math.cos(this.At), 6 * Math.sin(this.At));
    $.BQ = this.Q.G.add(AQ.F(0.4)).add(AS.F(0.05)).add(R);
    N = $.Ab.sub($.BQ);
    N = new J(-N.y * this.O, N.x * this.O);
    $.Bw = $.Ab.add($.BQ).F(0.5).add(N.F(160 / N.Ae()));
    $.BN = this.Q.G.add(AQ.F(0.4)).add(AS.F(0.05)).sub(R);
    N = $.Ab.sub($.BN);
    N = new J(-N.y * this.O, N.x * this.O);
    $.Bv = $.Ab.add($.BN).F(0.5).add(N.F(160 / N.Ae()));
    return $;
};
Bk.prototype.DB = function () {
    this.A9 = true;
    this.h.drive = function () {};
    this.Q.AX = 0;
    this.Q.AR = false;
    this.AI.AR = false;
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
    if (AW != this.Br) {
        AZ[2][this.z] = 1;
        this.Br = AW;
    }
    if (AR != this.Bo) {
        AZ[3][this.z] = 1;
        this.Bo = AR;
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
    this.D.push(new Ah(new J(K[K.length - 1][0], K[K.length - 1][1]), this));
    this.D[0]._ = new J(K[K.length - 1][2], K[K.length - 1][3]);
    this.D[0].g = new J(K[K.length - 1][4], K[K.length - 1][5]);
    this.D.push(new Ba(new J(K[K.length - 1][6], K[K.length - 1][7]), this));
    this.D[1]._ = new J(K[K.length - 1][8], K[K.length - 1][9]);
    this.D[1].g = new J(K[K.length - 1][10], K[K.length - 1][11]);
    this.D[1].AX = K[K.length - 1][12];
    this.D.push(new Ba(new J(K[K.length - 1][13], K[K.length - 1][14]), this));
    this.D[2]._ = new J(K[K.length - 1][15], K[K.length - 1][16]);
    this.D[2].g = new J(K[K.length - 1][17], K[K.length - 1][18]);
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
    this.Af = new J(K[K.length - 1][24], K[K.length - 1][25]);
    this.A8 = K[K.length - 1][26];
    this.left = K[K.length - 1][27];
    this.right = K[K.length - 1][28];
    this.AW = K[K.length - 1][29];
    this.AR = K[K.length - 1][30];
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
    this.Q.AX += (this.AW - this.D[1].AX) / 10;
    if (this.AW) {
        this.At += this.Q.Bq / 5;
    }
    this.Q.AR = this.AI.AR = this.AR;
    var As = this.left - this.right;
    this.AM.A3(As * 5 * this.O, 5);
    this.AU.A3(-As * 5 * this.O, 5);
    this.AQ.rotate(As / 6);
    if (!As && this.AW) {
        this.AM.A3(-7, 5);
        this.AU.A3(7, 5);
    }
};
Cb.prototype.Am = function () {
    var Q = this.Q.G.o();
    var AI = this.AI.G.o();
    B.beginPath();
    B.strokeStyle = "rgba(0, 0, 0, 0.5)";
    B.lineWidth = 3.5 * C.H;
    B.arc(Q.x, Q.y, 10 * C.H, 0, 2 * Math.PI, true);
    B.moveTo(AI.x + 10 * C.H, AI.y);
    B.arc(AI.x, AI.y, 10 * C.H, 0, 2 * Math.PI, true);
    B.stroke();
    var length = AI.sub(Q);
    var AC = new J((AI.y - Q.y) * this.O, (Q.x - AI.x) * this.O);
    var A$ = Q.add(length.F(0.3)).add(AC.F(0.25));
    var Ca = Q.add(length.F(0.84)).add(AC.F(0.42));
    var Cf = Q.add(length.F(0.84)).add(AC.F(0.37));
    var BG = Q.add(length.F(0.4)).add(AC.F(0.05));
    B.beginPath();
    B.lineWidth = 3 * C.H;
    B.moveTo(Q.x, Q.y);
    B.lineTo(A$.x, A$.y);
    B.lineTo(Ca.x, Ca.y);
    B.moveTo(Cf.x, Cf.y);
    B.lineTo(BG.x, BG.y);
    B.lineTo(Q.x, Q.y);
    var CY = new J(6 * C.H * Math.cos(this.At), 6 * C.H * Math.sin(this.At));
    var BV = BG.add(CY);
    var BW = BG.sub(CY);
    B.moveTo(BV.x, BV.y);
    B.lineTo(BW.x, BW.y);
    var CS = Q.add(length.F(0.17)).add(AC.F(0.38));
    var Cg = Q.add(length.F(0.3)).add(AC.F(0.45));
    B.moveTo(CS.x, CS.y);
    B.lineTo(Cg.x, Cg.y);
    var Ci = Q.add(length.F(0.25)).add(AC.F(0.4));
    B.moveTo(BG.x, BG.y);
    B.lineTo(Ci.x, Ci.y);
    var Cj = Q.add(length.F(1)).add(AC.F(0));
    var Cl = Q.add(length.F(0.97)).add(AC.F(0));
    var CO = Q.add(length.F(0.8)).add(AC.F(0.48));
    var CQ = Q.add(length.F(0.86)).add(AC.F(0.5));
    var Ck = Q.add(length.F(0.82)).add(AC.F(0.65));
    var BL = Q.add(length.F(0.78)).add(AC.F(0.67));
    B.moveTo(Cj.x, Cj.y);
    B.lineTo(Cl.x, Cl.y);
    B.lineTo(CO.x, CO.y);
    B.lineTo(CQ.x, CQ.y);
    B.lineTo(Ck.x, Ck.y);
    B.lineTo(BL.x, BL.y);
    B.stroke();
    var h = this.h.G.o();
    AC = h.sub(Q.add(length.F(0.5)));
    var An = A$.add(length.F(-0.1)).add(AC.F(0.3));
    var Ar = BV.sub(An);
    var BA = new J(Ar.y * this.O, -Ar.x * this.O);
    BA = BA.F(C.H * C.H);
    var Cn = An.add(Ar.F(0.5)).add(BA.F(200 / Ar.Ae()));
    Ar = BW.sub(An);
    BA = new J(Ar.y * this.O, -Ar.x * this.O);
    BA = BA.F(C.H * C.H);
    var Co = An.add(Ar.F(0.5)).add(BA.F(200 / Ar.Ae()));
    B.beginPath();
    B.lineWidth = 6 * C.H;
    B.strokeStyle = "rgba(0, 0, 0, 0.25)";
    B.moveTo(BW.x, BW.y);
    B.lineTo(Co.x, Co.y);
    B.lineTo(An.x, An.y);
    B.stroke();
    B.beginPath();
    B.strokeStyle = "rgba(0, 0, 0, 0.5)";
    B.lineWidth = 6 * C.H;
    B.moveTo(BV.x, BV.y);
    B.lineTo(Cn.x, Cn.y);
    B.lineTo(An.x, An.y);
    B.stroke();
    var BY = A$.add(length.F(0.05)).add(AC.F(0.9));
    B.beginPath();
    B.lineWidth = 8 * C.H;
    B.moveTo(An.x, An.y);
    B.lineTo(BY.x, BY.y);
    B.stroke();
    var Bs = A$.add(length.F(0.15)).add(AC.F(1.05));
    var Ch = A$.add(length.F(0.4)).add(AC.F(1.1));
    var Cd = A$.add(length.F(0.05)).add(AC.F(1.05));
    B.beginPath();
    B.lineWidth = 2 * C.H;
    B.moveTo(Bs.x + 5 * C.H, Bs.y);
    B.arc(Bs.x, Bs.y, 5 * C.H, 0, 2 * Math.PI, true);
    B.moveTo(Ch.x, Ch.y);
    B.lineTo(Cd.x, Cd.y);
    B.stroke();
    length = BY.sub(BL);
    AC = new J(length.y * this.O, -length.x * this.O);
    AC = AC.F(C.H * C.H);
    var CV = BL.add(length.F(0.4)).add(AC.F(130 / length.Ae()));
    B.beginPath();
    B.lineWidth = 5 * C.H;
    B.moveTo(BY.x, BY.y);
    B.lineTo(CV.x, CV.y);
    B.lineTo(BL.x, BL.y);
    B.stroke();
    B.strokeStyle = "black";
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
        this.AW = this.AW ? 0 : 1;
    }
    if (this.AT[3][AP.z]) {
        this.AR = this.AR ? 0 : 1;
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
    this.D.push(new Ah(new J(b[b.length - 1][0], b[b.length - 1][1]), this));
    this.D[0]._ = new J(b[b.length - 1][2], b[b.length - 1][3]);
    this.D[0].g = new J(b[b.length - 1][4], b[b.length - 1][5]);
    this.D.push(new Ba(new J(b[b.length - 1][6], b[b.length - 1][7]), this));
    this.D[1]._ = new J(b[b.length - 1][8], b[b.length - 1][9]);
    this.D[1].g = new J(b[b.length - 1][10], b[b.length - 1][11]);
    this.D[1].AX = b[b.length - 1][12];
    this.D.push(new Ba(new J(b[b.length - 1][13], b[b.length - 1][14]), this));
    this.D[2]._ = new J(b[b.length - 1][15], b[b.length - 1][16]);
    this.D[2].g = new J(b[b.length - 1][17], b[b.length - 1][18]);
    this.D[2].AX = b[b.length - 1][19];
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
    this.AM.AB = b[b.length - 1][20];
    this.AM.BC = 0.2;
    this.AM.BE = 0.3;
    this.AQ = this.S[1];
    this.AQ.A1 = 45;
    this.AQ.AB = b[b.length - 1][21];
    this.AQ.BC = 0.2;
    this.AQ.BE = 0.3;
    this.AU = this.S[2];
    this.AU.A1 = 45;
    this.AU.AB = b[b.length - 1][22];
    this.AU.BC = 0.2;
    this.AU.BE = 0.3;
    this.save = false;
    this.A9 = false;
    this.At = 0;
    this.O = b[b.length - 1][23];
    this.Af = new J(b[b.length - 1][24], b[b.length - 1][25]);
    this.A8 = b[b.length - 1][26];
    C.Be = b[b.length - 1][27];
    for (var j = 0; j < C.AD.length; j++) {
        C.AD[j].BM = b[b.length - 1][28][j];
    }
    this.Bj = 0;
    this.Bm = 0;
    this.Br = 0;
    this.Bo = 0;
    this.z = b[b.length - 1][29];
    if (this.z) {
        this.Bj = b[b.length - 1][30];
        this.Bm = b[b.length - 1][31];
        this.Br = b[b.length - 1][32];
        this.Bo = b[b.length - 1][33];
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
    if (C.BU && C.Be == C.BU) {
        if (this.z > 5000 && (!C.z || this.z < C.z) && (AZ[0].length || AZ[1].length) && C.ID != undefined) {
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
                    request.send("trackID=" + C.ID + "&playerID=" + ID + "&vehicle=" + B3 + "&time=" + this.z + "&controls=" + AT);
                }
            } else {
                alert("You just set a new track record!\nRegister & log in to save your run next time!");
            }
            left = right = AW = AR = 0;
        }
    } else {
        b.push(new Array(this.D[0].G.x, this.D[0].G.y, this.D[0]._.x, this.D[0]._.y, this.D[0].g.x, this.D[0].g.y, this.D[1].G.x, this.D[1].G.y, this.D[1]._.x, this.D[1]._.y, this.D[1].g.x, this.D[1].g.y, this.D[1].AX, this.D[2].G.x, this.D[2].G.y, this.D[2]._.x, this.D[2]._.y, this.D[2].g.x, this.D[2].g.y, this.D[2].AX, this.S[0].AB, this.S[1].AB, this.S[2].AB, this.O, this.Af.x, this.Af.y, this.A8, C.Be, new Array, this.z, this.Bj, this.Bm, this.Br, this.Bo));
        for (var j = 0; j < C.AD.length; j++) {
            b[b.length - 1][28].push(C.AD[j].BM);
        }
        if (W) {
            K.push(new Array(W.D[0].G.x, W.D[0].G.y, W.D[0]._.x, W.D[0]._.y, W.D[0].g.x, W.D[0].g.y, W.D[1].G.x, W.D[1].G.y, W.D[1]._.x, W.D[1]._.y, W.D[1].g.x, W.D[1].g.y, W.D[1].AX, W.D[2].G.x, W.D[2].G.y, W.D[2]._.x, W.D[2]._.y, W.D[2].g.x, W.D[2].g.y, W.D[2].AX, W.S[0].AB, W.S[1].AB, W.S[2].AB, W.O, W.Af.x, W.Af.y, W.A8, W.left, W.right, W.AW, W.AR));
        }
    }
};
Bn.prototype.BS = function () {
    if (Aq) {
        this.Aq();
    }
    this.Q.AX += (AW - this.D[1].AX) / 10;
    if (AW) {
        this.At += this.Q.Bq / 5;
    }
    this.Q.AR = this.AI.AR = AR;
    var As = left - right;
    this.AM.A3(As * 5 * this.O, 5);
    this.AU.A3(-As * 5 * this.O, 5);
    this.AQ.rotate(As / 8);
    if (!As && AW) {
        this.AM.A3(-7, 5);
        this.AU.A3(7, 5);
    }
};
Bn.prototype.Am = function () {
    var M = this.Q.G.o();
    var AA = this.AI.G.o();
    var AS = this.h.G.o();
    var L = AA.sub(M);
    var N = new J((AA.y - M.y) * this.O, (M.x - AA.x) * this.O);
    var R = AS.sub(M.add(L.F(0.5)));
    B.beginPath();
    B.strokeStyle = "black";
    B.lineWidth = 3.5 * C.H;
    B.arc(M.x, M.y, 12.5 * C.H, 0, 2 * Math.PI, true);
    B.moveTo(AA.x + 12.5 * C.H, AA.y);
    B.arc(AA.x, AA.y, 12.5 * C.H, 0, 2 * Math.PI, true);
    B.stroke();
    B.beginPath();
    B.fillStyle = "grey";
    B.moveTo(M.x + 5 * C.H, M.y);
    B.arc(M.x, M.y, 5 * C.H, 0, 2 * Math.PI, true);
    B.moveTo(AA.x + 4 * C.H, AA.y);
    B.arc(AA.x, AA.y, 4 * C.H, 0, 2 * Math.PI, true);
    B.fill();
    B.beginPath();
    B.lineWidth = 5 * C.H;
    B.moveTo(M.x, M.y);
    B.lineTo(M.x + L.x * 0.4 + N.x * 0.05, M.y + L.y * 0.4 + N.y * 0.05);
    B.moveTo(M.x + L.x * 0.72 + R.x * 0.64, M.y + L.y * 0.72 + R.y * 0.64);
    B.lineTo(M.x + L.x * 0.46 + R.x * 0.4, M.y + L.y * 0.46 + R.y * 0.4);
    B.lineTo(M.x + L.x * 0.4 + N.x * 0.05, M.y + L.y * 0.4 + N.y * 0.05);
    B.stroke();
    B.beginPath();
    B.lineWidth = 2 * C.H;
    B.moveTo(M.x + L.x * 0.72 + R.x * 0.64, M.y + L.y * 0.72 + R.y * 0.64);
    B.lineTo(M.x + L.x * 0.43 + N.x * 0.05, M.y + L.y * 0.43 + N.y * 0.05);
    B.moveTo(M.x + L.x * 0.45 + R.x * 0.3, M.y + L.y * 0.45 + R.y * 0.3);
    B.lineTo(M.x + L.x * 0.3 + R.x * 0.4, M.y + L.y * 0.3 + R.y * 0.4);
    B.lineTo(M.x + L.x * 0.25 + R.x * 0.6, M.y + L.y * 0.25 + R.y * 0.6);
    B.moveTo(M.x + L.x * 0.17 + R.x * 0.6, M.y + L.y * 0.17 + R.y * 0.6);
    B.lineTo(M.x + L.x * 0.3 + R.x * 0.6, M.y + L.y * 0.3 + R.y * 0.6);
    var Ap = new J(6 * Math.cos(this.At) * C.H, 6 * Math.sin(this.At) * C.H);
    B.moveTo(M.x + L.x * 0.43 + N.x * 0.05 + Ap.x, M.y + L.y * 0.43 + N.y * 0.05 + Ap.y);
    B.lineTo(M.x + L.x * 0.43 + N.x * 0.05 - Ap.x, M.y + L.y * 0.43 + N.y * 0.05 - Ap.y);
    B.stroke();
    B.beginPath();
    B.lineWidth = C.H;
    B.moveTo(M.x + L.x * 0.46 + R.x * 0.4, M.y + L.y * 0.46 + R.y * 0.4);
    B.lineTo(M.x + L.x * 0.28 + R.x * 0.5, M.y + L.y * 0.28 + R.y * 0.5);
    B.stroke();
    B.beginPath();
    B.lineWidth = 3 * C.H;
    B.moveTo(AA.x, AA.y);
    B.lineTo(M.x + L.x * 0.71 + R.x * 0.73, M.y + L.y * 0.71 + R.y * 0.73);
    B.lineTo(M.x + L.x * 0.73 + R.x * 0.77, M.y + L.y * 0.73 + R.y * 0.77);
    B.lineTo(M.x + L.x * 0.7 + R.x * 0.8, M.y + L.y * 0.7 + R.y * 0.8);
    B.stroke();
    if (this.A9) {
        return;
    }
    N = AS.sub(M.add(L.F(0.5)));
    var Aw = M.add(L.F(0.3)).add(N.F(0.25));
    var B2 = M.add(L.F(0.4)).add(N.F(0.05));
    var Bp = B2.add(Ap);
    var A6 = B2.sub(Ap);
    var A7 = M.add(L.F(0.67)).add(N.F(0.8));
    var AY = Aw.add(L.F(-0.05)).add(N.F(0.42));
    var Aa = Bp.sub(AY);
    R = new J(Aa.y * this.O, -Aa.x * this.O);
    R = R.F(C.H * C.H);
    var CZ = AY.add(Aa.F(0.5)).add(R.F(200 / Aa.Ae()));
    Aa = A6.sub(AY);
    R = new J(Aa.y * this.O, -Aa.x * this.O);
    R = R.F(C.H * C.H);
    var CX = AY.add(Aa.F(0.5)).add(R.F(200 / Aa.Ae()));
    B.beginPath();
    B.lineWidth = 6 * C.H;
    B.strokeStyle = "rgba(0, 0, 0, 0.5)";
    B.moveTo(A6.x, A6.y);
    B.lineTo(CX.x, CX.y);
    B.lineTo(AY.x, AY.y);
    B.stroke();
    B.beginPath();
    B.strokeStyle = "black";
    B.moveTo(Bp.x, Bp.y);
    B.lineTo(CZ.x, CZ.y);
    B.lineTo(AY.x, AY.y);
    B.stroke();
    var BX = Aw.add(L.F(0.1)).add(N.F(0.95));
    B.beginPath();
    B.lineWidth = 8 * C.H;
    B.moveTo(AY.x, AY.y);
    B.lineTo(BX.x, BX.y);
    B.stroke();
    var Bl = Aw.add(L.F(0.2)).add(N.F(1.09));
    var CT = Aw.add(L.F(0.4)).add(N.F(1.15));
    var Ce = Aw.add(L.F(0.1)).add(N.F(1.05));
    B.beginPath();
    B.lineWidth = 2 * C.H;
    B.moveTo(Bl.x + 5 * C.H, Bl.y);
    B.arc(Bl.x, Bl.y, 5 * C.H, 0, 2 * Math.PI, true);
    B.moveTo(CT.x, CT.y);
    B.lineTo(Ce.x, Ce.y);
    B.stroke();
    L = BX.sub(A7);
    N = new J(L.y * this.O, -L.x * this.O);
    N = N.F(C.H * C.H);
    var CU = A7.add(L.F(0.3)).add(N.F(80 / L.Ae()));
    B.beginPath();
    B.lineWidth = 5 * C.H;
    B.moveTo(BX.x, BX.y);
    B.lineTo(CU.x, CU.y);
    B.lineTo(A7.x, A7.y);
    B.stroke();
};
Bn.prototype.C1 = function () {
    var $ = new Object;
    var M = this.AI.G.sub(this.Q.G);
    var AA = this.h.G.sub(this.AI.G.add(this.Q.G).F(0.5));
    var AS = new J(M.y * this.O, -M.x * this.O);
    $.h = this.Q.G.add(M.F(0.35)).add(AA.F(1.2));
    $.BO = $.B0 = this.Q.G.add(M.F(0.8)).add(AS.F(0.68));
    var N = $.h.sub($.BO);
    N = new J(N.y * this.O, -N.x * this.O);
    $.Bx = $.Bu = $.h.add($.BO).F(0.5).add(N.F(130 / N.Ae()));
    $.Ab = this.Q.G.add(M.F(0.2)).add(AS.F(0.5));
    var R = new J(6 * Math.cos(this.At), 6 * Math.sin(this.At));
    $.BQ = this.Q.G.add(M.F(0.4)).add(AS.F(0.05)).add(R);
    N = $.Ab.sub($.BQ);
    N = new J(-N.y * this.O, N.x * this.O);
    $.Bw = $.Ab.add($.BQ).F(0.5).add(N.F(160 / N.Ae()));
    $.BN = this.Q.G.add(M.F(0.4)).add(AS.F(0.05)).sub(R);
    N = $.Ab.sub($.BN);
    N = new J(-N.y * this.O, N.x * this.O);
    $.Bv = $.Ab.add($.BN).F(0.5).add(N.F(160 / N.Ae()));
    return $;
};
Bn.prototype.DB = function () {
    this.A9 = true;
    this.h.drive = function () {};
    this.Q.AX = 0;
    this.Q.AR = false;
    this.AI.AR = false;
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
    if (AW != this.Br) {
        AZ[2][this.z] = 1;
        this.Br = AW;
    }
    if (AR != this.Bo) {
        AZ[3][this.z] = 1;
        this.Bo = AR;
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
    this.D.push(new Ah(new J(K[K.length - 1][0], K[K.length - 1][1]), this));
    this.D[0]._ = new J(K[K.length - 1][2], K[K.length - 1][3]);
    this.D[0].g = new J(K[K.length - 1][4], K[K.length - 1][5]);
    this.D.push(new Ba(new J(K[K.length - 1][6], K[K.length - 1][7]), this));
    this.D[1]._ = new J(K[K.length - 1][8], K[K.length - 1][9]);
    this.D[1].g = new J(K[K.length - 1][10], K[K.length - 1][11]);
    this.D[1].AX = K[K.length - 1][12];
    this.D.push(new Ba(new J(K[K.length - 1][13], K[K.length - 1][14]), this));
    this.D[2]._ = new J(K[K.length - 1][15], K[K.length - 1][16]);
    this.D[2].g = new J(K[K.length - 1][17], K[K.length - 1][18]);
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
    this.Af = new J(K[K.length - 1][24], K[K.length - 1][25]);
    this.A8 = K[K.length - 1][26];
    this.left = K[K.length - 1][27];
    this.right = K[K.length - 1][28];
    this.AW = K[K.length - 1][29];
    this.AR = K[K.length - 1][30];
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
    this.Q.AX += (this.AW - this.D[1].AX) / 10;
    if (this.AW) {
        this.At += this.Q.Bq / 5;
    }
    this.Q.AR = this.AI.AR = this.AR;
    var As = this.left - this.right;
    this.AM.A3(As * 5 * this.O, 5);
    this.AU.A3(-As * 5 * this.O, 5);
    this.AQ.rotate(As / 8);
    if (!As && this.AW) {
        this.AM.A3(-7, 5);
        this.AU.A3(7, 5);
    }
};
CW.prototype.Am = function () {
    var M = this.Q.G.o();
    var AA = this.AI.G.o();
    var AS = this.h.G.o();
    var L = AA.sub(M);
    var N = new J((AA.y - M.y) * this.O, (M.x - AA.x) * this.O);
    var R = AS.sub(M.add(L.F(0.5)));
    B.beginPath();
    B.strokeStyle = "rgba(0, 0, 0, 0.5)";
    B.lineWidth = 3.5 * C.H;
    B.arc(M.x, M.y, 12.5 * C.H, 0, 2 * Math.PI, true);
    B.moveTo(AA.x + 12.5 * C.H, AA.y);
    B.arc(AA.x, AA.y, 12.5 * C.H, 0, 2 * Math.PI, true);
    B.stroke();
    B.beginPath();
    B.fillStyle = "rgba(0, 0, 0, 0.25)";
    B.moveTo(M.x + 5 * C.H, M.y);
    B.arc(M.x, M.y, 5 * C.H, 0, 2 * Math.PI, true);
    B.moveTo(AA.x + 4 * C.H, AA.y);
    B.arc(AA.x, AA.y, 4 * C.H, 0, 2 * Math.PI, true);
    B.fill();
    B.beginPath();
    B.lineWidth = 5 * C.H;
    B.moveTo(M.x, M.y);
    B.lineTo(M.x + L.x * 0.4 + N.x * 0.05, M.y + L.y * 0.4 + N.y * 0.05);
    B.moveTo(M.x + L.x * 0.72 + R.x * 0.64, M.y + L.y * 0.72 + R.y * 0.64);
    B.lineTo(M.x + L.x * 0.46 + R.x * 0.4, M.y + L.y * 0.46 + R.y * 0.4);
    B.lineTo(M.x + L.x * 0.4 + N.x * 0.05, M.y + L.y * 0.4 + N.y * 0.05);
    B.stroke();
    B.beginPath();
    B.lineWidth = 2 * C.H;
    B.moveTo(M.x + L.x * 0.72 + R.x * 0.64, M.y + L.y * 0.72 + R.y * 0.64);
    B.lineTo(M.x + L.x * 0.43 + N.x * 0.05, M.y + L.y * 0.43 + N.y * 0.05);
    B.moveTo(M.x + L.x * 0.45 + R.x * 0.3, M.y + L.y * 0.45 + R.y * 0.3);
    B.lineTo(M.x + L.x * 0.3 + R.x * 0.4, M.y + L.y * 0.3 + R.y * 0.4);
    B.lineTo(M.x + L.x * 0.25 + R.x * 0.6, M.y + L.y * 0.25 + R.y * 0.6);
    B.moveTo(M.x + L.x * 0.17 + R.x * 0.6, M.y + L.y * 0.17 + R.y * 0.6);
    B.lineTo(M.x + L.x * 0.3 + R.x * 0.6, M.y + L.y * 0.3 + R.y * 0.6);
    var Ap = new J(6 * Math.cos(this.At) * C.H, 6 * Math.sin(this.At) * C.H);
    B.moveTo(M.x + L.x * 0.43 + N.x * 0.05 + Ap.x, M.y + L.y * 0.43 + N.y * 0.05 + Ap.y);
    B.lineTo(M.x + L.x * 0.43 + N.x * 0.05 - Ap.x, M.y + L.y * 0.43 + N.y * 0.05 - Ap.y);
    B.stroke();
    B.beginPath();
    B.lineWidth = C.H;
    B.moveTo(M.x + L.x * 0.46 + R.x * 0.4, M.y + L.y * 0.46 + R.y * 0.4);
    B.lineTo(M.x + L.x * 0.28 + R.x * 0.5, M.y + L.y * 0.28 + R.y * 0.5);
    B.stroke();
    B.beginPath();
    B.lineWidth = 3 * C.H;
    B.moveTo(AA.x, AA.y);
    B.lineTo(M.x + L.x * 0.71 + R.x * 0.73, M.y + L.y * 0.71 + R.y * 0.73);
    B.lineTo(M.x + L.x * 0.73 + R.x * 0.77, M.y + L.y * 0.73 + R.y * 0.77);
    B.lineTo(M.x + L.x * 0.7 + R.x * 0.8, M.y + L.y * 0.7 + R.y * 0.8);
    B.stroke();
    N = AS.sub(M.add(L.F(0.5)));
    var Aw = M.add(L.F(0.3)).add(N.F(0.25));
    var B2 = M.add(L.F(0.4)).add(N.F(0.05));
    var Bp = B2.add(Ap);
    var A6 = B2.sub(Ap);
    var A7 = M.add(L.F(0.67)).add(N.F(0.8));
    var AY = Aw.add(L.F(-0.05)).add(N.F(0.42));
    var Aa = Bp.sub(AY);
    R = new J(Aa.y * this.O, -Aa.x * this.O);
    R = R.F(C.H * C.H);
    var CZ = AY.add(Aa.F(0.5)).add(R.F(200 / Aa.Ae()));
    Aa = A6.sub(AY);
    R = new J(Aa.y * this.O, -Aa.x * this.O);
    R = R.F(C.H * C.H);
    var CX = AY.add(Aa.F(0.5)).add(R.F(200 / Aa.Ae()));
    B.beginPath();
    B.lineWidth = 6 * C.H;
    B.strokeStyle = "rgba(0, 0, 0, 0.25)";
    B.moveTo(A6.x, A6.y);
    B.lineTo(CX.x, CX.y);
    B.lineTo(AY.x, AY.y);
    B.stroke();
    B.beginPath();
    B.strokeStyle = "rgba(0, 0, 0, 0.5)";
    B.moveTo(Bp.x, Bp.y);
    B.lineTo(CZ.x, CZ.y);
    B.lineTo(AY.x, AY.y);
    B.stroke();
    var BX = Aw.add(L.F(0.1)).add(N.F(0.95));
    B.beginPath();
    B.lineWidth = 8 * C.H;
    B.moveTo(AY.x, AY.y);
    B.lineTo(BX.x, BX.y);
    B.stroke();
    var Bl = Aw.add(L.F(0.2)).add(N.F(1.09));
    var CT = Aw.add(L.F(0.4)).add(N.F(1.15));
    var Ce = Aw.add(L.F(0.1)).add(N.F(1.05));
    B.beginPath();
    B.lineWidth = 2 * C.H;
    B.moveTo(Bl.x + 5 * C.H, Bl.y);
    B.arc(Bl.x, Bl.y, 5 * C.H, 0, 2 * Math.PI, true);
    B.moveTo(CT.x, CT.y);
    B.lineTo(Ce.x, Ce.y);
    B.stroke();
    L = BX.sub(A7);
    N = new J(L.y * this.O, -L.x * this.O);
    N = N.F(C.H * C.H);
    var CU = A7.add(L.F(0.3)).add(N.F(80 / L.Ae()));
    B.beginPath();
    B.lineWidth = 5 * C.H;
    B.moveTo(BX.x, BX.y);
    B.lineTo(CU.x, CU.y);
    B.lineTo(A7.x, A7.y);
    B.stroke();
    B.strokeStyle = "black";
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
        this.AW = this.AW ? 0 : 1;
    }
    if (this.AT[3][AP.z]) {
        this.AR = this.AR ? 0 : 1;
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
    var U = new J(0, 0);
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
        this[U].G.AN(Cx[U]);
    }
}
$.prototype.Am = function () {
    var h = this.h.G.o();
    var Bx = this.Bx.G.o();
    var BO = this.BO.G.o();
    var Bu = this.Bu.G.o();
    var B0 = this.B0.G.o();
    var Bw = this.Bw.G.o();
    var BQ = this.BQ.G.o();
    var Bv = this.Bv.G.o();
    var BN = this.BN.G.o();
    var Ab = this.Ab.G.o();
    B.beginPath();
    B.lineWidth = 5 * C.H;
    B.strokeStyle = "rgba(0,0,0,0.5)";
    B.moveTo(h.x, h.y);
    B.lineTo(Bu.x, Bu.y);
    B.lineTo(B0.x, B0.y);
    B.moveTo(Ab.x, Ab.y);
    B.lineTo(Bv.x, Bv.y);
    B.lineTo(BN.x, BN.y);
    B.stroke();
    B.beginPath();
    B.strokeStyle = "black";
    B.moveTo(h.x, h.y);
    B.lineTo(Bx.x, Bx.y);
    B.lineTo(BO.x, BO.y);
    B.moveTo(Ab.x, Ab.y);
    B.lineTo(Bw.x, Bw.y);
    B.lineTo(BQ.x, BQ.y);
    B.stroke();
    B.beginPath();
    B.lineWidth = 8 * C.H;
    B.moveTo(Ab.x, Ab.y);
    B.lineTo(h.x, h.y);
    B.stroke();
    h.Ai(h.sub(Ab).F(0.25));
    B.beginPath();
    B.lineWidth = 2 * C.H;
    B.moveTo(h.x + 5 * C.H, h.y);
    B.arc(h.x, h.y, 5 * C.H, 0, 2 * Math.PI, true);
    B.stroke();
    var A6 = h.sub(Ab);
    var A7 = new J(A6.y, -A6.x);
    var AY = new J(0, 0);
    var Aa = new J(0, 0);
    if (this.O == 1) {
        AY = h.add(A7.F(0.15)).add(A6.F(-0.05));
        Aa = h.add(A7.F(-0.35)).add(A6.F(0.15));
    } else {
        AY = h.add(A7.F(-0.15)).add(A6.F(0.15));
        Aa = h.add(A7.F(0.35)).add(A6.F(-0.05));
    }
    AY = h.add(A7.F(0.15 * this.O)).add(A6.F(-0.05));
    Aa = h.add(A7.F(-0.35 * this.O)).add(A6.F(0.15));
    B.beginPath();
    B.moveTo(AY.x, AY.y);
    B.lineTo(Aa.x, Aa.y);
    B.stroke();
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
    C6 = C6.F(0.7);
    C3 = C3.F(0.7);
    for (var T = 0; T < this.S.length; T++) {
        this.S[T].A1 = this.S[T].AB = this.S[T].A4.G.sub(this.S[T].A2.G).length();
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
        L[Az]._ = L[Az].G.sub(C6);
    }
    for (var Az = 0; Az < N.length; Az++) {
        N[Az]._ = N[Az].G.sub(C3);
    }
    for (var u = this.D.length - 1; u >= 0; u--) {
        this.D[u].g.AN(this.D[u].G.sub(this.D[u]._));
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
Cp.prototype.Am = function () {
    this.DL.Am();
    this.B$.Am();
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
    this.G = new J(G.x, G.y);
    this.Af = Af;
    this.z = z;
    this.h = new Ah(G, this);
    this.h.g.x = 20;
    this.A9 = true;
}
C5.prototype.Am = function () {
    if (this.Ay > 0) {
        this.Ay -= 10;
        var M = this.G.o();
        var AS = Math.random() * 6.2;
        var L = this.Ay / 2;
        var N = M.x + L * Math.cos(AS);
        var R = M.y + L * Math.sin(AS);
        B.beginPath();
        B.fillStyle = "yellow";
        B.moveTo(N, R);
        for (AA = 1; AA < 16; AA++) {
            L = (this.Ay + 30 * Math.random()) / 2;
            N = M.x + L * Math.cos(AS + 6.283 * AA / 16);
            R = M.y + L * Math.sin(AS + 6.283 * AA / 16);
            B.lineTo(N, R);
        }
        B.fill();
    }
    for (var u = 0; u < this.D.length; u++) {
        this.D[u].Am();
    }
};
C5.prototype.AO = function () {
    for (var u = this.D.length - 1; u >= 0; u--) {
        this.D[u].AO();
    }
};

function target(x, y) {
    this.G = new J(x, y);
    this.BM = false;
}
target.prototype.Am = function () {
    B.beginPath();
    B.fillStyle = this.BM ? "#FFFFAA" : "#FFFF00";
    B.lineWidth = 2 * C.H;
    B.moveTo(this.G.o().x + 7 * C.H, this.G.o().y);
    B.arc(this.G.o().x, this.G.o().y, 7 * C.H, 0, 2 * Math.PI, true);
    B.fill();
    B.stroke();
};
target.prototype.Ad = function (AV) {
    if (!this.BM && AV.G.sub(this.G).Ae() < 500 && !AV.parent.Cq) {
        this.BM = true;
        C.Be++;
        if (C.BU && C.Be == C.BU) {
            AV.parent.save = true;
        }
    }
};
target.prototype.Aj = function (U) {
    if (U.sub(this.G).length() < BH + 7) {
        C.BU--;
        this.remove = true;
        C.remove(this.G);
    }
};
target.prototype.Bt = function () {
    return "T " + this.G.x.toString(32) + " " + this.G.y.toString(32);
};

function CA(x, y) {
    this.G = new J(x, y);
    this.BM = false;
}
CA.prototype.Am = function () {
    B.beginPath();
    B.fillStyle = this.BM ? "#AAAAFF" : "#0000FF";
    B.moveTo(this.G.o().x + 7 * C.H, this.G.o().y);
    B.arc(this.G.o().x, this.G.o().y, 7 * C.H, 0, 2 * Math.PI, true);
    B.fill();
    B.stroke();
};
CA.prototype.Ad = function (AV) {
    if (!this.BM && AV.G.sub(this.G).Ae() < 500 && !AV.parent.Cq) {
        this.BM = true;
        AV.parent.save = true;
    }
};
CA.prototype.Aj = function (U) {
    if (U.sub(this.G).length() < BH + 7) {
        this.remove = true;
        C.remove(this.G);
    }
};
CA.prototype.Bt = function () {
    return "C " + this.G.x.toString(32) + " " + this.G.y.toString(32);
};

function CB(x, y, Ak) {
    this.Ak = Ak;
    var Bz = this.Ak * Math.PI / 180;
    this.G = new J(x, y);
    this.O = new J(-Math.sin(Bz), Math.cos(Bz));
}
CB.prototype.Am = function () {
    B.beginPath();
    B.fillStyle = "yellow";
    B.save();
    B.translate(this.G.o().x, this.G.o().y);
    B.rotate(this.Ak * Math.PI / 180);
    B.moveTo(-7 * C.H, -10 * C.H);
    B.lineTo(0, 10 * C.H);
    B.lineTo(7 * C.H, -10 * C.H);
    B.lineTo(-7 * C.H, -10 * C.H);
    B.fill();
    B.stroke();
    B.restore();
};
CB.prototype.Ad = function (AV) {
    if (AV.G.sub(this.G).Ae() < 1000) {
        for (var u = 0; u < AV.parent.D.length; u++) {
            AV.parent.D[u].G.Ai(this.O);
        }
    }
};
CB.prototype.Aj = function (U) {
    if (U.sub(this.G).length() < BH + 7) {
        this.remove = true;
        C.remove(this.G);
    }
};
CB.prototype.Bt = function () {
    return "B " + this.G.x.toString(32) + " " + this.G.y.toString(32) + " " + (this.Ak - 180).toString(32);
};

function CD(x, y, Ak) {
    this.Ak = Ak;
    var Bz = this.Ak * Math.PI / 180;
    this.G = new J(x, y);
    this.O = new J(-0.3 * Math.sin(Bz), 0.3 * Math.cos(Bz));
}
CD.prototype.Am = function () {
    B.beginPath();
    B.fillStyle = "#00FF00";
    B.save();
    B.translate(this.G.o().x, this.G.o().y);
    B.rotate(this.Ak * Math.PI / 180);
    B.moveTo(-7 * C.H, -10 * C.H);
    B.lineTo(0, 10 * C.H);
    B.lineTo(7 * C.H, -10 * C.H);
    B.lineTo(-7 * C.H, -10 * C.H);
    B.fill();
    B.stroke();
    B.restore();
};
CD.prototype.Ad = function (AV) {
    if (AV.G.sub(this.G).Ae() < 1000) {
        AV.parent.Af.AN(this.O);
    }
};
CD.prototype.Aj = function (U) {
    if (U.sub(this.G).length() < BH + 7) {
        this.remove = true;
        C.remove(this.G);
    }
};
CD.prototype.Bt = function () {
    return "G " + this.G.x.toString(32) + " " + this.G.y.toString(32) + " " + (this.Ak - 180).toString(32);
};

function CL(x, y) {
    this.G = new J(x, y);
}
CL.prototype.Am = function () {
    B.beginPath();
    B.moveTo(this.G.o().x + 7 * C.H, this.G.o().y);
    B.arc(this.G.o().x, this.G.o().y, 7 * C.H, 0, 2 * Math.PI, true);
    B.stroke();
};
CL.prototype.Ad = function (AV) {
    if (AV.G.sub(this.G).Ae() < 500) {
        AV.parent.A8 = true;
    }
};
CL.prototype.Aj = function (U) {
    if (U.sub(this.G).length() < BH + 7) {
        this.remove = true;
        C.remove(this.G);
    }
};
CL.prototype.Bt = function () {
    return "S " + this.G.x.toString(32) + " " + this.G.y.toString(32);
};

function B_(x, y) {
    this.G = new J(x, y);
}
B_.prototype.Am = function () {
    B.beginPath();
    B.fillStyle = "red";
    B.moveTo(this.G.o().x + 7 * C.H, this.G.o().y);
    B.arc(this.G.o().x, this.G.o().y, 7 * C.H, 0, 2 * Math.PI, true);
    B.fill();
    B.stroke();
};
B_.prototype.Ad = function (AV) {
    if (AV.G.sub(this.G).Ae() < 500 && !AV.parent.Cq) {
        AP = new C5(this.G, AP.Af, AP.z);
    }
};
B_.prototype.Aj = function (U) {
    if (U.sub(this.G).length() < BH + 7) {
        this.remove = true;
        C.remove(this.G);
    }
};
B_.prototype.Bt = function () {
    return "O " + this.G.x.toString(32) + " " + this.G.y.toString(32);
};

function line(C_, C9, C8, C$) {
    this.AH = new J(Math.round(C_), Math.round(C9));
    this.AK = new J(Math.round(C8), Math.round(C$));
    this.BK = this.AK.sub(this.AH);
    this.length = this.BK.length();
    this.remove = false;
}
line.prototype.C7 = function (Au, CI, CP) {
    Au.beginPath();
    Au.moveTo(this.AH.x * C.H - CI, this.AH.y * C.H - CP);
    Au.lineTo(this.AK.x * C.H - CI, this.AK.y * C.H - CP);
    Au.stroke();
};
line.prototype.Ad = function (Ah) {
    if (this.DN) {
        return;
    }
    this.DN = true;
    var AA = Ah.G;
    var AS = Ah.g;
    var L = Ah.Al;
    var N = new J(0, 0);
    var R = 0;
    var Ap = AA.sub(this.AH);
    var Aw = Ap.Bd(this.BK) / this.length / this.length;
    if (Aw >= 0 && Aw <= 1) {
        var B2 = (Ap.x * this.BK.y - Ap.y * this.BK.x) * ((Ap.x - AS.x) * this.BK.y - (Ap.y - AS.y) * this.BK.x) < 0 ? -1 : 1;
        N = Ap.sub(this.BK.F(Aw));
        R = N.length();
        if (R < L || B2 < 0) {
            AA.Ai(N.F((L * B2 - R) / R));
            Ah.drive(new J(-N.y / R, N.x / R));
            return;
        }
    }
    if (Aw * this.length < -L || Aw * this.length > this.length + L) {
        return;
    }
    var Bp = Aw > 0 ? this.AK : this.AH;
    N = AA.sub(Bp);
    R = N.length();
    if (R < L) {
        AA.Ai(N.F((L - R) / R));
        Ah.drive(new J(-N.y / R, N.x / R));
        return;
    }
};
line.prototype.Aj = function (U) {
    var C4 = U.sub(this.AH);
    var B8 = C4.Bd(this.BK.Bc(this.length));
    var Bi = new J(0, 0);
    if (B8 <= 0) {
        Bi.AN(this.AH);
    } else if (B8 >= this.length) {
        Bi.AN(this.AK);
    } else {
        Bi.AN(this.AH.add(this.BK.Bc(this.length).F(B8)));
    }
    var DA = U.sub(Bi);
    if (DA.length() <= BH) {
        this.remove = true;
        C.remove(this.AH, this.AK);
    }
};
line.prototype.CR = function () {
    this.B9 = true;
    var end = " " + this.AK.x.toString(32) + " " + this.AK.y.toString(32);
    var next = C.I[Math.floor(this.AK.x / C.q)][Math.floor(this.AK.y / C.q)].search(this.AK, "line");
    if (next != undefined) {
        end += next.CR();
    }
    return end;
};

function B5(C_, C9, C8, C$) {
    this.AH = new J(Math.round(C_), Math.round(C9));
    this.AK = new J(Math.round(C8), Math.round(C$));
    this.BK = this.AK.sub(this.AH);
    this.length = this.BK.length();
    this.remove = false;
}
B5.prototype.C7 = function (Au, CI, CP) {
    Au.beginPath();
    Au.moveTo(this.AH.x * C.H - CI, this.AH.y * C.H - CP);
    Au.lineTo(this.AK.x * C.H - CI, this.AK.y * C.H - CP);
    Au.stroke();
};
B5.prototype.Aj = function (U) {
    var C4 = U.sub(this.AH);
    var B8 = C4.Bd(this.BK.Bc(this.length));
    var Bi = new J(0, 0);
    if (B8 <= 0) {
        Bi.AN(this.AH);
    } else if (B8 >= this.length) {
        Bi.AN(this.AK);
    } else {
        Bi.AN(this.AH.add(this.BK.Bc(this.length).F(B8)));
    }
    var DA = U.sub(Bi);
    if (DA.length() <= BH) {
        this.remove = true;
        C.remove(this.AH, this.AK);
    }
};
B5.prototype.CR = function () {
    this.B9 = true;
    var end = " " + this.AK.x.toString(32) + " " + this.AK.y.toString(32);
    var next = C.I[Math.floor(this.AK.x / C.q)][Math.floor(this.AK.y / C.q)].search(this.AK, "sline");
    if (next != undefined) {
        end += next.CR();
    }
    return end;
};

function BP() {
    this.AG = new Array;
    this.AL = new Array;
    this.AD = new Array;
}
BP.prototype.Ad = function (AV) {
    for (var P = this.AG.length - 1; P >= 0; P--) {
        this.AG[P].Ad(AV);
    }
    if (!AV.parent.A9) {
        for (var j = this.AD.length - 1; j >= 0; j--) {
            this.AD[j].Ad(AV);
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
    for (var j = 0; j < this.AD.length; j++) {
        if (this.AD[j].remove != undefined) {
            this.AD.splice(j, 1);
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
    var A_ = new J(Av.x, Av.y);
    var DM = (BZ.y - Av.y) / (BZ.x - Av.x);
    var O = new J(Av.x < BZ.x ? 1 : -1, Av.y < BZ.y ? 1 : -1);
    var DP = 0;
    I.push(Av);
    while (DP < 5000) {
        if (Math.floor(A_.x / q) == Math.floor(BZ.x / q) && Math.floor(A_.y / q) == Math.floor(BZ.y / q)) {
            break;
        }
        var B4 = new J;
        if (O.x < 0) {
            B4.x = Math.round(Math.ceil((A_.x + 1) / q + O.x) * q) - 1;
        } else {
            B4.x = Math.round(Math.floor(A_.x / q + O.x) * q);
        }
        B4.y = Math.round(Av.y + (B4.x - Av.x) * DM);
        var B1 = new J;
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
function BI(ID) {
    this.I = new Array;
    this.q = 100;
    this.Ax = new Array;
    this.H = 0.6;
    this.ID = ID;
    B.fillText("Loading track... Please wait.", 36, 16);
    if (this.ID == "banner") {
        V = "";
        p.width = document.body.offsetWidth;
        B.lineCap = "round";
        B.lineJoin = "round";
        B.font = "8px eiven";
        BB.style.display = "none";
        BF.style.left = p.offsetLeft + "px";
        this.H = 0.5;
        this.A5 = new J(730, -52);
        var Cv = "42 1i 5u a,8e a 8e -a 8e -u 8e -1i 92 -18 92 0 9m a aa 0 au -a au a,8e -1i 9m -26 au -1i aa -18 9m -1i 92 -18,6i a 84 a,b8 -a b8 a cg u d4 k do u do a do -a do -u cg -1i bs -18,do -u d4 -k bs -18,b8 -a bs -k bs 0 cg a d4 0 d4 -k,e2 k e2 -1i em -18,e2 -u em -k em u,fa -u fu -k gi -u fa -1i em -18,fu -k fu k fu u,gi k gi -u,fa -u em -k,6i a 5u a,gs -u gs 0 gs a i4 u jc a jc -u,gs -18 gs -u,gs -18 hg -1i hg 0 gs a,hg 0 i4 a io 0 jc a,io 0 io -1i jc -18 jc -u,jm a ku u li k m6 u m6 a,jm a jm -a ka -k ka 0 ku a li 0 li -k m6 -u m6 a,li -k ka -18 ku -1i m6 -u,mg a no u p0 a p0 -a oc -k no -u,oc -k p0 -u no -1i no -18 no -a,mg a n4 0 no a oc 0 no -a,qi a qi k r6 u r6 0 t2 u t2 a se 0 t2 -a,qi a qi -a,qi -1i qi 0,qi -1i rq -26 t2 -1i t2 -u t2 -a,r6 -18 rq -1i se -18 t2 -1i,se -18 se -k rq -a r6 -k r6 -18,qi -1i r6 -18,tc k u0 u,tc k tc 0 tc -18 u0 -1i u0 u,ua a vi u 10q a 10q -k 10q -1s 106 -26 106 -1i,ua a ua -a ua -u uu -k uu 0 vi a 106 0 106 -k 10q -u,ua -u vi -1i 106 -18 106 -1i,106 -k vi -u uu -k,114 a 12c u 130 k 11o 0 11o -a,114 a 114 -a 114 -u 12c -1i 13k -u 130 -k 130 -a 130 0 13k -a 13k -u,130 -k 12c -u 11o -k 114 -u,11o -k 11o -a,13u k 13u -u 13u -18 14i -1i 14i 0,13u k 14i u 14i 0,17m a 19i 1i 1es 1i 3d2 1i,pa a q8 a,8e a 9m u au a,e2 k em u,gi k fu u,42 1i -1mm 1i,17m a 14s a#9m -1i 9m -a aa 0,9m -a 92 0,bs 0 cg -a cg -u,cg -a d4 0,bs -k cg -u,em -k fa -a fa a fu 0,fa -a fu -k,em 0 fa a,hg 0 i4 -a io 0,hg -k i4 -u i4 -a,i4 -u io -k,ka 0 ku -a li 0,ku -a ku -u,ka -k ku -u,no -1i mg -u mg -a n4 0,mg -u no -a,no -u n4 -k,r6 -18 rq -u rq -a,rq -u se -18,tc -18 tc -1s u0 -1i,uu 0 vi -a vi -u,vi -a 106 0,11o -k 12c -a 12c a,12c -a 130 -k,130 0 12c a,14i -1i 156 -18 156 -k 14i -u##BMX#";
    } else {
        this.A5 = new J(0, 0);
        if (this.ID == undefined) {
            var Cv = "-18 1i 18 1i##";
            BB.style.display = "block";
            V = "line";
        } else if (this.ID.length > 7) {
            var Cv = this.ID;
            this.ID = undefined;
            BB.style.display = "block";
            V = "line";
        } else {
            var request = new XMLHttpRequest;
            request.open("POST", "js/load.php", false);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send("track=" + this.ID);
            var Cv = request.responseText;
        }
    }
    var C = Cv.split("#");
    var AG = C[0].split(",");
    for (var Az = 0; Az < AG.length; Az++) {
        var AJ = AG[Az].split(" ");
        if (AJ.length > 3) {
            for (var U = 0; U < AJ.length - 2; U += 2) {
                var P = new line(parseInt(AJ[U], 32), parseInt(AJ[U + 1], 32), parseInt(AJ[U + 2], 32), parseInt(AJ[U + 3], 32));
                if (P.length >= 2 && P.length < 100000) {
                    var I = CG(new J(P.AH.x, P.AH.y), new J(P.AK.x, P.AK.y), this.q);
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
    var AL = C[1].split(",");
    for (var Az = 0; Az < AL.length; Az++) {
        var AJ = AL[Az].split(" ");
        if (AJ.length > 3) {
            for (var U = 0; U < AJ.length - 2; U += 2) {
                var v = new B5(parseInt(AJ[U], 32), parseInt(AJ[U + 1], 32), parseInt(AJ[U + 2], 32), parseInt(AJ[U + 3], 32));
                if (v.length >= 2 && v.length < 100000) {
                    var I = CG(new J(v.AH.x, v.AH.y), new J(v.AK.x, v.AK.y), this.q);
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
    this.BU = 0;
    this.Be = 0;
    this.AD = new Array;
    var AD = C[2].split(",");
    for (var j = 0; j < AD.length; j++) {
        var AJ = AD[j].split(" ");
        if (AJ.length > 2) {
            switch (AJ[0]) {
            case "T":
                var Ag = new target(parseInt(AJ[1], 32), parseInt(AJ[2], 32));
                this.BU++;
                this.AD.push(Ag);
                break;
            case "C":
                var Ag = new CA(parseInt(AJ[1], 32), parseInt(AJ[2], 32));
                this.AD.push(Ag);
                break;
            case "B":
                var Ag = new CB(parseInt(AJ[1], 32), parseInt(AJ[2], 32), parseInt(AJ[3], 32) + 180);
                break;
            case "G":
                var Ag = new CD(parseInt(AJ[1], 32), parseInt(AJ[2], 32), parseInt(AJ[3], 32) + 180);
                break;
            case "O":
                var Ag = new B_(parseInt(AJ[1], 32), parseInt(AJ[2], 32));
                break;
            case "S":
                var Ag = new CL(parseInt(AJ[1], 32), parseInt(AJ[2], 32));
                break;
            default:
                ;
            }
            var x = Math.floor(Ag.G.x / this.q);
            var y = Math.floor(Ag.G.y / this.q);
            if (this.I[x] == undefined) {
                this.I[x] = new Array;
            }
            if (this.I[x][y] == undefined) {
                this.I[x][y] = new BP(x, y);
            }
            this.I[x][y].AD.push(Ag);
        }
    }
    if (C[3] == "MTB" || C[3] == "BMX") {
        B3 = C[3];
        this.z = C[4] != "" ? C[4] : false;
    } else {
        this.z = C[3] != "" ? C[3] : false;
    }
}
BI.prototype.DR = function () {
    if (Z.length > 1) {
        Z.pop();
    }
    if (b.length > 1) {
        b.pop();
    }
    if (W && K.length > 1) {
        K.pop();
    }
};
BI.prototype.C2 = function () {
    this.DV();
    Bb = false;
    AP = B3 == "BMX" ? new Bk : new Bn;
    focus = AP.h;
    if (W) {
        W = this.AT[6] == "BMX" ? new Cb(this.AT) : new CW(this.AT);
        if (K.length == 1 && !AW) {
            focus = W.h;
        }
    }
    if (this.ID != "banner") {
        this.A5 = new J(AP.h.G.x, AP.h.G.y);
    }
};
BI.prototype.Cs = function () {
    Z = new Array(new Array(0, -1, 0, -1, 0, 0, -21, 38, -21, 38, 0, 0, 0, 21, 38, 21, 38, 0, 0, 0, 45, 42, 45, 1, 0, 0.3, false, 0, new Array, 0));
    b = new Array(new Array(2, -3, 2, -3, 0, 0, -23, 35, -23, 35, 0, 0, 0, 23, 35, 23, 35, 0, 0, 0, 47, 45, 45, 1, 0, 0.3, false, 0, new Array, 0));
    if (W) {
        K = this.AT[6] == "BMX" ? new Array(new Array(0, -1, 0, -1, 0, 0, -21, 38, -21, 38, 0, 0, 0, 21, 38, 21, 38, 0, 0, 0, 45, 42, 45, 1, 0, 0.3, false, 0, 0, 0, 0)) : new Array(new Array(2, -3, 2, -3, 0, 0, -23, 35, -23, 35, 0, 0, 0, 23, 35, 23, 35, 0, 0, 0, 47, 45, 45, 1, 0, 0.3, false, 0, 0, 0, 0));
    }
    this.C2();
};
BI.prototype.DV = function () {
    for (var x in this.I) {
        for (var y in this.I[x]) {
            for (var j = 0; j < this.I[x][y].AD.length; j++) {
                if (this.I[x][y].AD[j].BM != undefined) {
                    this.I[x][y].AD[j].BM = false;
                }
            }
        }
    }
};
BI.prototype.Ad = function (AV) {
    var x = Math.floor(AV.G.x / this.q - 0.5);
    var y = Math.floor(AV.G.y / this.q - 0.5);
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
BI.prototype.Am = function () {
    if (focus && this.ID != "banner") {
        this.A5.Ai(focus.G.sub(this.A5).Bc(5));
    }
    B.clearRect(0, 0, p.width, p.height);
    B.lineWidth = Math.max(2 * this.H, 0.5);
    if ((V == "line" || V == "scenery line" || V == "brush" || V == "scenery brush") && A0) {
        if (w.o().x < 50) {
            C.A5.x -= 10 / this.H;
            w.x -= 10 / this.H;
        } else if (w.o().x > p.width - 50) {
            C.A5.x += 10 / this.H;
            w.x += 10 / this.H;
        }
        if (w.o().y < 50) {
            C.A5.y -= 10 / this.H;
            w.y -= 10 / this.H;
        } else if (w.o().y > p.height - 50) {
            C.A5.y += 10 / this.H;
            w.y += 10 / this.H;
        }
        B.beginPath();
        B.strokeStyle = "red";
        B.moveTo(AF.o().x, AF.o().y);
        B.lineTo(w.o().x, w.o().y);
        B.stroke();
    }
    var A_ = (new J(0, 0)).Cr();
    var CH = (new J(p.width, p.height)).Cr();
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
                        this.Ax[x + "_" + y].width = this.q * this.H;
                        this.Ax[x + "_" + y].height = this.q * this.H;
                        var Au = this.Ax[x + "_" + y].getContext("2d");
                        Au.lineCap = "round";
                        Au.lineWidth = Math.max(2 * this.H, 0.5);
                        Au.strokeStyle = "#AAAAAA";
                        for (var v = 0; v < this.I[x][y].AL.length; v++) {
                            this.I[x][y].AL[v].C7(this.Ax[x + "_" + y].getContext("2d"), x * this.q * this.H, y * this.q * this.H);
                        }
                        Au.strokeStyle = "black";
                        if (Cu) {
                            Au.shadowOffsetX = 2;
                            Au.shadowOffsetY = 2;
                            Au.shadowBlur = Math.max(2, 10 * this.H);
                            Au.shadowColor = "black";
                        }
                        for (var P = 0; P < this.I[x][y].AG.length; P++) {
                            this.I[x][y].AG[P].C7(this.Ax[x + "_" + y].getContext("2d"), x * this.q * this.H, y * this.q * this.H);
                        }
                    }
                    B.drawImage(this.Ax[x + "_" + y], Math.floor(p.width / 2 - this.A5.x * this.H + x * this.q * this.H), Math.floor(p.height / 2 - this.A5.y * this.H + y * this.q * this.H));
                }
                B.strokeStyle = "black";
                for (var j = 0; j < this.I[x][y].AD.length; j++) {
                    this.I[x][y].AD[j].Am();
                }
            }
        }
    }
    for (var Ay in this.Ax) {
        if (DI[[Ay]] == undefined) {
            delete this.Ax[Ay];
        }
    }
    if (p.width == 250) {
        return;
    }
    if (V != "camera" && !focus) {
        switch (V) {
        case "line":
        case "scenery line":
        case "brush":
        case "scenery brush":
            B.beginPath();
            B.lineWidth = 1;
            B.strokeStyle = "black";
            var x = Math.round(w.o().x);
            var y = Math.round(w.o().y);
            B.moveTo(x - 10, y);
            B.lineTo(x + 10, y);
            B.moveTo(x, y + 10);
            B.lineTo(x, y - 10);
            B.stroke();
            break;
        case "eraser":
            B.beginPath();
            B.fillStyle = "lightpink";
            B.arc(w.o().x, w.o().y, (BH - 1) * this.H, 0, 2 * Math.PI, true);
            B.fill();
            break;
        case "goal":
        case "checkpoint":
        case "bomb":
            B.beginPath();
            B.fillStyle = V == "goal" ? "yellow" : V == "checkpoint" ? "blue" : "red";
            B.arc(w.o().x, w.o().y, 7 * this.H, 0, 2 * Math.PI, true);
            B.fill();
            B.stroke();
            break;
        case "boost":
        case "gravity":
            B.beginPath();
            B.fillStyle = V == "boost" ? "yellow" : "#00FF00";
            B.save();
            if (!A0) {
                B.translate(w.o().x, w.o().y);
            } else {
                B.translate(AF.o().x, AF.o().y);
                B.rotate(Math.atan2(-(w.x - AF.x), w.y - AF.y));
            }
            B.moveTo(-7 * C.H, -10 * C.H);
            B.lineTo(0, 10 * C.H);
            B.lineTo(7 * C.H, -10 * C.H);
            B.lineTo(-7 * C.H, -10 * C.H);
            B.fill();
            B.stroke();
            B.restore();
            break;
        default:
            ;
        }
    }
    B.beginPath();
    B.fillStyle = "yellow";
    B.lineWidth = 1;
    B.arc(40, 12, 3.5, 0, 2 * Math.PI, true);
    B.fill();
    B.stroke();
    B.beginPath();
    B.lineWidth = 10;
    B.strokeStyle = "white";
    B.fillStyle = "black";
    if (Bb) {
        var text = "Game paused";
    } else if (AP.A9) {
        var text = Z.length > 1 || b.length > 1 ? "Press ENTER to restart or BACKSPACE to cancel checkpoint" : "Press ENTER to restart";
    } else if (this.ID == undefined || this.ID == "banner") {
        var text = "CANVAS RIDER RC7";
        if (this.ID == undefined) {
            if (BT == 10 && (V == "line" || V == "scenery line" || V == "brush" || V == "scenery brush")) {
                text += " - Grid ";
            }
            text += " - " + V;
            if (V == "brush" || V == "scenery brush") {
                text += " ( size " + CF + " )";
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
        text += " - " + (Bb ? "Unpause" : "Pause") + " ( SPACE )";
    }
    B.strokeText(": " + this.Be + " / " + this.BU + "  -  " + text, 50, 16);
    B.fillText(": " + this.Be + " / " + this.BU + "  -  " + text, 50, 16);
    if (label) {
        if (!label[0]) {
            B.strokeText(label[2], 36, 15 + label[1] * 25);
            B.fillText(label[2], 36, 15 + label[1] * 25);
        } else {
            B.textAlign = "right";
            if (document.documentElement.offsetHeight <= window.innerHeight) {
                B.strokeText(label[2], p.width - 36, 15 + label[1] * 25);
                B.fillText(label[2], p.width - 36, 15 + label[1] * 25);
            } else {
                B.strokeText(label[2], p.width - 51, 15 + label[1] * 25);
                B.fillText(label[2], p.width - 51, 15 + label[1] * 25);
            }
            B.textAlign = "left";
        }
    }
};
BI.prototype.Aj = function (U) {
    var x = Math.floor(U.x / this.q - 0.5);
    var y = Math.floor(U.y / this.q - 0.5);
    if (this.I[x] != undefined) {
        if (this.I[x][y] != undefined) {
            for (var P = 0; P < this.I[x][y].AG.length; P++) {
                this.I[x][y].AG[P].Aj(U);
            }
            for (var v = 0; v < this.I[x][y].AL.length; v++) {
                this.I[x][y].AL[v].Aj(U);
            }
            for (var j = 0; j < this.I[x][y].AD.length; j++) {
                this.I[x][y].AD[j].Aj(U);
            }
        }
        if (this.I[x][y + 1] != undefined) {
            for (var P = 0; P < this.I[x][y + 1].AG.length; P++) {
                this.I[x][y + 1].AG[P].Aj(U);
            }
            for (var v = 0; v < this.I[x][y + 1].AL.length; v++) {
                this.I[x][y + 1].AL[v].Aj(U);
            }
            for (var j = 0; j < this.I[x][y + 1].AD.length; j++) {
                this.I[x][y + 1].AD[j].Aj(U);
            }
        }
    }
    if (this.I[x + 1] != undefined) {
        if (this.I[x + 1][y] != undefined) {
            for (var P = 0; P < this.I[x + 1][y].AG.length; P++) {
                this.I[x + 1][y].AG[P].Aj(U);
            }
            for (var v = 0; v < this.I[x + 1][y].AL.length; v++) {
                this.I[x + 1][y].AL[v].Aj(U);
            }
            for (var j = 0; j < this.I[x + 1][y].AD.length; j++) {
                this.I[x + 1][y].AD[j].Aj(U);
            }
        }
        if (this.I[x + 1][y + 1] != undefined) {
            for (var P = 0; P < this.I[x + 1][y + 1].AG.length; P++) {
                this.I[x + 1][y + 1].AG[P].Aj(U);
            }
            for (var v = 0; v < this.I[x + 1][y + 1].AL.length; v++) {
                this.I[x + 1][y + 1].AL[v].Aj(U);
            }
            for (var j = 0; j < this.I[x + 1][y + 1].AD.length; j++) {
                this.I[x + 1][y + 1].AD[j].Aj(U);
            }
        }
    }
    for (var j = 0; j < this.AD.length; j++) {
        if (this.AD[j].remove != undefined) {
            this.AD.splice(j, 1);
            j--;
        }
    }
};
BI.prototype.remove = function (Av, BZ) {
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
BI.prototype.DK = function () {
    if (V == "scenery line" || V == "scenery brush") {
        var x = Math.floor(Bg.x / this.q);
        var y = Math.floor(Bg.y / this.q);
        var v = this.I[x][y].AL[this.I[x][y].AL.length - 1];
        if (v != undefined && v.AK.x == Math.round(Bg.x) && v.AK.y == Math.round(Bg.y)) {
            v.remove = true;
            Bg.AN(v.AH);
            this.remove(v.AH, v.AK);
        } else {
            alert("No more scenery line to erase!");
        }
    } else {
        var x = Math.floor(Bf.x / this.q);
        var y = Math.floor(Bf.y / this.q);
        var P = this.I[x][y].AG[this.I[x][y].AG.length - 1];
        if (P != undefined && P.AK.x == Math.round(Bf.x) && P.AK.y == Math.round(Bf.y)) {
            P.remove = true;
            Bf.AN(P.AH);
            this.remove(P.AH, P.AK);
        } else {
            alert("No more line to erase!");
        }
    }
};
BI.prototype.Bt = function () {
    var AG = "";
    var AL = "";
    var AD = "";
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
            for (var j = 0; j < this.I[x][y].AD.length; j++) {
                AD += this.I[x][y].AD[j].Bt() + ",";
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
    return AG.substr(0, AG.length - 1) + "#" + AL.substr(0, AL.length - 1) + "#" + AD.substr(0, AD.length - 1) + "#" + B3;
};
if (location.href.substr(0, 22) != "http://canvasrider.com") {
    location.href = "http://canvasrider.com";
}
if (!document.createElement("canvas").getContext) {
    location.href = "http://canvasrider.com/error";
}
var p = document.getElementById("canvas_rider");
var B = p.getContext("2d");
B.lineCap = "round";
B.lineJoin = "round";
B.font = "8px eiven";
var BF = document.getElementById("toolbar1");
BF.style.top = p.offsetTop + "px";
BF.style.left = p.offsetLeft + "px";
BF.style.display = "block";
var BB = document.getElementById("toolbar2");
BB.style.top = p.offsetTop + "px";
BB.style.left = p.offsetLeft + p.width - 22 + "px";
var C;
var Bb = false;
var B3 = "BMX";
var De = "BMX";
var Z = new Array(new Array(0, -1, 0, -1, 0, 0, -21, 38, -21, 38, 0, 0, 0, 21, 38, 21, 38, 0, 0, 0, 45, 42, 45, 1, 0, 0.3, false, 0, new Array, 0));
var b = new Array(new Array(2, -3, 2, -3, 0, 0, -23, 35, -23, 35, 0, 0, 0, 23, 35, 23, 35, 0, 0, 0, 47, 45, 45, 1, 0, 0.3, false, 0, new Array, 0));
var K;
var AZ = new Array(new Array, new Array, new Array, new Array, new Array);
var left = 0;
var right = 0;
var AW = 0;
var AR = 0;
var Aq = 0;
var Ct = true;
var focus;
var A0 = false;
var AF = new J(40, 50);
var w = new J(0, 0);
var W = false;
var BH = 15;
var shift = false;
var CF = 20;
var V = "camera";
var DJ = "camera";
var C0 = false;
var label = false;
var BT = 1;
Cu = false;
var Bh = new Array(new Array("", "Restart ( ENTER )", "Cancel checkpoint ( BACKSPACE )", "", "Switch bike ( B - Arrows to control, Z to turn )", "", "Enable line shading", "Enable fullscreen ( F )"), new Array("Brush ( A - Hold to snap, hold & scroll to adjust size )", "Scenery brush ( S - Hold to snap, hold & scroll to adjust size )", "Lines ( Q - Hold to snap )", "Scenery lines ( W - Hold to snap )", "Eraser ( E - Hold & scroll to adjust size )", "Camera ( R - Release or press again to switch back, scroll to zoom )", "Enable grid snapping ( G )", "", "Goal", "Checkpoint", "Boost", "Gravity modifier", "Bomb", "", "Shorten last set of lines ( Z )"));
var Bf = new J(40, 50);
var Bg = new J(-40, 50);

function canvas_ride(DZ, Db) {
    C = new BI(DZ, Db);
    AP = B3 == "BMX" ? new Bk : new Bn;
    focus = AP.h;
    setInterval(AO, 40);
}
function AO() {
    if (!Bb) {
        AP.AO();
        if (W) {
            W.AO();
        }
    }
    C.Am();
    AP.Am();
    if (W) {
        W.Am();
    }
    if (!Bb) {
        AP.z += 40;
    }
}
function watchGhost(DX) {
    var request = new XMLHttpRequest;
    request.open("POST", "js/load.php", false);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("track=" + C.ID + "&ghost=" + DX);
    var DW = request.responseText;
    var CJ = DW.split(",");
    C.AT = new Array(new Array, new Array, new Array, new Array, new Array, CJ[5], CJ[6]);
    for (var BD = 0; BD < CJ.length - 2; BD++) {
        var DT = CJ[BD].split(" ");
        for (var Ay = 0; Ay < DT.length - 1; Ay++) {
            C.AT[BD][DT[Ay]] = 1;
        }
    }
    W = CJ[5];
    C.Cs();
}
function DS() {
    B3 = B3 == "BMX" ? "MTB" : "BMX";
    C.Cs();
}
function DQ() {
    if (C.ID != "banner" && p.width != 250) {
        if (p.width == 600) {
            p.width = window.innerWidth;
            p.height = window.innerHeight;
            p.style.position = "fixed";
            p.style.top = 0;
            p.style.left = 0;
            p.style.border = "none";
            if (document.documentElement.offsetHeight <= window.innerHeight) {
                BB.style.left = p.width - 24 + "px";
            } else {
                BB.style.left = p.width - 39 + "px";
            }
            label[2] = Bh[0][7] = "Disable fullscreen ( ESC or F )";
            window.scrollTo(0, 0);
            p.style.zIndex = 3;
            BF.style.zIndex = BB.style.zIndex = 4;
        } else {
            p.width = 600;
            p.height = 400;
            p.style.position = "static";
            p.style.border = "1px solid black";
            BB.style.left = p.offsetLeft + p.width - 22 + "px";
            label[2] = Bh[0][7] = "Enable fullscreen ( F )";
            p.style.zIndex = 2;
            BF.style.zIndex = BB.style.zIndex = 2;
        }
        B.lineCap = "round";
        B.lineJoin = "round";
        B.font = "8px eiven";
        BF.style.top = BB.style.top = p.offsetTop + "px";
        BF.style.left = p.offsetLeft + "px";
    }
}
document.onkeydown = function (AE) {
    switch (AE.keyCode) {
    case 8:
        if (p.width != 250) {
            AE.preventDefault();
        }
        C.DR();
        C.C2();
        break;
    case 13:
        AE.preventDefault();
        C.C2();
        break;
    case 37:
        AE.preventDefault();
        focus = AP.h;
        left = 1;
        break;
    case 39:
        AE.preventDefault();
        focus = AP.h;
        right = 1;
        break;
    case 38:
        AE.preventDefault();
        focus = AP.h;
        AW = 1;
        break;
    case 40:
        AE.preventDefault();
        focus = AP.h;
        AR = 1;
        break;
    case 109:
        if (C.H > 0.2) {
            C.H = Math.round(C.H * 10 - 2) / 10;
            C.Ax = new Array;
        }
        break;
    case 107:
        if (C.H < 4) {
            C.H = Math.round(C.H * 10 + 2) / 10;
            C.Ax = new Array;
        }
        break;
    case 90:
        if (!focus && C.ID == undefined) {
            C.DK();
        } else if (Ct) {
            Aq = 1;
        }
        break;
    case 32:
        if (p.width != 250) {
            AE.preventDefault();
        }
        Bb = !Bb;
        break;
    default:
        ;
    }
    if (C.ID == undefined) {
        switch (AE.keyCode) {
        case 65:
            if (V != "brush") {
                V = "brush";
                document.body.style.cursor = "none";
                shift = true;
            } else if (!A0) {
                A0 = true;
                AF.AN(Bf);
                shift = true;
            }
            break;
        case 83:
            if (V != "scenery brush") {
                V = "scenery brush";
                document.body.style.cursor = "none";
                shift = true;
            } else if (!A0) {
                A0 = true;
                AF.AN(Bg);
                shift = true;
            }
            break;
        case 81:
            if (V != "line") {
                V = "line";
                document.body.style.cursor = "none";
            } else if (!A0) {
                A0 = true;
                AF.AN(Bf);
                shift = true;
            }
            break;
        case 87:
            if (V != "scenery line") {
                V = "scenery line";
                document.body.style.cursor = "none";
            } else if (!A0) {
                A0 = true;
                AF.AN(Bg);
                shift = true;
            }
            break;
        case 69:
            V = "eraser";
            document.body.style.cursor = "none";
            shift = true;
            break;
        case 82:
            if (V != "camera") {
                DJ = V;
                V = "camera";
                document.body.style.cursor = "move";
            } else {
                C0 = true;
            }
            break;
        default:
            ;
        }
    }
};
document.onkeypress = function (AE) {
    switch (AE.keyCode) {
    case 13:
    case 37:
    case 39:
    case 38:
    case 40:
        AE.preventDefault();
        break;
    case 8:
    case 32:
        if (p.width != 250) {
            AE.preventDefault();
        }
        break;
    default:
        ;
    }
};
document.onkeyup = function (AE) {
    switch (AE.keyCode) {
    case 70:
    case 27:
        DQ();
        break;
    case 66:
        DS();
        break;
    case 37:
        left = 0;
        break;
    case 39:
        right = 0;
        break;
    case 38:
        AW = 0;
        break;
    case 40:
        AR = 0;
        break;
    case 90:
        Ct = true;
        break;
    case 71:
        if (BT == 1) {
            BT = 10;
            Bh[1][6] = "Disable grid snapping ( G )";
        } else {
            BT = 1;
            Bh[1][6] = "Enable grid snapping ( G )";
        }
        break;
    case 82:
        if (C0) {
            V = DJ;
            document.body.style.cursor = "none";
            C0 = false;
        }
        break;
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
        if (C.ID != undefined) {
            watchGhost(AE.keyCode - 48);
        }
        break;
    case 81:
    case 87:
    case 69:
    case 83:
    case 65:
        if (shift) {
            shift = false;
            A0 = false;
        }
        break;
    default:
        ;
    }
};
BF.onmousemove = function (AE) {
    var G = Math.floor((AE.clientY - BF.offsetTop + window.pageYOffset) / 25);
    label = new Array(0, G, Bh[0][G]);
};
BB.onmousemove = function (AE) {
    var G = Math.floor((AE.clientY - BB.offsetTop + window.pageYOffset) / 25);
    label = new Array(1, G, Bh[1][G]);
    if (G == 14) {
        if (V == "sline" || V == "sbrush") {
            label[2] = "Shorten last set of scenery lines ( Z )";
        }
    }
};
BF.onmousedown = function (AE) {
    focus = false;
    switch (Math.floor((AE.clientY - BF.offsetTop + window.pageYOffset) / 25) + 1) {
    case 1:
        Bb = !Bb;
        break;
    case 3:
        C.DR();
    case 2:
        C.C2();
        break;
    case 5:
        DS();
        break;
    case 7:
        if (!Cu) {
            Cu = true;
            label[2] = Bh[0][6] = "Disable line shading";
        } else {
            Cu = false;
            label[2] = Bh[0][6] = "Enable line shading";
        }
        C.Ax = new Array;
        break;
    case 8:
        DQ();
        break;
    default:
        ;
    }
};
BB.onmousedown = function (AE) {
    if (C.ID != undefined) return false;
    focus = false;
    switch (Math.floor((AE.clientY - BF.offsetTop + window.pageYOffset) / 25) + 1) {
    case 1:
        V = "brush";
        break;
    case 2:
        V = "scenery brush";
        break;
    case 3:
        V = "line";
        break;
    case 4:
        V = "scenery line";
        break;
    case 5:
        V = "eraser";
        break;
    case 6:
        V = "camera";
        break;
    case 7:
        if (BT == 1) {
            BT = 10;
            label[2] = Bh[1][6] = "Disable grid snapping ( G )";
        } else {
            BT = 1;
            label[2] = Bh[1][6] = "Enable grid snapping ( G )";
        }
        break;
    case 9:
        V = "goal";
        break;
    case 10:
        V = "checkpoint";
        break;
    case 11:
        V = "boost";
        break;
    case 12:
        V = "gravity";
        break;
    case 13:
        V = "bomb";
        break;
    case 15:
        C.DK();
        break;
    default:
        ;
    }
};
p.onmouseover = function () {
    label = false;
    if (V == "camera") {
        document.body.style.cursor = "move";
    } else {
        document.body.style.cursor = "none";
    }
};
p.onmousedown = function (AE) {
    A0 = true;
    focus = false;
    if (!shift) {
        AF.AN(w);
    }
    switch (V) {
    case "boost":
    case "gravity":
        document.body.style.cursor = "crosshair";
        break;
    case "eraser":
        C.Aj(w);
        break;
    case "goal":
        var Ag = new target(AF.x, AF.y);
        C.BU++;
        C.AD.push(Ag);
        break;
    case "checkpoint":
        var Ag = new CA(AF.x, AF.y);
        C.AD.push(Ag);
        break;
    case "bomb":
        var Ag = new B_(AF.x, AF.y);
        break;
    case "brush":
    case "scenery brush":
        if (shift) {
            if (V == "brush") {
                var P = new line(AF.x, AF.y, w.x, w.y);
            } else {
                var P = new B5(AF.x, AF.y, w.x, w.y);
            }
            if (P.length >= 2 && P.length < 100000) {
                var I = CG(new J(P.AH.x, P.AH.y), new J(P.AK.x, P.AK.y), C.q);
                for (var T = 0; T < I.length; T++) {
                    var x = Math.floor(I[T].x / C.q);
                    var y = Math.floor(I[T].y / C.q);
                    if (C.I[x] == undefined) {
                        C.I[x] = new Array;
                    }
                    if (C.I[x][y] == undefined) {
                        C.I[x][y] = new BP;
                    }
                    if (V == "brush") {
                        C.I[x][y].AG.push(P);
                    } else {
                        C.I[x][y].AL.push(P);
                    }
                    delete C.Ax[x + "_" + y];
                }
                if (V == "brush") {
                    Bf.AN(w);
                } else {
                    Bg.AN(w);
                }
                AF.AN(w);
            }
        }
        shift = false;
        A0 = true;
        break;
    default:
        ;
    }
    if (Ag != undefined) {
        var x = Math.floor(Ag.G.x / C.q);
        var y = Math.floor(Ag.G.y / C.q);
        if (C.I[x] == undefined) {
            C.I[x] = new Array;
        }
        if (C.I[x][y] == undefined) {
            C.I[x][y] = new BP(x, y);
        }
        C.I[x][y].AD.push(Ag);
    }
};
document.onmousemove = function (AE) {
    if (V != "camera") {
        focus = false;
    }
    w = (new J(AE.clientX - p.offsetLeft, AE.clientY - p.offsetTop + window.pageYOffset)).Cr();
    if (V != "eraser") {
        w.x = Math.round(w.x / BT) * BT;
        w.y = Math.round(w.y / BT) * BT;
    }
    if (A0) {
        if (V == "camera") {
            C.A5.Ai(AF.sub(w));
            w.AN(AF);
        } else if (V == "eraser") {
            C.Aj(w);
        } else if ((V == "brush" || V == "scenery brush") && AF.sub(w).length() >= CF && !shift) {
            if (V == "brush") {
                var P = new line(AF.x, AF.y, w.x, w.y);
            } else {
                var P = new B5(AF.x, AF.y, w.x, w.y);
            }
            var I = CG(new J(P.AH.x, P.AH.y), new J(P.AK.x, P.AK.y), C.q);
            for (var T = 0; T < I.length; T++) {
                var x = Math.floor(I[T].x / C.q);
                var y = Math.floor(I[T].y / C.q);
                if (C.I[x] == undefined) {
                    C.I[x] = new Array;
                }
                if (C.I[x][y] == undefined) {
                    C.I[x][y] = new BP;
                }
                if (V == "brush") {
                    C.I[x][y].AG.push(P);
                } else {
                    C.I[x][y].AL.push(P);
                }
                delete C.Ax[x + "_" + y];
            }
            if (V == "brush") {
                Bf.AN(w);
            } else {
                Bg.AN(w);
            }
            AF.AN(w);
        }
    }
};
p.onmouseup = function () {
    if (A0) {
        if (V == "line" || V == "scenery line" || V == "brush" || V == "scenery brush") {
            if (V == "line" || V == "brush") {
                var P = new line(AF.x, AF.y, w.x, w.y);
            } else {
                var P = new B5(AF.x, AF.y, w.x, w.y);
            }
            if (P.length >= 2 && P.length < 100000) {
                var I = CG(new J(P.AH.x, P.AH.y), new J(P.AK.x, P.AK.y), C.q);
                for (var T = 0; T < I.length; T++) {
                    var x = Math.floor(I[T].x / C.q);
                    var y = Math.floor(I[T].y / C.q);
                    if (C.I[x] == undefined) {
                        C.I[x] = new Array;
                    }
                    if (C.I[x][y] == undefined) {
                        C.I[x][y] = new BP;
                    }
                    if (V == "line" || V == "brush") {
                        C.I[x][y].AG.push(P);
                    } else {
                        C.I[x][y].AL.push(P);
                    }
                    delete C.Ax[x + "_" + y];
                }
                if (V == "line" || V == "brush") {
                    Bf.AN(w);
                } else {
                    Bg.AN(w);
                }
                AF.AN(w);
            }
        } else if (V == "boost" || V == "gravity") {
            document.body.style.cursor = "none";
            var Ag = V == "boost" ? new CB(AF.x, AF.y, Math.round(Math.atan2(-(w.x - AF.x), w.y - AF.y) * 180 / Math.PI)) : new CD(AF.x, AF.y, Math.round(Math.atan2(-(w.x - AF.x), w.y - AF.y) * 180 / Math.PI));
            var x = Math.floor(Ag.G.x / C.q);
            var y = Math.floor(Ag.G.y / C.q);
            if (C.I[x] == undefined) {
                C.I[x] = new Array;
            }
            if (C.I[x][y] == undefined) {
                C.I[x][y] = new BP(x, y);
            }
            C.I[x][y].AD.push(Ag);
        }
    }
};
document.onmouseup = function () {
    if (!shift) {
        A0 = false;
    }
};
p.onmouseout = function () {
    document.body.style.cursor = "default";
};
document.getElementById("new").onclick = function () {
    if (confirm("Do you really want to start a new track?")) {
        C = new BI;
        document.getElementById("charcount").innerHTML = "Trackcode";
        document.getElementById("trackcode").value = null;
        C.Cs();
    }
};
document.getElementById("load").onclick = function () {
    if (document.getElementById("trackcode").value.length > 10) {
        C = new BI(document.getElementById("trackcode").value);
        document.getElementById("charcount").innerHTML = "Trackcode";
        document.getElementById("trackcode").value = null;
        C.Cs();
    } else {
        alert("No trackcode to load!");
    }
};
document.getElementById("save").onclick = function () {
    if (C.ID == undefined) {
        document.getElementById("trackcode").value = C.Bt();
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
        var DH = C.Bt();
        if (DH.length > 2000) {
            Bb = true;
            V = "camera";
            p.width = 250;
            p.height = 150;
            BF.style.display = "none";
            BB.style.display = "none";
            B.lineCap = "round";
            B.lineJoin = "round";
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
                var DE = p.toDataURL("image/png");
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
            document.getElementById("content").insertBefore(Bc, p.nextSibling);
            var adjust = document.createElement("div");
            adjust.style.color = p.style.borderColor = "red";
            adjust.innerHTML = "Use your mouse to drag & fit an interesting part of your track in the thumbnail<br/><br/>";
            document.getElementById("content").insertBefore(adjust, p);
        } else {
            alert("Sorry, but your track must be bigger or more detailed.");
            return false;
        }
    }
};

function H(AE) {
    if (C.ID != "banner") {
        AE.preventDefault();
        if (shift) {
            if (V == "eraser") {
                if ((AE.detail > 0 || AE.wheelDelta < 0) && BH > 5) {
                    BH -= 5;
                } else if ((AE.detail < 0 || AE.wheelDelta > 0) && BH < 40) {
                    BH += 5;
                }
            } else if (V == "brush" || V == "scenery brush") {
                if ((AE.detail > 0 || AE.wheelDelta < 0) && CF > 4) {
                    CF -= 8;
                } else if ((AE.detail < 0 || AE.wheelDelta > 0) && CF < 200) {
                    CF += 8;
                }
            }
        } else {
            if ((AE.detail > 0 || AE.wheelDelta < 0) && C.H > 0.2) {
                C.H = Math.round(C.H * 10 - 2) / 10;
            } else if ((AE.detail < 0 || AE.wheelDelta > 0) && C.H < 4) {
                C.H = Math.round(C.H * 10 + 2) / 10;
            }
            C.Ax = new Array;
        }
        var Cw = (new J(AE.clientX - p.offsetLeft, AE.clientY - p.offsetTop + window.pageYOffset)).Cr();
        if (!focus) {
            C.A5.Ai(w.sub(Cw));
        }
    }
}
p.addEventListener("DOMMouseScroll", H, false);
p.addEventListener("mousewheel", H, false);