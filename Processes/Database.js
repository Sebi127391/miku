const  { sessionSchema }  =  require ( "../Database" ) ;

Modul . Exporte  =  Klasse  Datenbank  {
  Konstruktor ( )  { }
  /**
   * @param { Zeichenfolge } Sitzungs-ID
   * @returns { Promise<{sessionId: string, session: string }>}
   */

  getSession  =  async  ( sessionId )  =>  darauf warten  . Sitzung . findOne ( { sessionId } ) ;

  session  =  sessionSchema ;
} ;






















