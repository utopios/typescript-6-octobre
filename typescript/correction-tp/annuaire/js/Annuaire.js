"use strict";
exports.__esModule = true;
exports.Annuaire = void 0;
var Annuaire = /** @class */ (function () {
    function Annuaire() {
        this.contacts = [];
    }
    Annuaire.prototype.addContact = function (contact) {
        this.contacts.push(contact);
    };
    Annuaire.prototype.findContact = function (searchMethod) {
        var result = [];
        for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
            var c = _a[_i];
            if (searchMethod(c)) {
                result.push(c);
            }
        }
        return result;
    };
    return Annuaire;
}());
exports.Annuaire = Annuaire;
