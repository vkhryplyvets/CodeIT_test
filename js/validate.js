"use strict";

function validate() {
	//Считаем значения из полей name и email в переменные x и y
	var name = document.forms["sign_up_form"]["name"].value;
	var secondname  = document.forms["sign_up_form"]["secondname"].value;
	var email  = document.forms["sign_up_form"]["email"].value;
	var pass  = document.forms["sign_up_form"]["pass"].value;
	//Если поле name или secondname пустое -  выводим сообщение и предотврааем отправку формы
	if (name.length < 4){
		alert ( "Пожалуйста, заполните поле 'Username', количество символов не менее 4.");
		return false;
	}
	if (secondname.length < 4){
		alert ( "Пожалуйста, заполните поле 'Secondname', количество символов не менее 4.");
		return false;
	}
	//Если поле email пустое - выводим сообщение и предотврааем отправку формы
	if (email.length==0){
		alert ( "Пожалуйста, заполните поле 'Email'");
		return false;
	}
	//Проверяем содержит ли значение введенное в поле email символы @ и .
	at = email.indexOf("@");
	dot = email.indexOf(".");
	if (at < 1 || dot < 1){
		alert ("Поле 'Email' должно содержать символы '@' и '.'");
		return false;
	}
	// Проверяем, чтобы длина пароля была не менее 6 символов
	if (pass.length < 6){
		alert ( "Пожалуйста, заполните поле 'Password', количество символов не менее 6.");
		return false;
	}
	if (document.sign_up_form.Agreement.checked == false )
        {
                alert ( "Пожалуйста, подствердите согласие с Соглашением." );
                return false;
        }
}