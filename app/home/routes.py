from flask import redirect, render_template, request

from . import home_bp

@home_bp.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':# Se resive el formulario
        return logged()
    else: # Se accede a la pagina
        return render_template("home-in.html")

@home_bp.route('/system', methods=['GET', 'POST'])
def logged():
    return render_template('h.html')

@home_bp.route('/caminar', methods=['GET'])
def night1():
    return render_template('dreams/night1.html')

