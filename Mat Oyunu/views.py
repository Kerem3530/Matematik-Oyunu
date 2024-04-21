from flask import Blueprint, render_template, request, redirect, url_for, jsonify

views = Blueprint(__name__, "views")

@views.route("/")
def anasayfa():
    return render_template("index.html")

@views.route("/hakkinda")
def hakkinda():
    return render_template("Hakkinda.html")

@views.route("/islemsecme")
def islemsecme():
    return render_template("IslemSecme.html")

@views.route("/toplama")
def toplama():
    return render_template("Toplama.html")

@views.route("/cikarma")
def cikarma():
    return render_template("Cikarma.html")

@views.route("/carpma")
def carpma():
    return render_template("Carpma.html")

@views.route("/bolme")
def bolme():
    return render_template("Bolme.html")