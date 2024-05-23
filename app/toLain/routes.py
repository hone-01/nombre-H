from flask import render_template, redirect, url_for

from . import lainContact

@lainContact.route('/wired', methods=['GET'])
def redirecto_to_wired_sounds():
    return redirect('https://fauux.neocities.org/')
