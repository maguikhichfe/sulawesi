// DATA
const GEM_FAULTS     = [{"i":0,"id":"f0","t":"Reverse","c":[[124.1837,7.0262],[124.2674,6.983],[124.338,6.9267],[124.3874,6.9057],[124.4086,6.8661],[124.4087,6.8444],[124.4841,6.6929],[124.6479,6.4115],[124.7496,6.273],[124.7674,6.2297],[124.794,6.1647],[124.8516,6.0651],[124.8914,6.0132],[124.9751,5.9742],[125.1159,5.9613]]},{"i":1,"id":"f1","t":"Reverse","c":[[125.6315,6.6024],[125.6804,6.5637],[125.7412,6.4831],[125.7963,6.3818],[125.8445,6.2074],[125.8635,5.9787],[125.8294,5.805],[125.7814,5.637]]},{"i":2,"id":"f2","t":"Sinistral_Transform","c":[[125.159,-10.159],[125.482,-9.984]]},{"i":3,"id":"f3","t":"Sinistral_Transform","c":[[126.333,-9.596],[126.853,-9.39]]},{"i":4,"id":"f4","t":"Sinistral_Transform","c":[[126.853,-9.39],[127.43,-9.221]]},{"i":5,"id":"f5","t":"Sinistral_Transform","c":[[127.43,-9.221],[127.9,-9.133]]},{"i":6,"id":"f6","t":"Sinistral_Transform","c":[[127.9,-9.133],[128.376,-9.095]]},{"i":7,"id":"f7","t":"Subduction_Thrust","c":[[127.25,6.447],[127.459,5.897]]},{"i":8,"id":"f8","t":"Subduction_Thrust","c":[[127.459,5.897],[127.498,5.474]]},{"i":9,"id":"f9","t":"Subduction_Thrust","c":[[127.498,5.474],[127.836,5.224]]},{"i":10,"id":"f10","t":"Subduction_Thrust","c":[[127.836,5.224],[128.151,4.763]]},{"i":11,"id":"f11","t":"Subduction_Thrust","c":[[128.151,4.763],[128.387,4.335]]},{"i":12,"id":"f12","t":"Subduction_Thrust","c":[[128.387,4.335],[128.684,3.7]]},{"i":13,"id":"f13","t":"Subduction_Thrust","c":[[128.684,3.7],[128.998,3.114]]},{"i":14,"id":"f14","t":"Subduction_Thrust","c":[[128.998,3.114],[129.217,2.671]]},{"i":15,"id":"f15","t":"Subduction_Thrust","c":[[129.217,2.671],[129.246,1.928]]},{"i":16,"id":"f16","t":"Subduction_Thrust","c":[[129.246,1.928],[129.197,1.059]]},{"i":17,"id":"f17","t":"Subduction_Thrust","c":[[126.872,2.346],[127.446,2.319]]},{"i":18,"id":"f18","t":"Subduction_Thrust","c":[[126.872,2.346],[126.426,1.706]]},{"i":19,"id":"f19","t":"Subduction_Thrust","c":[[123.43,2.006],[123.219,2.024]]},{"i":20,"id":"f20","t":"Subduction_Thrust","c":[[123.219,2.024],[122.48,2.377]]},{"i":21,"id":"f21","t":"Subduction_Thrust","c":[[122.48,2.377],[121.669,2.309]]},{"i":22,"id":"f22","t":"Subduction_Thrust","c":[[121.669,2.309],[120.824,2.311]]},{"i":23,"id":"f23","t":"Subduction_Thrust","c":[[120.824,2.311],[120.189,2.208]]},{"i":24,"id":"f24","t":"Subduction_Thrust","c":[[120.189,2.208],[119.696,2.033]]},{"i":25,"id":"f25","t":"Subduction_Thrust","c":[[119.696,2.033],[119.306,1.577]]},{"i":26,"id":"f26","t":"Subduction_Thrust","c":[[119.306,1.577],[119.249,0.714]]},{"i":27,"id":"f27","t":"Subduction_Thrust","c":[[122.823,-2.598],[123.424,-2.846]]},{"i":28,"id":"f28","t":"Subduction_Thrust","c":[[123.424,-2.846],[123.672,-3.094]]},{"i":29,"id":"f29","t":"Subduction_Thrust","c":[[123.672,-3.094],[123.706,-3.941]]},{"i":30,"id":"f30","t":"Subduction_Thrust","c":[[123.706,-3.941],[123.458,-4.576]]},{"i":31,"id":"f31","t":"Subduction_Thrust","c":[[123.458,-4.576],[124.06,-4.701]]},{"i":32,"id":"f32","t":"Subduction_Thrust","c":[[124.06,-4.701],[124.662,-4.824]]},{"i":33,"id":"f33","t":"Subduction_Thrust","c":[[124.662,-4.824],[125.282,-4.789]]},{"i":34,"id":"f34","t":"Subduction_Thrust","c":[[125.282,-4.789],[125.901,-4.754]]},{"i":35,"id":"f35","t":"Subduction_Thrust","c":[[125.901,-4.754],[126.432,-4.471]]},{"i":36,"id":"f36","t":"Subduction_Thrust","c":[[126.432,-4.471],[126.963,-4.188]]},{"i":37,"id":"f37","t":"Subduction_Thrust","c":[[125.969,-0.278],[125.969,0.19]]},{"i":38,"id":"f38","t":"Subduction_Thrust","c":[[119.475,-0.081],[119.296,-0.68]]},{"i":39,"id":"f39","t":"Subduction_Thrust","c":[[119.296,-0.68],[119.045,-1.491]]},{"i":40,"id":"f40","t":"Subduction_Thrust","c":[[119.045,-1.491],[118.884,-1.95]]},{"i":41,"id":"f41","t":"Subduction_Thrust","c":[[118.884,-1.95],[118.723,-2.408]]},{"i":42,"id":"f42","t":"Subduction_Thrust","c":[[118.723,-2.408],[118.578,-3.255]]},{"i":43,"id":"f43","t":"Subduction_Thrust","c":[[118.578,-3.255],[118.823,-3.61]]},{"i":44,"id":"f44","t":"Sinistral_Transform","c":[[126.817,-1.018],[126.393,-0.648]]},{"i":45,"id":"f45","t":"Subduction_Thrust","c":[[128.383,-2.286],[129.258,-2.416]]},{"i":46,"id":"f46","t":"Subduction_Thrust","c":[[129.258,-2.416],[130.107,-2.519]]},{"i":47,"id":"f47","t":"Subduction_Thrust","c":[[130.107,-2.519],[130.585,-2.694]]},{"i":48,"id":"f48","t":"Subduction_Thrust","c":[[130.585,-2.694],[131.063,-2.868]]},{"i":49,"id":"f49","t":"Subduction_Thrust","c":[[131.063,-2.868],[131.489,-3.149]]},{"i":50,"id":"f50","t":"Subduction_Thrust","c":[[131.489,-3.149],[131.915,-3.429]]},{"i":51,"id":"f51","t":"Subduction_Thrust","c":[[131.915,-3.429],[132.316,-3.935]]},{"i":52,"id":"f52","t":"Subduction_Thrust","c":[[132.316,-3.935],[132.717,-4.44]]},{"i":53,"id":"f53","t":"Subduction_Thrust","c":[[133.311,-4.626],[133.906,-4.812]]},{"i":54,"id":"f54","t":"Subduction_Thrust","c":[[120.543,-7.812],[121.253,-7.99]]},{"i":55,"id":"f55","t":"Subduction_Thrust","c":[[121.253,-7.99],[121.891,-8.062]]},{"i":56,"id":"f56","t":"Subduction_Thrust","c":[[121.891,-8.062],[122.673,-7.853]]},{"i":57,"id":"f57","t":"Subduction_Thrust","c":[[122.673,-7.853],[123.383,-7.784]]},{"i":58,"id":"f58","t":"Subduction_Thrust","c":[[124.235,-7.784],[124.75,-7.644]]},{"i":59,"id":"f59","t":"Subduction_Thrust","c":[[124.75,-7.644],[125.264,-7.503]]},{"i":60,"id":"f60","t":"Subduction_Thrust","c":[[125.264,-7.503],[125.761,-7.433]]},{"i":61,"id":"f61","t":"Subduction_Thrust","c":[[125.761,-7.433],[126.258,-7.309]]},{"i":62,"id":"f62","t":"Subduction_Thrust","c":[[126.258,-7.309],[126.755,-7.185]]},{"i":63,"id":"f63","t":"Subduction_Thrust","c":[[126.755,-7.185],[127.393,-7.184]]},{"i":64,"id":"f64","t":"Subduction_Thrust","c":[[127.393,-7.184],[127.854,-6.99]]},{"i":65,"id":"f65","t":"Subduction_Thrust","c":[[127.854,-6.99],[128.315,-6.795]]},{"i":66,"id":"f66","t":"Subduction_Thrust","c":[[128.315,-6.795],[128.776,-6.565]]},{"i":67,"id":"f67","t":"Subduction_Thrust","c":[[128.776,-6.565],[129.236,-6.334]]},{"i":68,"id":"f68","t":"Subduction_Thrust","c":[[130.443,-6.717],[131.01,-6.68]]},{"i":69,"id":"f69","t":"Subduction_Thrust","c":[[135.656,-0.023],[134.938,0.421]]},{"i":70,"id":"f70","t":"Subduction_Thrust","c":[[134.938,0.421],[134.471,0.259]]},{"i":71,"id":"f71","t":"Subduction_Thrust","c":[[134.471,0.259],[133.899,0.057]]},{"i":72,"id":"f72","t":"Subduction_Thrust","c":[[133.899,0.057],[133.327,-0.146]]},{"i":73,"id":"f73","t":"Subduction_Thrust","c":[[133.327,-0.146],[132.824,-0.043]]},{"i":74,"id":"f74","t":"Subduction_Thrust","c":[[132.824,-0.043],[132.515,0.017]]},{"i":75,"id":"f75","t":"Subduction_Thrust","c":[[132.515,0.017],[132.373,0.034]]},{"i":76,"id":"f76","t":"Subduction_Thrust","c":[[132.373,0.034],[131.738,0.15]]},{"i":77,"id":"f77","t":"Subduction_Thrust","c":[[131.738,0.15],[131.102,0.266]]},{"i":78,"id":"f78","t":"Subduction_Thrust","c":[[131.102,0.266],[130.546,0.475]]},{"i":79,"id":"f79","t":"Subduction_Thrust","c":[[130.546,0.475],[129.989,0.684]]},{"i":80,"id":"f80","t":"Subduction_Thrust","c":[[129.989,0.684],[129.197,1.059]]},{"i":81,"id":"f81","t":"Subduction_Thrust","c":[[125.969,0.19],[125.616,-0.128]]},{"i":82,"id":"f82","t":"Subduction_Thrust","c":[[125.616,-0.128],[125.263,-0.446]]},{"i":83,"id":"f83","t":"Dextral_Transform","c":[[125.263,-0.446],[124.857,-0.269]]},{"i":84,"id":"f84","t":"Dextral_Transform","c":[[124.857,-0.269],[124.416,0.013]]},{"i":85,"id":"f85","t":"Dextral_Transform","c":[[123.535,1.354],[123.448,1.812]]},{"i":86,"id":"f86","t":"Dextral_Transform","c":[[123.448,1.812],[123.43,2.006]]},{"i":87,"id":"f87","t":"Spreading_Ridge","c":[[133.674,6.156],[133.429,5.962]]},{"i":88,"id":"f88","t":"Spreading_Ridge","c":[[133.429,5.962],[133.308,5.734]]},{"i":89,"id":"f89","t":"Spreading_Ridge","c":[[133.308,5.734],[133.24,5.349]]},{"i":90,"id":"f90","t":"Spreading_Ridge","c":[[133.24,5.349],[133.189,5.016]]},{"i":91,"id":"f91","t":"Spreading_Ridge","c":[[133.189,5.016],[133.032,4.788]]},{"i":92,"id":"f92","t":"Spreading_Ridge","c":[[133.032,4.788],[132.911,4.454]]},{"i":93,"id":"f93","t":"Spreading_Ridge","c":[[132.911,4.454],[132.79,4.12]]},{"i":94,"id":"f94","t":"Spreading_Ridge","c":[[132.79,4.12],[132.74,3.698]]},{"i":95,"id":"f95","t":"Spreading_Ridge","c":[[132.74,3.698],[132.795,3.312]]},{"i":96,"id":"f96","t":"Spreading_Ridge","c":[[132.795,3.312],[132.85,2.908]]},{"i":97,"id":"f97","t":"Spreading_Ridge","c":[[132.85,2.908],[132.817,2.539]]},{"i":98,"id":"f98","t":"Spreading_Ridge","c":[[132.817,2.539],[132.766,2.257]]},{"i":99,"id":"f99","t":"Spreading_Ridge","c":[[132.766,2.257],[132.734,1.728]]},{"i":100,"id":"f100","t":"Spreading_Ridge","c":[[132.734,1.728],[132.72,1.165]]},{"i":101,"id":"f101","t":"Spreading_Ridge","c":[[132.72,1.165],[132.651,0.812]]},{"i":102,"id":"f102","t":"Spreading_Ridge","c":[[132.651,0.812],[132.515,0.017]]},{"i":103,"id":"f103","t":"Subduction_Thrust","c":[[126.426,1.706],[126.144,1.001]]},{"i":104,"id":"f104","t":"Subduction_Thrust","c":[[126.426,1.706],[126.144,1.001]]},{"i":105,"id":"f105","t":"Subduction_Thrust","c":[[126.144,1.001],[125.969,0.19]]},{"i":106,"id":"f106","t":"Subduction_Thrust","c":[[126.144,1.001],[125.969,0.19]]},{"i":107,"id":"f107","t":"Dextral","c":[[116.053,-7.497],[116.467,-7.668],[117.479,-7.688],[118.437,-7.622],[119.079,-7.576],[120.676,-7.53]]},{"i":108,"id":"f108","t":"Dextral","c":[[120.676,-7.53],[123.759,-7.847],[124.58,-7.871],[125.234,-7.755],[125.841,-7.53],[126.372,-7.131]]},{"i":109,"id":"f109","t":"Dextral","c":[[126.372,-7.131],[126.829,-7.055],[127.544,-6.922],[128.303,-6.835],[129.053,-6.77],[129.825,-6.697],[130.247,-6.355],[130.626,-5.791],[130.951,-5.237]]},{"i":110,"id":"f110","t":"Dextral","c":[[130.187,-4.035],[128.349,-4.274],[127.59,-4.214],[126.036,-4.122]]},{"i":111,"id":"palu_koro","t":"Dextral","c":[[120.351,-2.147],[120.213,-1.993],[120.094,-1.743],[120.002,-1.423],[119.882,-1.135],[119.836,-0.772],[119.744,-0.644],[119.744,-0.321],[119.425,0.221],[119.379,0.427],[119.346,0.834],[119.438,1.138],[119.438,1.836]]},{"i":112,"id":"matano_w","t":"Dextral","c":[[120.66,-2.193],[120.863,-2.378],[121.033,-2.424],[121.31,-2.47],[121.643,-2.562],[121.789,-2.685],[122.0,-2.685]]},{"i":113,"id":"matano_e","t":"Dextral","c":[[123.187,-2.972],[123.51,-3.064],[123.739,-3.178],[123.926,-3.395],[124.031,-3.517],[124.078,-3.658],[124.078,-3.854],[123.964,-4.082],[123.891,-4.266],[123.647,-4.529]]},{"i":114,"id":"f114","t":"Dextral","c":[[124.99,3.861],[125.036,4.223],[125.059,4.483],[124.99,4.752],[124.898,4.964],[124.558,5.268],[124.108,5.523],[123.865,5.615],[123.536,5.932],[123.387,6.18],[123.256,6.53]]},{"i":115,"id":"halmahera_arc_faults","t":"Dextral","c":[[124.876,0.297],[125.055,0.52],[125.28,0.856],[125.498,1.13],[125.59,1.553],[125.682,1.814],[125.75,2.298],[125.842,2.485],[125.888,2.578],[125.888,2.911],[125.98,3.071],[126.16,3.429],[126.325,3.755],[126.473,4.131],[126.583,4.437],[126.629,5.2]]},{"i":116,"id":"f116","t":"Dextral","c":[[127.149,-0.995],[126.845,-0.489],[126.819,-0.256],[126.772,0.053],[126.772,0.251],[126.845,0.406],[126.892,0.704],[127.005,1.176],[127.195,1.6],[127.376,1.838],[127.422,2.017],[127.517,2.344],[127.588,2.578],[127.588,3.117],[127.634,3.227],[127.563,3.522],[127.493,3.884],[127.422,4.391],[127.447,4.706],[127.493,5.107],[127.563,5.449]]},{"i":117,"id":"f117","t":"Dextral","c":[[133.814,-0.891],[133.906,-0.949],[133.958,-1.101],[134.069,-1.28],[134.18,-1.498]]},{"i":118,"id":"f118","t":"Reverse","c":[[132.373,-0.026],[132.736,0.342],[133.393,0.612],[134.179,0.52],[135.257,0.274],[136.893,-0.405],[137.66,-0.601],[138.293,-0.815],[138.685,-0.904],[138.907,-0.95],[139.047,-1.038],[139.172,-1.174],[139.989,-1.639],[140.148,-1.689],[140.462,-1.751],[140.821,-1.8],[141.67,-2.201],[142.8,-2.783],[143.47,-2.845],[143.581,-2.872],[143.692,-2.908],[143.751,-2.957]]},{"i":119,"id":"south_sulawesi_faults","t":"Dextral","c":[[120.518,-6.612],[120.586,-6.148],[120.548,-5.733],[120.413,-5.431],[120.099,-4.981],[119.9,-4.674],[119.864,-4.444],[119.9,-4.272],[119.864,-4.026],[119.832,-3.789],[119.675,-3.662],[119.522,-3.399]]},{"i":120,"id":"central_sulawesi","t":"Dextral","c":[[120.29,-1.83],[120.358,-1.559],[120.377,-0.891]]},{"i":121,"id":"matano_sula","t":"Dextral","c":[[122.339,-1.01],[122.606,-0.777],[122.876,-0.752],[123.238,-0.789],[123.525,-0.822],[123.764,-0.789],[124.329,-0.584]]},{"i":122,"id":"gorontalo","t":"Dextral","c":[[122.741,1.129],[122.785,0.912],[122.92,0.637],[123.306,0.014]]},{"i":123,"id":"f123","t":"Dextral","c":[[133.958,-1.101],[134.332,-1.223],[134.889,-1.399],[135.438,-1.469],[136.174,-1.576],[136.878,-1.69],[137.156,-1.777],[137.767,-1.751]]},{"i":124,"id":"sorong_main","t":"Dextral","c":[[123.238,-0.789],[124.165,-1.01],[125.045,-1.15],[126.278,-1.219],[127.253,-1.22],[128.709,-1.15],[130.217,-1.01],[130.695,-0.94],[131.037,-0.842],[131.767,-0.726],[131.945,-0.661],[132.341,-0.726],[133.081,-0.778],[133.695,-0.824],[133.814,-0.891]]},{"i":125,"id":"sorong_s","t":"Dextral","c":[[122.204,-2.79],[122.852,-2.79],[123.764,-2.525],[124.128,-2.372],[124.707,-2.148],[126.234,-2.009],[127.321,-1.99],[127.675,-1.953],[128.307,-1.883],[128.861,-1.744],[129.354,-1.604],[129.78,-1.445],[130.082,-1.244],[130.217,-1.01]]},{"i":126,"id":"f126","t":"Reverse","c":[[132.625,-0.014],[133.046,-0.084],[133.524,-0.154],[134.168,-0.207],[134.399,-0.256],[134.598,-0.371],[134.753,-0.51],[134.889,-0.703],[135.0,-0.936]]},{"i":127,"id":"f127","t":"Normal","c":[[132.514,-6.561],[132.681,-6.235],[132.828,-6.061],[132.972,-5.852],[133.05,-5.654],[133.161,-5.23],[133.194,-4.896],[133.194,-4.415]]},{"i":128,"id":"f128","t":"Normal","c":[[132.528,-6.672],[132.887,-6.347],[133.148,-5.9],[133.305,-5.828],[133.341,-5.788],[133.341,-5.605],[133.708,-4.918],[134.34,-4.304]]},{"i":129,"id":"f129","t":"Normal","c":[[134.589,-4.527],[134.327,-4.865],[134.216,-5.141],[133.893,-5.703],[133.597,-6.107],[133.341,-6.449],[133.014,-6.751]]},{"i":130,"id":"f130","t":"Dextral","c":[[131.719,-3.804],[131.988,-3.985],[132.6,-4.241]]},{"i":131,"id":"f131","t":"Dextral","c":[[130.891,-3.949],[131.219,-3.838]]},{"i":132,"id":"f132","t":"Reverse","c":[[131.982,-2.743],[132.204,-2.651],[132.56,-2.651],[132.782,-2.832],[132.782,-2.987],[132.972,-3.614],[133.171,-3.775],[133.282,-4.018]]},{"i":133,"id":"f133","t":"Dextral","c":[[130.677,-0.783],[131.283,-0.56],[131.766,-0.401]]},{"i":134,"id":"f134","t":"Reverse","c":[[132.867,-0.818],[132.315,-0.877],[132.093,-0.93],[131.766,-0.93],[131.623,-0.743]]},{"i":135,"id":"f135","t":"Reverse","c":[[133.305,-0.93],[132.815,-0.93],[132.658,-0.989],[132.489,-0.95],[132.315,-0.877]]},{"i":136,"id":"f136","t":"Reverse","c":[[133.916,-1.61],[133.609,-1.61],[133.083,-1.524],[132.88,-1.413],[132.671,-1.413],[132.489,-1.498],[132.204,-1.498],[131.956,-1.341],[131.789,-1.301],[131.655,-1.189]]},{"i":137,"id":"f137","t":"Reverse","c":[[133.556,-2.116],[132.894,-1.623],[132.671,-1.511],[132.489,-1.498]]},{"i":138,"id":"f138","t":"Dextral","c":[[134.027,-1.453],[134.069,-1.662],[134.098,-2.155],[134.138,-2.379],[134.32,-2.763],[134.562,-3.144],[134.703,-3.454]]},{"i":139,"id":"f139","t":"Dextral","c":[[134.507,-2.438],[134.589,-3.013]]},{"i":140,"id":"f140","t":"Dextral","c":[[134.674,-2.936],[134.925,-3.614]]},{"i":141,"id":"f141","t":"Dextral","c":[[134.989,-3.749],[135.235,-3.933]]},{"i":142,"id":"f142","t":"Normal","c":[[133.805,-3.581],[133.936,-3.454],[133.987,-3.454],[134.32,-3.124]]},{"i":143,"id":"f143","t":"Normal","c":[[134.657,-3.581],[134.412,-3.726],[134.327,-3.775],[134.209,-3.804],[134.098,-3.906]]},{"i":144,"id":"f144","t":"Dextral","c":[[134.814,-4.1],[135.036,-4.018],[135.382,-3.916],[135.814,-3.887]]},{"i":145,"id":"f145","t":"Dextral","c":[[134.902,-4.241],[135.124,-4.212],[135.235,-4.169],[135.467,-4.08],[135.859,-4.044],[136.052,-3.749]]},{"i":146,"id":"f146","t":"Subduction_Thrust","c":[[127.535,-9.308],[126.854,-9.527],[125.35,-10.007],[124.457,-10.601],[123.661,-11.008],[123.411,-11.032],[122.723,-11.412],[121.621,-12.112],[121.331,-12.185],[120.979,-12.204],[120.148,-11.588],[119.542,-11.322]]},{"i":147,"id":"f147","t":"Subduction_Thrust","c":[[133.45,-6.041],[132.76,-6.936],[131.848,-7.915],[131.176,-8.485],[130.564,-8.694],[129.6,-8.922],[128.216,-9.09],[127.535,-9.308]]},{"i":148,"id":"f148","t":"Subduction_Thrust","c":[[124.28,15.207],[124.681,14.922],[124.966,14.59],[125.081,14.406],[125.175,14.152],[125.344,13.768],[125.378,13.648],[125.407,13.497],[125.615,13.094],[125.676,12.851],[125.803,12.658],[125.904,12.476],[126.028,12.303],[126.155,12.041],[126.267,11.764],[126.291,11.583],[126.425,11.164],[126.442,11.05],[126.512,10.907],[126.596,10.616],[126.666,10.497],[126.691,10.359],[126.715,10.287],[126.827,10.003],[126.961,9.516],[127.077,9.157],[127.094,8.978],[127.155,8.77],[127.155,8.721],[127.203,8.603],[127.303,8.466],[127.279,8.004],[127.293,7.588],[127.328,7.365],[127.328,7.066],[127.268,6.818],[127.268,6.632],[127.428,6.092],[127.497,6.002],[127.665,5.614],[127.898,5.246]]}];
const CMT_EVENTS = [];  // cargado via fuentes/cmt_events.json
const GVP_VOLCANOES  = [{"id":"266040","name":"Awu","lon":125.5,"lat":3.67,"elev":1320,"type":"Stratovolcano","arc":"Sangihe"},{"id":"266030","name":"Ruang","lon":125.367,"lat":2.3,"elev":725,"type":"Stratovolcano","arc":"Sangihe"},{"id":"266020","name":"Ambang","lon":124.417,"lat":0.733,"elev":1795,"type":"Stratovolcano","arc":"Sangihe"},{"id":"266010","name":"Lokon-Empung","lon":124.792,"lat":1.358,"elev":1580,"type":"Stratovolcano","arc":"Sangihe"},{"id":"266000","name":"Mahawu","lon":124.858,"lat":1.358,"elev":1311,"type":"Stratovolcano","arc":"Sangihe"},{"id":"265970","name":"Soputan","lon":124.725,"lat":1.108,"elev":1784,"type":"Stratovolcano","arc":"Sangihe"},{"id":"265980","name":"Sempu","lon":124.767,"lat":1.133,"elev":1549,"type":"Stratovolcano","arc":"Sangihe"},{"id":"265990","name":"Tondano Caldera","lon":124.833,"lat":1.25,"elev":1202,"type":"Caldera","arc":"Sangihe"},{"id":"265960","name":"Tongkoko","lon":125.2,"lat":1.517,"elev":1149,"type":"Stratovolcano","arc":"Sangihe"},{"id":"265950","name":"Klabat","lon":125.033,"lat":1.467,"elev":1995,"type":"Stratovolcano","arc":"Sangihe"},{"id":"266050","name":"Karangetang","lon":125.408,"lat":2.781,"elev":1827,"type":"Stratovolcano","arc":"Sangihe"},{"id":"266060","name":"Banua Wuhu","lon":125.491,"lat":3.138,"elev":-5,"type":"Submarine","arc":"Sangihe"},{"id":"265930","name":"Colo (Una-Una)","lon":121.608,"lat":-0.175,"elev":507,"type":"Stratovolcano","arc":"W_Sulawesi"},{"id":"265020","name":"Ternate","lon":127.333,"lat":0.833,"elev":1715,"type":"Stratovolcano","arc":"Halmahera"},{"id":"265030","name":"Tidore","lon":127.4,"lat":0.65,"elev":1730,"type":"Stratovolcano","arc":"Halmahera"},{"id":"265070","name":"Gamalama","lon":127.325,"lat":0.8,"elev":1715,"type":"Stratovolcano","arc":"Halmahera"},{"id":"264980","name":"Dukono","lon":127.833,"lat":1.683,"elev":1185,"type":"Stratovolcano","arc":"Halmahera"},{"id":"265040","name":"Makian","lon":127.4,"lat":0.317,"elev":1357,"type":"Stratovolcano","arc":"Halmahera"},{"id":"264960","name":"Ibu","lon":127.633,"lat":1.483,"elev":1325,"type":"Stratovolcano","arc":"Halmahera"},{"id":"265900","name":"Banda Api","lon":129.871,"lat":-4.525,"elev":640,"type":"Caldera","arc":"Banda"},{"id":"265880","name":"Wurlali","lon":128.683,"lat":-7.133,"elev":868,"type":"Stratovolcano","arc":"Banda"},{"id":"265870","name":"Teon","lon":129.125,"lat":-6.917,"elev":655,"type":"Stratovolcano","arc":"Banda"},{"id":"265860","name":"Nila","lon":129.5,"lat":-6.733,"elev":781,"type":"Stratovolcano","arc":"Banda"},{"id":"265850","name":"Serua","lon":130.0,"lat":-6.3,"elev":641,"type":"Stratovolcano","arc":"Banda"},{"id":"265840","name":"Manuk","lon":130.283,"lat":-5.533,"elev":282,"type":"Stratovolcano","arc":"Banda"},{"id":"264560","name":"Paluweh (Rokatenda)","lon":121.708,"lat":-8.32,"elev":875,"type":"Stratovolcano","arc":"Flores"},{"id":"264600","name":"Egon","lon":122.45,"lat":-8.675,"elev":1703,"type":"Stratovolcano","arc":"Flores"},{"id":"264610","name":"Ilimuda","lon":122.567,"lat":-8.617,"elev":1100,"type":"Stratovolcano","arc":"Flores"},{"id":"264620","name":"Lewotobi","lon":122.775,"lat":-8.542,"elev":1703,"type":"Stratovolcano","arc":"Flores"},{"id":"264640","name":"Leroboleng","lon":122.817,"lat":-8.367,"elev":1117,"type":"Stratovolcano","arc":"Flores"},{"id":"264650","name":"Iliwerung","lon":123.592,"lat":-8.538,"elev":1018,"type":"Stratovolcano","arc":"Flores"},{"id":"264660","name":"Batu Tara","lon":123.575,"lat":-7.792,"elev":748,"type":"Stratovolcano","arc":"Flores"},{"id":"264680","name":"Sirung","lon":124.133,"lat":-8.508,"elev":862,"type":"Stratovolcano","arc":"Flores"}];

// DB
const DB = {
  "palu_koro":{type:"Sinestral / Transforme",color:"#ff9f3f",title:"Falla Palu-Koro",tags:["Sinestral","35-45 mm/año","Transforme","Pull-apart Palu","NNW-SSE"],desc:"Falla de rumbo sinestral orientación NNW-SSE, límite entre los Bloques Makassar y North Sula. Con 35-45 mm/año, una de las fallas más rápidas del mundo. Actúa como falla transforme conectando el Cabalgamiento Tolo al sur con el Surco Norte de Sulawesi al norte.",papers:[{ref:"Bellier et al. (2001)",title:"High slip rate for a low seismicity along the Palu-Koro active fault",journal:"Terra Nova, 13(6), 463-470. doi:10.1046/j.1365-3121.2001.00382.x",find:"Tasa de 35±8 mm/año. Paradoja: falla rápida con sismicidad baja."},{ref:"Socquet et al. (2006)",title:"Microblock rotations and fault coupling in SE Asia triple junction",journal:"JGR: Solid Earth, 111(B8). doi:10.1029/2005JB003963",find:"~42 mm/año en PKF. Pull-apart transtensivo genera la Cuenca de Palu."},{ref:"Silver et al. (1983)",title:"Back-arc extension above a subduction zone: The Banda Sea",journal:"Journal of Geophysical Research, 88(B11), 9419–9435. doi:10.1029/JB088iB11p09419",find:"Primera interpretación de la PKF como falla transforme."},{ref:"Cao et al. (2024)",title:"Mantle Flow Induced by the Interplay of Downgoing Slabs",journal:"JGR: Solid Earth. doi:10.1029/2023JB028110",find:"Ejes rápidos SKS paralelos a la PKF: cizallamiento litosférico."},{ref:"Natawidjaja, D. H. et al. (2020)",title:"Palu earthquake sequence and fault segmentation",journal:"Seismological Research Letters, 91(5), 2524-2535. doi:10.1785/0220190380",find:"4 segmentos PKF con LiDAR (Tanimbaya/Donggala/Palu/Saluki). Ruptura bilateral 2018; slip máximo ~6 m en segmento Palu."},{ref:"Natawidjaja, D. H. et al. (2021)",title:"Supershear rupture of the 2018 Lake Palu earthquake",journal:"Geophysical Research Letters, 48, e2021GL094561. doi:10.1029/2021GL094561",find:"Velocidad supershear 4.1 km/s. Traza LiDAR + batimetría define geometría canónica de los 4 segmentos."}]},
  "matano_w":{type:"Falla de Rumbo",color:"#ffe04f",title:"Falla Matano (segmento oeste)",tags:["Sinestral","~20 mm/año","WNW-ESE","Continuación de Sorong"],desc:"Segmento occidental de la Falla Matano, orientación WNW-ESE. Parte del Sistema de Fallas del Sulawesi Central (CSFS). Continuación de la Falla Sula-Sorong desde Papua.",papers:[{ref:"Patria et al. (2023)",title:"Tectonic landform and paleoseismic events of the easternmost Matano fault",journal:"Tectonophysics. doi:10.1016/j.tecto.2023.229762",find:"Seis segmentos, ~190 km. Tasa de deslizamiento 17-28 mm/año."},{ref:"Bellier et al. (2006)",title:"Fission track and fault kinematics, West-Central Sulawesi",journal:"Tectonophysics, 413. doi:10.1016/j.tecto.2005.10.036",find:"Diferente orientación PKF(NNW) vs Matano(WNW): herencia Sorong vs extrusión norte."},{ref:"Lukman, A. et al. (2016)",title:"Active fault properties and slip rates of the Matano fault zone",journal:"Journal of Geodynamics, 98, 31-44. doi:10.1016/j.jog.2016.03.010",find:"Cartografía detallada Falla Matano: segmentación, tasa de deslizamiento ~20 mm/yr, sismicidad y movimiento sinestral."},{ref:"Cipta, A. et al. (2016)",title:"Seismic hazard assessment of Sulawesi",journal:"Geological Society London Special Publications, 441. doi:10.1144/SP441.4",find:"Falla Matano: fuente sísmica en el modelo PSHA Sulawesi, con tasa de recurrencia y Mmax estimadas para el segmento oeste."}]},
  "matano_e":{type:"Falla de Rumbo",color:"#ffe04f",title:"Falla Matano (segmento este) / Lawanopo",tags:["Sinestral","WNW-ESE","Brazo SE","Conexión Sorong"],desc:"Segmento oriental de la Falla Matano en el Brazo Sureste. Conecta con la Falla South Sula y el sistema Sorong.",papers:[{ref:"Patria et al. (2023)",title:"Tectonic landform and paleoseismic events of the easternmost Matano fault",journal:"Tectonophysics. doi:10.1016/j.tecto.2023.229762",find:"Ruptura superficial pendiente. Tasa de deslizamiento 17-28 mm/yr."},{ref:"Lukman, A. et al. (2016)",title:"Active fault properties and slip rates of the Matano fault zone",journal:"Journal of Geodynamics, 98, 31-44. doi:10.1016/j.jog.2016.03.010",find:"Segmento este Falla Matano y conexión con el sistema Sorong-Sula."},{ref:"Cipta, A. et al. (2016)",title:"Seismic hazard assessment of Sulawesi",journal:"Geological Society London Special Publications, 441. doi:10.1144/SP441.4",find:"PSHA: Falla Matano incluida como fuente sísmica con tasa de recurrencia y Mmax estimadas."}]},
  "sorong_main":{type:"Falla Transforme",color:"#ff9f3f",title:"Sistema Falla Sorong (traza principal)",tags:["Sinestral","Escala de placa","~2500 km","Papua → Sulawesi"],desc:"Megaestructura sinestral de escala de placa. Límite entre Pacífico/Carolinas y Australiana-Sundalanda. Transportó Banggai-Sula ~2500 km hacia el oeste desde el Jurásico.",papers:[{ref:"Socquet et al. (2006)",title:"Microblock rotations and fault coupling in SE Asia triple junction",journal:"JGR: Solid Earth. doi:10.1029/2005JB003963",find:"Desplazamiento total acumulado Matano-PKF ~250 km."},{ref:"Hall (2012)",title:"Australia-SE Asia collision: plate tectonics and crustal flow",journal:"Geological Society Special Publications, 355. doi:10.1144/SP355.5",find:"Sistema Sorong: límite sur de la microplaca Carolinas."}]},
  "sorong_s":{type:"Falla Transforme",color:"#ff9f3f",title:"Sistema Falla Sorong (ramal sur)",tags:["Sinestral","Papua occidental"],desc:"Ramal sur del Sistema Sorong en Papua occidental.",papers:[{ref:"Hall (2012)",title:"Australia-SE Asia collision",journal:"Geological Society Special Publications, 355. doi:10.1144/SP355.5",find:"~120 mm/año de movimiento relativo Pacífico-Australia."}]},
  "gorontalo":{type:"Falla de Rumbo",color:"#ffe04f",title:"Falla Gorontalo / Fallas N. Halmahera",tags:["Dextral","N-S","Brazo Norte"],desc:"Fallas de rumbo dextral en el extremo norte del Brazo Norte y norte de Halmahera.",papers:[{ref:"Socquet et al. (2006)",title:"Microblock rotations and fault coupling in SE Asia triple junction",journal:"JGR: Solid Earth. doi:10.1029/2005JB003963",find:"Bloque Manado rota ~3°/Ma horario."},{ref:"Cipta, A. et al. (2016)",title:"Seismic hazard assessment of Sulawesi",journal:"Geological Society London Special Publications, 441. doi:10.1144/SP441.4",find:"Falla Gorontalo: fuente sísmica en el modelo PSHA Sulawesi."}]},
  "tolo_thrust":{type:"Falla Inversa / Cabalgamiento",color:"#c84070",title:"Cabalgamiento Tolo",tags:["Thrust activo","Extremo sur PKF","Colisión Banggai-Sula"],desc:"Estructura compresiva en el Golfo de Tolo. Extremo sur del sistema transforme PKF.",papers:[{ref:"Silver et al. (1983)",title:"Ophiolite emplacement by collision between the Sula Platform and the Sulawesi Island Arc, Indonesia",journal:"Journal of Geophysical Research, 88(B11), 9419–9435. doi:10.1029/JB088iB11p09419",find:"Terminación sur del sistema transforme PKF."},{ref:"Cipta, A. et al. (2016)",title:"Seismic hazard assessment of Sulawesi",journal:"Geological Society London Special Publications, 441. doi:10.1144/SP441.4",find:"Cabalgamiento Tolo: fuente sísmica inversa en PSHA Sulawesi. Tasa de deslizamiento y Mmax estimados para el modelo de hazard."}]},
  "Sulawesi":{type:"Contornos de Losa — SLAB2",color:"#00cfff",title:"Losa de Sulawesi (Mar de Célebes)",tags:["SLAB2","Hayes et al. 2018","~8 Ma"],desc:"Contornos de profundidad de la losa del Mar de Célebes en subducción bajo el Brazo Norte de Sulawesi.",papers:[{ref:"Hayes et al. (2018)",title:"Slab2, a comprehensive subduction zone geometry model",journal:"Science, 362(6410), 58-61. doi:10.1126/science.aat4723",find:"Losa del Mar de Célebes subduce hasta ~250 km."},{ref:"Cao et al. (2024)",title:"Mantle Flow Induced by the Interplay of Downgoing Slabs",journal:"JGR: Solid Earth. doi:10.1029/2023JB028110",find:"Flujo toroidal alrededor del borde de la losa registrado en anisotropía SKS."}]},
  "Halmahera":{type:"Contornos de Losa — SLAB2",color:"#00cfff",title:"Losa de Halmahera",tags:["SLAB2","Doble subducción","20-660 km"],desc:"Rama oriental del sistema de doble subducción del Mar de Molucas: la litósfera oceánica subduce hacia el este bajo el Arco de Halmahera. Junto con la losa Sangihe (buzante al oeste) forma la estructura de doble convergencia opuesta que está colapsando el Mar de Molucas. La losa alcanza profundidades mayores de lo estimado previamente. En el extremo norte se observa un fragmento asísmico desprendido que genera un patrón toroidal de flujo mantélico.",papers:[{ref:"Hayes et al. (2018)",title:"Slab2, a comprehensive subduction zone geometry model",journal:"Science, 362(6410). doi:10.1126/science.aat4723",find:"Geometría 3D de la losa de Halmahera. Contornos de isoprofundidad desde la superficie hasta más de 600 km."},{ref:"Yuan et al. (2024)",title:"Multiple slabs and complex mantle flows in the Molucca Sea subduction zone",journal:"Geochemistry, Geophysics, Geosystems, 25, e2024GC011500. doi:10.1029/2024GC011500",find:"Losa Halmahera alcanza profundidades mayores a estimaciones previas. Fragmento asísmico desprendido en el norte genera flujo toroidal (Feature E). Doble subducción opuesta única a escala global."},{ref:"Di Leo et al. (2012)",title:"Mantle flow in regions of complex tectonics: Insights from Indonesia",journal:"Geochemistry, Geophysics, Geosystems, 13, Q12008. doi:10.1029/2012GC004417",find:"Estaciones TOLI y LUWI: flujo mantélico paralelo a la trinchera coherente con la extrusión lateral generada por la doble subducción del Mar de Molucas."}]},
  "Cotabato":{type:"Contornos de Losa — SLAB2",color:"#00cfff",title:"Losa Cotabato",tags:["SLAB2","20-140 km","Mindanao"],desc:"Losa en subducción bajo el sur de Mindanao (Filipinas). Forma la terminación meridional del sistema de subducción de Filipinas y el límite norte del espacio geodinámico que incluye el Norte de Sulawesi. La geometría de la losa es relativamente somera comparada con los sistemas Sangihe y Halmahera, sin evidencia de penetración profunda en el manto inferior.",papers:[{ref:"Hayes et al. (2018)",title:"Slab2, a comprehensive subduction zone geometry model",journal:"Science, 362(6410). doi:10.1126/science.aat4723",find:"Losa Cotabato bajo Mindanao sur. Profundidades máximas estimadas en el modelo global SLAB2."},{ref:"Socquet et al. (2006)",title:"Microblock rotations and fault coupling in SE Asia triple junction",journal:"JGR: Solid Earth, 111(B8). doi:10.1029/2005JB003963",find:"Marco cinemático regional: la convergencia de la Placa de Filipinas al norte es independiente del sistema NST pero condiciona la rotación del bloque Manado."}]},
  "Sumatra/Java":{type:"Contornos de Losa — SLAB2",color:"#00cfff",title:"Losa de Sunda (Sumatra/Java/Banda)",tags:["SLAB2","Indo-Australiana","20-660 km"],desc:"Losa Indo-Australiana bajo la Fosa de Java y el Arco de Banda. Profundidades hasta 660 km.",papers:[{ref:"Hayes et al. (2018)",title:"Slab2, a comprehensive subduction zone geometry model",journal:"Science, 362(6410). doi:10.1126/science.aat4723",find:"Geometría curva del Arco de Banda refleja rollback desde el Mioceno."}]},
  "pmc":{type:"Core Complex Metamórfico",color:"#2e86c1",title:"Complejo Metamórfico de Palu (PMC)",tags:["Core Complex","HT-LP Buchan","Mioceno tardío-Plioceno"],desc:"Core complex neógeno exhumado a lo largo de la traza de la PKF. Metamorfismo HT-LP tipo Buchan ligado al rollback del Mar de Célebes.",papers:[{ref:"Hennig et al. (2015)",title:"The Palu Metamorphic Complex, NW Sulawesi",journal:"Journal of Asian Earth Sciences. doi:10.1016/j.jseaes.2015.09.025",find:"Metamorfismo HT-LP Buchan. Core complex exhumado a ~0.7-1.0 mm/año."},{ref:"Hennig et al. (2017)",title:"Rapid cooling and exhumation, PMC",journal:"Tectonophysics, 712-713. doi:10.1016/j.tecto.2017.06.025",find:"Exhumación rápida consecuencia del rollback del Mar de Célebes."},{ref:"Satyana et al. (2011)",title:"The East Arm of Sulawesi: geological evolution of a unique tectonic province",journal:"Proceedings IAGI, 40th Annual Convention",find:"Evolución tectónica Sulawesi: NSARC, WSIP, PMC y cuencas pull-apart Gorontalo y Bone. Contexto petroteìtnico regional."}]},
  "mmc":{type:"Core Complex Metamórfico",color:"#1e8449",title:"Complejo Metamórfico Malino (MMC)",tags:["Core Complex","Mioceno Temprano-Medio","NW Sulawesi"],desc:"Core complex del NW de Sulawesi. Sincrónico con PMC y subsidencia del Golfo de Gorontalo.",papers:[{ref:"Advokaat et al. (2017)",title:"Miocene to recent extension in NW Sulawesi, Indonesia",journal:"Journal of Asian Earth Sciences, 147, 378–401. doi:10.1016/j.jseaes.2017.07.023",find:"Extensión litosférica Mioceno Temp-Medio. Malino Metamorphic Complex como core complex."}]},
  "tokorondo":{type:"Core Complex Metamórfico",color:"#1e8449",title:"Tokorondo y Pompangeo",tags:["Core Complex activo","SRTM","4-18° buzamiento"],desc:"Macizos dómicos corrugados. Footwalls de fallas normales de bajo ángulo activas (4-18°).",papers:[{ref:"Abers et al. (2011)",title:"Gently dipping normal faults identified with Space Shuttle radar topography",journal:"Earth and Planetary Science Letters. doi:10.1016/j.epsl.2011.06.028",find:"Corrugaciones 8-12 km. Buzamientos 4-18°."}]},
  "bantimala":{type:"Complejo Metamórfico UHP",color:"#1a0533",title:"Complejo Bantimala (UHP)",tags:["Único UHP de Sulawesi","Eclogita + coesite","119 Ma"],desc:"Única roca UHP conocida de Sulawesi: eclogita con coesite a 27-28.5 kbar / 615-640°C. Edad 119 Ma.",papers:[{ref:"Setiawan et al. (2018)",title:"Geochronology and Zr-in-rutile thermometry of high-pressure/low temperature metamorphic rocks from the Bantimala complex, SW Sulawesi, Indonesia",journal:"Lithos. https://www.sciencedirect.com/science/article/abs/pii/S0024493718304419",find:"Isocrona Rb-Sr 119.0±0.7 Ma."},{ref:"Böhnke et al. (2024)",title:"Refining the understanding of Cretaceous subduction zone processes in the central Indonesian region: The Bantimala Complex (SW Sulawesi) revisited",journal:"Journal of Asian Earth Sciences. https://www.sciencedirect.com/science/article/abs/pii/S1367912023002225",find:"Condiciones pico 27-28.5 kbar/615-640°C. Trayectorias P-T diversas."}]},
  "fault_hikmy_2025_01":{type:"Falla Inversa — Hikmy & Isbram (2025)",color:"#c84070",title:"Cabalgamiento Batui — activa NE-SW, Luwuk",tags:["Thrust activo","Left Thrust Slip","N256E/58NW","2.0 mm/año","Brazo Este"],desc:"Falla inversa activa confirmada por morfometría tectónica (7 índices en 8 sub-cuencas). Plano N256E/58NW, cinemática Left Cabalgamiento Slip. Desplazamiento en río Boimbin: throw 12 m, heave 3 m. L=84 km máx, Mw=7.3.",papers:[{ref:"Hikmy & Isbram (2025)",title:"The uplift rate of Sulawesi East Arm and the activity of Batui Fault",journal:"Jurnal Geologi dan Sumberdaya Mineral, 26(1), 1-15. doi:10.33332/jgsm.geologi.v26i1.663",find:"Cabalgamiento Batui activa. Tasa 2.0 mm/año. Frontera ESO/Banggai-Sula en área de Luwuk."}]},
  "fault_hikmy_2025_02":{type:"Falla Inversa — Hikmy & Isbram (2025)",color:"#c84070",title:"Pasini Cabalgamiento — activa NE-SW",tags:["Thrust activo","Throw 10-25 m","NNE-SSW","2.7 km SE del Batui"],desc:"Cabalgamiento paralelo al Batui a 2.7 km al SE. Throw 10-25 m, visible 300 m. Crestas disectadas NNE-SSW. Morfometría (Vf, Smf, SL) confirma actividad reciente. Influye en sub-watershed Pakowa.",papers:[{ref:"Hikmy & Isbram (2025)",title:"The uplift rate of Sulawesi East Arm and the activity of Batui Fault",journal:"Jurnal Geologi dan Sumberdaya Mineral, 26(1), 1-15. doi:10.33332/jgsm.geologi.v26i1.663",find:"Pasini Cabalgamiento a 2.7 km SE del Cabalgamiento Batui."}]},
  "fault_hikmy_2025_03":{type:"Falla Normal — Hikmy & Isbram (2025)",color:"#3c64dc",title:"Zona de Falla Lobu-Balolang — NW-SE",tags:["Normal","NW-SE","Rocas ultramáficas","Brazo Este"],desc:"Zona de falla normal NW-SE en rocas ultramáficas (serpentinita, gabro) del watershed Balolang. Morfometría: Moderate Active Tectonics. Sinuosidad del río Balolang generada por fallas.",papers:[{ref:"Hikmy & Isbram (2025)",title:"The uplift rate of Sulawesi East Arm and the activity of Batui Fault",journal:"Jurnal Geologi dan Sumberdaya Mineral, 26(1), 1-15. doi:10.33332/jgsm.geologi.v26i1.663",find:"Sinuosidad del río Balolang por fallas. Balolang = Moderate Active Tectonics."}]},
  "structure_hikmy_2025_batui_belt":{type:"Cinturón de Cabalgamientos — Hikmy & Isbram (2025)",color:"#8a6d00",title:"Cinturón de Cabalgamiento Batui — Late Pliocene",tags:["Thrust Belt","Late Pliocene","ESO","Banggai-Sula","Sutura"],desc:"Serie de fallas inversas paralelas al Cabalgamiento Batui propagadas desde rocas ultramáficas del ESO hacia sedimentarias del Banggai-Sula. Sección sísmica 2D confirma el cinturón costa afuera en la costa sur del Brazo Este.",papers:[{ref:"Hikmy & Isbram (2025)",title:"The uplift rate of Sulawesi East Arm and the activity of Batui Fault",journal:"Jurnal Geologi dan Sumberdaya Mineral, 26(1), 1-15. doi:10.33332/jgsm.geologi.v26i1.663",find:"Cinturón de Cabalgamiento Batui: fallas inversas desde ESO hacia Banggai-Sula en zona de sutura."}]},
  "geo_hikmy_2025_uplift_salodik":{type:"Tasa de Levantamiento — Hikmy & Isbram (2025)",color:"#60a5fa",title:"Uplift 0.408 mm/año — Fm. Salodik, Pagimana",tags:["Uplift 0.408 mm/año","Fm. Salodik","1469 m","3.6 Ma"],desc:"Fm. Salodik (caliza arrecifal, 0-30 m bajo NM) a 1469 m.s.n.m. en Pagimana. Edad ~3.6 Ma → uplift = 0.408 ± 0.008 mm/año. Tasa aumenta hacia el oeste (Complejo Pompangeo).",papers:[{ref:"Hikmy & Isbram (2025)",title:"The uplift rate of Sulawesi East Arm and the activity of Batui Fault",journal:"Jurnal Geologi dan Sumberdaya Mineral, 26(1), 1-15. doi:10.33332/jgsm.geologi.v26i1.663",find:"Fm. Salodik a 1469 m → 0.408 mm/año. Tasa mayor en el oeste (Fm. Bongka ~2000 m)."}]},
  "geo_hikmy_2025_uplift_molasse":{type:"Tasa de Levantamiento — Hikmy & Isbram (2025)",color:"#60a5fa",title:"Uplift 0.213 mm/año — Molasa Célebes, Poh Head",tags:["Uplift 0.213 mm/año","Fm. Kintom","512 m","~2.4 Ma"],desc:"Molasa de Célebes (conglomerado polimíctico con pegmatita, Fm. Kintom) a 512 m.s.n.m. cerca del Poh Head. Ambiente marino batial (~2.4 Ma). Uplift = 0.213 ± 0.046 mm/año.",papers:[{ref:"Hikmy & Isbram (2025)",title:"The uplift rate of Sulawesi East Arm and the activity of Batui Fault",journal:"Jurnal Geologi dan Sumberdaya Mineral, 26(1), 1-15. doi:10.33332/jgsm.geologi.v26i1.663",find:"Fm. Kintom a 512 m → 0.213 mm/año. Regional llega a 2000 m en el oeste."}]},
  "aniso_yuan_2024_featureA":{type:"Flujo Mantélico — Yuan et al. (2024)",color:"#7060b0",title:"Flujo Sangihe — normal a la trinchera (200 km)",tags:["Tomografía anisotrópica","FVP vertical","Flujo 2D entrained","200 km"],desc:"FVPs verticales normales al trinchera de Sangihe en la cuña mantélica a 200 km. Generado por acoplamiento de la losa Sangihe. A 400-500 km cambia a paralelo a la trinchera bajo influencia de la losa Indo-Australiana.",papers:[{ref:"Yuan et al. (2024)",title:"Multiple slabs and complex mantle flows in the Molucca Sea subduction zone",journal:"Geochemistry, Geophysics, Geosystems, 25, e2024GC011500. doi:10.1029/2024GC011500",find:"FVPs verticales normales al trinchera de Sangihe. Flujo entrained 2D. Similar a NE Japan, Cascadia, Alaska."}]},
  "aniso_yuan_2024_featureB":{type:"Flujo Mantélico — Yuan et al. (2024)",color:"#7060b0",title:"Flujo NW — extrusión del arco Banda (250 km)",tags:["Tomografía anisotrópica","FVP NW-SE","Extrusión toroidal","200-300 km"],desc:"Material mantélico extruido desde la bahía del arco Banda por compresión N-S desde ~4 Ma. La losa del Mar de Célebes (~250 km) actúa como barrera impidiendo que afecte al manto W de la losa Sangihe.",papers:[{ref:"Yuan et al. (2024)",title:"Multiple slabs and complex mantle flows in the Molucca Sea subduction zone",journal:"Geochem. Geophys. Geosyst., 25, e2024GC011500. doi:10.1029/2024GC011500",find:"FVPs NW-SE conectando apertura del Banda con extremo sur de la losa Sangihe a 200-300 km."}]},
  "aniso_yuan_2024_featureC":{type:"Flujo Mantélico — Yuan et al. (2024)",color:"#7060b0",title:"Flujo E-W — Seram-Buru-Sulawesi (300-400 km)",tags:["Tomografía anisotrópica","Flujo E-W","Olivino tipo C","300-400 km"],desc:"Zona de baja velocidad bajo Seram-Buru-Sulawesi. Flujo E-W extruido que bypasea el extremo norte de la losa Banda. Olivino tipo C predominante a 300 km. Consistente con SKS WNW-ESE de Cao et al. (2021).",papers:[{ref:"Yuan et al. (2024)",title:"Multiple slabs and complex mantle flows in the Molucca Sea subduction zone",journal:"Geochem. Geophys. Geosyst., 25, e2024GC011500. doi:10.1029/2024GC011500",find:"Zona low-V bajo Seram-Buru-Sulawesi a 300-400 km. Olivino C-type dominante."}]},
  "aniso_yuan_2024_featureD":{type:"Flujo Mantélico — Yuan et al. (2024)",color:"#7060b0",title:"Convección BMW — Java → Sangihe (500 km)",tags:["Tomografía anisotrópica","FVP N-S","BMW","Control remoto","500 km"],desc:"FVPs N-S normales al Fosa de Java en el Big Mantle Wedge bajo Java y manto W de la losa Sangihe. Control remoto de la subducción Java sobre la dinámica del Mar de Molucas.",papers:[{ref:"Yuan et al. (2024)",title:"Multiple slabs and complex mantle flows in the Molucca Sea subduction zone",journal:"Geochem. Geophys. Geosyst., 25, e2024GC011500. doi:10.1029/2024GC011500",find:"FVPs bajo Java idénticos al manto W del Sangihe — control remoto de la subducción Indo-Australiana."}]},
  "aniso_yuan_2024_featureE":{type:"Flujo Mantélico — Yuan et al. (2024)",color:"#7060b0",title:"Flujo toroidal — losa Halmahera (300 km)",tags:["Tomografía anisotrópica","Flujo toroidal","Slab rollback","500-550 km"],desc:"FVPs con patrón toroidal alrededor del fragmento asísmico desprendido del extremo norte de la losa Halmahera. Losa alcanza 500-550 km — 100 km más que estimaciones previas.",papers:[{ref:"Yuan et al. (2024)",title:"Multiple slabs and complex mantle flows in the Molucca Sea subduction zone",journal:"Geochem. Geophys. Geosyst., 25, e2024GC011500. doi:10.1029/2024GC011500",find:"Patrón toroidal alrededor del high-V anomaly bajo Halmahera. Longitud máxima: 500-550 km."}]},
  "geo_yuan_2024_celebes_barrier":{type:"Barrera Mantélica — Yuan et al. (2024)",color:"#7060b0",title:"Losa del Mar de Célebes — barrera mantélica (250 km)",tags:["Losa Célebes","Barrera mantélica","250 km","~5 Ma"],desc:"La losa del Mar de Célebes (~250 km prof.) actúa como barrera física para el flujo NW extruido del arco Banda (Feature B), impidiendo que afecte al manto W de la losa Sangihe. Subducción southward iniciada ~5 Ma.",papers:[{ref:"Yuan et al. (2024)",title:"Multiple slabs and complex mantle flows in the Molucca Sea subduction zone",journal:"Geochem. Geophys. Geosyst., 25, e2024GC011500. doi:10.1029/2024GC011500",find:"Losa Célebes (~250 km) obstruye flujo NW del Banda arc. Inicio subducción ~5 Ma."}]},
  "dileo_2012_kapi":{type:"Splitting SKS — Di Leo et al. (2012)",color:"#7060b0",title:"KAPI — corner flow oblicuo SW Sulawesi",tags:["SKS","dt=1.13 s","E-W (90°)","Corner flow","Banda arc"],desc:"Estación KAPI, SW de Sulawesi (coord. inferidas GE.KAPI, ±0.5°). Fast axis E-W (90°), dt=1.13 s. Anisotropía atribuida a flujo oblicuo de esquina en la cuña de subducción de Banda, paralelo a la curvatura del arco. 7 eventos locales S (460–690 km) confirman señal.",papers:[{ref:"Di Leo et al. (2012)",title:"Mantle flow in regions of complex tectonics: Insights from Indonesia",journal:"Geochemistry, Geophysics, Geosystems, 13, Q12008. doi:10.1029/2012GC004417",find:"KAPI: dt=1.13 s, fast axis E-W (paralelo a la trinchera). Rollback de la losa Banda genera flujo de esquina oblicuo que rodea la quilla continental de Sulawesi."}]},
  "dileo_2012_kdi":{type:"Splitting SKS — Di Leo et al. (2012)",color:"#7060b0",title:"KDI (Kendari) — corner flow Banda SE Sulawesi",tags:["SKS","dt=1.35 s","NE-SW (45°)","Corner flow","Banda arc"],desc:"Estación KDI, Kendari, SE Sulawesi. Fast axis NE-SW (~45°), dt=1.35 s (media de 1.32 y 1.38 s). Fast directions paralelas a la curvatura del arco de Banda. Solo 2 rayos SKS con similar backazimuth.",papers:[{ref:"Di Leo et al. (2012)",title:"Mantle flow in regions of complex tectonics: Insights from Indonesia",journal:"Geochemistry, Geophysics, Geosystems, 13, Q12008. doi:10.1029/2012GC004417",find:"KDI: dt=1.35 s, fast NE-SW paralelo a la trinchera. Junto con KAPI confirma flujo mantélico siguiendo curvatura arcuada del sistema Banda."}]},
  "dileo_2012_toli":{type:"Splitting SKS — Di Leo et al. (2012)",color:"#7060b0",title:"TOLI (Toli-Toli) — extrusión lateral sub-losa Molucas",tags:["SKS","dt=1.25 s","dirección no determinada","Extrusión lateral","Mar de Molucas"],desc:"Estación TOLI, N Sulawesi. dt=1.25 s. Fast direction perpendicular al strike de la losa del Mar de Molucas y oblicua a la NST. Interpretado como flujo sub-losa extruido lateralmente por la doble subducción del Mar de Molucas. Dirección cuantitativa no publicada.",papers:[{ref:"Di Leo et al. (2012)",title:"Mantle flow in regions of complex tectonics: Insights from Indonesia",journal:"Geochemistry, Geophysics, Geosystems, 13, Q12008. doi:10.1029/2012GC004417",find:"TOLI: dt=1.25 s. Fast direction perpendicular al strike de la losa Molucas. Flujo sub-losa paralelo a la trinchera — microplaca Molucas extrude manto lateralmente en ambas direcciones."}]},
  "dileo_2012_luwi":{type:"Splitting SKS — Di Leo et al. (2012)",color:"#7060b0",title:"LUWI (Luwuk) — extrusión lateral sub-losa Molucas",tags:["SKS","dt=1.30 s","dirección no determinada","Extrusión lateral","Brazo este"],desc:"Estación LUWI, Luwuk, brazo este Sulawesi. dt=1.30 s, similar a MNI (dt=1.53 s, estudio previo). Flujo paralelo a la trinchera al sistema Sangihe-Halmahera coherente regionalmente con TOLI y MNI. Dirección cuantitativa no publicada.",papers:[{ref:"Di Leo et al. (2012)",title:"Mantle flow in regions of complex tectonics: Insights from Indonesia",journal:"Geochemistry, Geophysics, Geosystems, 13, Q12008. doi:10.1029/2012GC004417",find:"LUWI: dt=1.30 s, coherente con MNI. Flujo sub-losa paralelo a la trinchera regional en el norte de Sulawesi — la microplaca Molucas 'exprime' el manto en ambas direcciones."}]},
  "dileo_2012_pci":{type:"Splitting SKS — Di Leo et al. (2012)",color:"#7060b0",title:"PCI — flujo toroidal borde SE losa Célebes",tags:["SKS","dt=0.98 s","dirección no determinada","Toroidal","Losa Célebes"],desc:"Estación PCI, Sulawesi central-N (coord. muy inciertas ±1°). dt=0.98 s — menor que TOLI/LUWI/MNI. Patrón toroidal alrededor del borde SE de la losa del Mar de Célebes (~200–250 km). El menor dt refleja el desarrollo incipiente del flujo: la losa Célebes fue frenada por colisión con la losa Molucas.",papers:[{ref:"Di Leo et al. (2012)",title:"Mantle flow in regions of complex tectonics: Insights from Indonesia",journal:"Geochemistry, Geophysics, Geosystems, 13, Q12008. doi:10.1029/2012GC004417",find:"PCI: dt=0.98 s, primera evidencia de flujo toroidal alrededor del borde SE de la losa Célebes (200–250 km). Colisión Célebes–Molucas frena el rollback y limita el flujo toroidal."}]}

};

// NEW FAULTS DATA — Serhalawan & Chen (2024) + Watkinson & Hall (2017)
const NEW_FAULTS = {"mst_north":{"id":"mst_north","name":"MST North (Makassar Strait Cabalgamiento)","type":"Reverse","sym":"thrust","color":"#c84070","width":2.0,"coords":[[118.85,-0.2],[118.9,-0.55],[118.95,-0.9],[119.0,-1.25],[119.05,-1.6]],"flip":true,"source":"Serhalawan & Chen (2024), Irsyam et al. (2020)","slip_rate":"5-11 mm/yr","notes":"Least seismically active MST segment"},"mst_central_north":{"id":"mst_central_north","name":"MST Central-North","type":"Reverse","sym":"thrust","color":"#c84070","width":1.8,"coords":[[118.95,-1.3],[119.0,-1.6],[119.08,-1.9]],"flip":true,"source":"Hutchings & Mooney (2021) in Serhalawan & Chen (2024)","notes":"Newly identified segment, moderate thrust earthquakes"},"mst_mamuju":{"id":"mst_mamuju","name":"MST Mamuju","type":"Reverse","sym":"thrust","color":"#c84070","width":2.2,"coords":[[119.25,-3.0],[119.3,-3.35],[119.35,-3.7],[119.38,-4.0]],"flip":true,"source":"Serhalawan & Chen (2024), Irsyam et al. (2020)","notes":"Max Mw 6.7 (1984), Mamuju-Majene earthquake 2021"},"mst_somba":{"id":"mst_somba","name":"MST Somba","type":"Reverse","sym":"thrust","color":"#c84070","width":2.0,"coords":[[119.38,-4.0],[119.4,-4.4],[119.42,-4.8],[119.44,-5.2]],"flip":true,"source":"Serhalawan & Chen (2024), Irsyam et al. (2020)","notes":"Max Mw 7.1 (1969), seismic silence since 1970"},"ewf":{"id":"ewf","name":"East Walane Falla (EWF)","type":"Reverse","sym":"thrust","color":"#c84070","width":1.8,"coords":[[120.3,-4.2],[120.25,-4.6],[120.2,-5.0],[120.18,-5.4]],"flip":true,"source":"Jaya (2014), Serhalawan & Chen (2024)","notes":"More seismically active than WWF; thrust N, left-lateral S"},"batui_thrust":{"id":"batui_thrust","name":"Cabalgamiento Batui","type":"Reverse","sym":"thrust","color":"#c84070","width":2.0,"coords":[[121.8,-1.2],[121.95,-1.35],[122.15,-1.5],[122.4,-1.6],[122.65,-1.55],[122.9,-1.45]],"flip":false,"source":"Simandjuntak (1986), Serhalawan & Chen (2024)","notes":"Surface expression of Banggai-Sula collision front. Low seismicity — no GCMT solutions. Last M>5 in 1981."},"peleng_fault":{"id":"peleng_fault","name":"Falla Peleng","type":"Sinistral","sym":"sinistral","color":"#ffe04f","width":2.0,"coords":[[122.0,-1.55],[122.15,-1.75],[122.3,-1.95],[122.45,-2.15],[122.55,-2.4],[122.5,-2.7]],"source":"Simandjuntak (1986), Serhalawan & Chen (2024)","notes":"Left-lateral NE-SW. Mw 7.5 (2000) probable true fault plane. Extension SW toward Tolo Bay proposed."},"balantak_fault":{"id":"balantak_fault","name":"Falla Balantak","type":"Dextral","sym":"dextral","color":"#ffe04f","width":1.8,"coords":[[122.55,-1.35],[122.7,-1.2],[122.9,-1.1],[123.1,-1.05],[123.3,-1.0]],"source":"Simandjuntak (1986), Serhalawan & Chen (2024)","notes":"Right-lateral transcurrente, Region IV (colisión Banggai-Sula)"},"north_vergent_thrust":{"id":"north_vergent_thrust","name":"North-Vergent Cabalgamiento","type":"Reverse","sym":"thrust","color":"#c84070","width":1.8,"coords":[[122.1,-0.65],[122.35,-0.55],[122.6,-0.5],[122.85,-0.48],[123.1,-0.5]],"flip":false,"source":"Serhalawan & Chen (2024), Fig 1c/7","notes":"Offshore structure north of East Arm"},"south_sula_fault":{"id":"south_sula_fault","name":"South Sula Falla","type":"Sinistral","sym":"sinistral","color":"#ffe04f","width":1.8,"coords":[[122.8,-2.05],[123.1,-2.0],[123.4,-1.95],[123.7,-1.9],[124.0,-1.85],[124.3,-1.8]],"source":"Titu-Eki & Hall (2020), Serhalawan & Chen (2024)","notes":"Westward translation of Banggai-Sula microcontinent. Triggered Mw 7.7 (1998)."},"wbfz":{"id":"wbfz","name":"Zona de Falla Buru Oeste (WBFZ)","type":"Dextral","sym":"dextral","color":"#ffe04f","width":1.5,"coords":[[124.8,-3.5],[125.1,-3.4],[125.4,-3.3],[125.7,-3.2]],"source":"Titu-Eki & Hall (2020)","notes":"North Banda Sea Basin fault system"},"kolaka_fault":{"id":"kolaka_fault","name":"Falla Kolaka","type":"Dextral","sym":"dextral","color":"#ffe04f","width":1.5,"coords":[[121.6,-3.5],[121.7,-3.8],[121.75,-4.1],[121.72,-4.4],[121.65,-4.7]],"source":"Watkinson & Hall (2017), Serhalawan & Chen (2024)","notes":"Transcurrente dominante con componente normal en centro y extremo SE. Downthrown side al sur."},"lawanopo_fault":{"id":"lawanopo_fault","name":"Falla Lawanopo","type":"Sinistral","sym":"sinistral","color":"#ffe04f","width":1.5,"coords":[[121.4,-3.4],[121.65,-3.5],[121.9,-3.55],[122.15,-3.55],[122.4,-3.52],[122.65,-3.48]],"source":"Watkinson & Hall (2017), Serhalawan & Chen (2024)","notes":"Slip rate no constrained geodésicamente (Socquet et al. 2006). Conecta con Hamilton Fault al este."},"hamilton_fault":{"id":"hamilton_fault","name":"Hamilton Falla","type":"Sinistral","sym":"sinistral","color":"#ffe04f","width":1.5,"coords":[[122.65,-3.48],[122.9,-3.45],[123.15,-3.42],[123.4,-3.4],[123.65,-3.38]],"source":"Titu-Eki & Hall (2020), Serhalawan & Chen (2024)","notes":"Continuación offshore de la Lawanopo Fault. Mw 6.1 (2011) en la unión."},"buton_thrust":{"id":"buton_thrust","name":"Cabalgamiento Buton","type":"Reverse","sym":"thrust","color":"#c84070","width":1.8,"coords":[[122.5,-4.5],[122.65,-4.7],[122.8,-4.9],[122.95,-5.1],[123.1,-5.3]],"flip":false,"source":"Serhalawan & Chen (2024)","notes":"Bajo nivel de sismicidad. Pocos eventos thrust cerca del extremo sur."},"selayar_fz":{"id":"selayar_fz","name":"Zona de Falla Selayar","type":"Dextral","sym":"dextral","color":"#ffe04f","width":1.5,"coords":[[120.5,-5.8],[120.8,-5.9],[121.1,-5.95],[121.4,-5.95],[121.7,-5.9]],"source":"Serhalawan & Chen (2024)","notes":"Algunos eventos offshore sur del South Arm"},"nst_seismic_gap":{"id":"nst_seismic_gap","name":"Seismic Gap NST (121°-121.7°E)","type":"hazard_zone","color":"#ffaa00","coords":[[121.0,1.2],[121.7,1.2],[121.7,2.2],[121.0,2.2],[121.0,1.2]],"source":"Serhalawan & Chen (2024), Fig 4","notes":"Zona sin terremotos interplacas Mw≥6.5 documentados. Posible seismic gap, aseismic slip, o low coupling zone. Riesgo futuro no descartado."}};

// DB entries for new faults
DB['mst_north']={type:"Falla Inversa — MST North",color:"#c84070",title:"MST North (Cabalgamiento del Estrecho de Makassar)",tags:["Thrust","East-dipping","5-11 mm/año"],desc:"Segmento norte del Cabalgamiento del Estrecho de Makassar. buzante al este, acomoda convergencia Sulawesi-Sunda a 5-11 mm/año. El menos sísmicamente activo del MST.",papers:[{ref:"Irsyam et al. (2020)",title:"Development of the 2017 national seismic hazard maps of Indonesia",journal:"Earthquake Spectra, 36(1_suppl). doi:10.1177/8755293020951206",find:"MST: 5 segmentos North, Central, Central-North, Mamuju y Somba. Segmento North: menor actividad sísmica."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"MST sistema de 5 segmentos. Segmento North: el menos activo sísmicamente. Acomoda convergencia Sulawesi-Sunda a 5-11 mm/yr."}]};
DB['mst_mamuju']={type:"Falla Inversa — MST Mamuju",color:"#c84070",title:"MST Mamuju",tags:["Thrust","Mw 6.7 (1984)","Mamuju-Majene 2021"],desc:"Segmento Mamuju del MST. Mw 6.7 (1984), reactivado en 2021 con la secuencia Mamuju-Majene.",papers:[{ref:"Irsyam et al. (2020)",title:"Development of the 2017 national seismic hazard maps of Indonesia",journal:"Earthquake Spectra, 36(1_suppl). doi:10.1177/8755293020951206",find:"MST segmento Mamuju: uno de los 5 segmentos del sistema. Definición de geometría y potencial sísmico."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"MST Mamuju: Mw 6.7 (1984). Reactivado con secuencia Mamuju-Majene 2021."},{ref:"Meilano et al. (2022)",title:"The 2021 MW 6.2 Mamuju earthquake",journal:"Geophys. J. Int., 233(3). doi:10.1093/gji/ggac512",find:"Ruptura parcial del MST-Mamuju. Confirma potencial sísmico del segmento."}]};
DB['mst_somba']={type:"Falla Inversa — MST Somba",color:"#c84070",title:"MST Somba",tags:["Thrust","MST sur","Silencio sísmico prolongado"],desc:"Segmento sur del Cabalgamiento del Estrecho de Makassar (MST). El MST representa el frente de cabalgamiento compresivo por el que el bloque Sulawesi cabalga sobre la plataforma continental de Sunda a lo largo del Estrecho de Makassar. El segmento Somba produjo el mayor evento histórico del MST (Mw 7.1, 1969) y no ha registrado actividad significativa desde 1970, lo que constituye un gap sísmico con potencial de hazard acumulado.",papers:[{ref:"Irsyam et al. (2020)",title:"Development of the 2017 national seismic hazard maps of Indonesia",journal:"Earthquake Spectra, 36(1_suppl). doi:10.1177/8755293020951206",find:"MST segmento Somba: definición del segmento sur del sistema MST."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"MST Somba: Mw 7.1 (1969). Último evento M≥5.0 en 1970. Potencial hazard acumulado por silencio sísmico prolongado."},{ref:"Baillie & Decker (2022)",title:"Tectonic evolution of Sulawesi, Indonesia",journal:"Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388",find:"West Sulawesi Fold Belt (WSFB) y MST: frente compresivo occidental del avance del bloque Sulawesi sobre la plataforma de Sunda. El MST es la expresión superficial de la deformación compresiva que en profundidad involucra el basamento de la plataforma."}]};
DB['mst_central_north']={type:"Falla Inversa — MST Central-North",color:"#c84070",title:"MST Central-North",tags:["Thrust","MST norte","Segmento reciente"],desc:"Segmento central-norte del Cabalgamiento del Estrecho de Makassar (MST), identificado a partir del análisis de la sismicidad instrumental. Exhibe mecanismos focales predominantemente cabalgamiento, consistentes con la compresión W-NW del bloque Sulawesi sobre la plataforma de Sunda. Es la extensión septentrional del sistema MST y conecta con las estructuras compresivas del North Sulawesi Fold-Cabalgamiento Belt.",papers:[{ref:"Hutchings & Mooney (2021)",title:"The Seismicity of Indonesia and Tectonic Implications",journal:"Geochem. Geophys. Geosyst., 22(9). doi:10.1029/2021GC009812",find:"Nuevo segmento MST Central-North identificado. Exhibe earthquakes predominantemente cabalgamiento."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Referencia al segmento Central-North de Hutchings & Mooney (2021) en el contexto del sistema MST."},{ref:"Baillie & Decker (2022)",title:"Tectonic evolution of Sulawesi, Indonesia",journal:"Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388",find:"North Sulawesi Fold-Cabalgamiento Belt (NSFTB): frente compresivo norte, continuación del sistema MST hacia el noreste. Expresión de la misma deformación que el MST sur pero en el margen norte del bloque Sulawesi."}]};
DB['ewf']={type:"Falla Inversa / Transcurrente",color:"#c84070",title:"East Falla Walane (EWF)",tags:["Thrust N","Sinestral S","WFS","~0.5 mm/yr"],desc:"Segmento este del Falla Walane System. Cabalgamiento buzante al este al norte, sinestral al sur. Más activo que el WWF.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"EWF: cabalgamiento buzante al este al norte, sinistral al sur. Parte del Falla Walane System. Tasa de deslizamiento ~0.5 mm/yr."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"EWF sísmicamente más activo que el WWF. Sismicidad confirma cinemática mixta cabalgamiento-sinestral."}]};
DB['batui_thrust']={type:"Falla Inversa / Cabalgamiento",color:"#c84070",title:"Cabalgamiento Batui",tags:["Thrust","Colisión Banggai-Sula","Baja sismicidad","Hazard subestimado"],desc:"Expresión superficial frontal de la colisión Banggai-Sula (~5 Ma). Baja sismicidad — ninguna solución GCMT disponible. Riesgo sísmico posiblemente subestimado.",papers:[{ref:"Simandjuntak (1986)",title:"Sedimentology and Tectonics, East Arm of Sulawesi",journal:"Doctoral dissertation, Royal Holloway, University of London. http://repository.royalholloway.ac.uk/items/bf7a78df-c538-4bff-a28d-983a91cf0634/1/",find:"Cabalgamiento Batui: frente de la colisión. Últimos M>5 en 1964, 1966 y 1981."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Cabalgamiento Batui: sismicidad muy baja, ninguna solución GCMT. Últimos M>5 en 1981. La baja sismicidad junto a la colisión Banggai-Sula activa sugiere riesgo subestimado."},{ref:"Satyana & Purwaningsih (2011)",title:"Sulawesi collision tectonics: frontiers of microplate and arc collisions",journal:"Proceedings IPA, 35th Annual Convention. IPA11-G-219",find:"Colisión microcontinentes Banggai-Sula y Buton-Tukang Besi con el brazo este. Cabalgamiento Batui como frente de colisión activo Neógeno."}]};
DB['peleng_fault']={type:"Falla de Rumbo Sinestral",color:"#ffe04f",title:"Falla Peleng",tags:["Sinestral","NE-SW","Mw 7.5 (2000)","Extensión hacia Tolo Bay"],desc:"Falla sinestral NE-SW. El evento Mw 7.5 (2000) se atribuye al plano NE-SW. Posible extensión SW hacia Tolo Bay.",papers:[{ref:"Simandjuntak (1986)",title:"Sedimentology and Tectonics, East Arm of Sulawesi",journal:"Doctoral dissertation, Royal Holloway, University of London. http://repository.royalholloway.ac.uk/items/bf7a78df-c538-4bff-a28d-983a91cf0634/1/",find:"Falla Peleng: cartografía original de la estructura sinestral NE-SW en el Brazo Este."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Mw 7.5 (2000): plano NE-SW como verdadero plano de falla. Extensión SW propuesta — cluster Tolo Bay (Abr 2019, Mw 6.8), posiblemente disparado por Palu 2018."}]};
DB['balantak_fault']={type:"Falla de Rumbo Dextral",color:"#ffe04f",title:"Falla Balantak",tags:["Dextral","Colisión Banggai-Sula","Brazo Este"],desc:"Falla dextral en el brazo este de Sulawesi, orientada aproximadamente E-W. Actúa como estructura de transferencia en la zona de colisión del microcontinente Banggai-Sula con el margen oriental de Sulawesi. Accomoda la componente E-W del avance del Banggai-Sula y conecta el frente de subducción (Cabalgamiento Batui) con estructuras de rumbo en el interior del brazo este.",papers:[{ref:"Simandjuntak (1986)",title:"Sedimentology and Tectonics, East Arm",journal:"Doctoral dissertation, Royal Holloway, University of London. http://repository.royalholloway.ac.uk/items/bf7a78df-c538-4bff-a28d-983a91cf0634/1/",find:"Balantak: dextral transcurrente, Region IV. Cartografía original de la estructura."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Falla Balantak dextral en el contexto de la colisión Banggai-Sula (Región IV)."},{ref:"Husein et al. (2014)",title:"Cenozoic tectonics of the Banggai Sula area, East Sulawesi",journal:"Indonesian J. Geosci., 1(1). doi:10.17014/ijog.1.1.11-22",find:"Estructuras de rumbo E-W en el brazo este vinculadas al frente de avance del Banggai-Sula. La Falla Balantak acomoda la deformación lateral en el bloque de colisión oriental."},{ref:"Satyana & Purwaningsih (2011)",title:"Microplate tectonics of the Sulawesi region, Indonesia",journal:"Proceedings IPA, 35th Annual Convention",find:"Colisión del microcontinente Banggai-Sula: estructuras E-W dextrales accomadan la componente transcurrente del avance desde el este."}]};
DB['north_vergent_thrust']={type:"Falla Inversa / Cabalgamiento",color:"#c84070",title:"Cabalgamiento N-vergente",tags:["Thrust","Offshore","Frente de colisión Banggai-Sula"],desc:"Estructura compresiva costa afuera al norte del brazo este de Sulawesi. Representa el frente de deformación más septentrional del sistema de colisión Banggai-Sula, con vergencia hacia el norte. Se caracteriza por mecanismos focales de tipo cabalgamiento y transcurrente. Es la extensión marina de la deformación compresiva que en tierra expresa el Cinturón de Cabalgamiento Batui.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"cabalgamiento N-vergente: sismicidad de tipo cabalgamiento y transcurrente al NE del Cabalgamiento Batui. Frente septentrional costa afuera del sistema de colisión Banggai-Sula."},{ref:"Hikmy & Isbram (2025)",title:"The uplift rate of Sulawesi East Arm and the activity of Batui Fault",journal:"Jurnal Geologi dan Sumberdaya Mineral, 26(1). doi:10.33332/jgsm.geologi.v26i1.663",find:"Cinturón de Cabalgamiento Batui: sistema de fallas inversas paralelas que se propagan desde el ESO hacia el Banggai-Sula. El North-Vergent Cabalgamiento es la proyección costa afuera del frente de cabalgamiento."}]};
DB['south_sula_fault']={type:"Falla de Rumbo Sinestral",color:"#ffe04f",title:"South Falla Sula",tags:["Sinestral","Translación Banggai-Sula","Mw 7.7 (1998)"],desc:"Facilita la translación oeste del microcontinente Banggai-Sula. Posiblemente responsable del Mw 7.7 (1998).",papers:[{ref:"Titu-Eki & Hall (2020)",title:"The significance of the Banda Sea",journal:"Indonesian J. Geosci., 7(3). doi:10.17014/ijog.7.3.291-303",find:"Westward translation of Banggai-Sula via falla Sula Sur triggered Mw 7.7 (1998)."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"South Falla Sula: sismicidad asociada a la translación del microcontinente Banggai-Sula hacia el oeste."}]};

DB['wbfz']={type:"Falla de Rumbo",color:"#ffe04f",title:"West Falla Buru Zone (WBFZ)",tags:["North Banda Sea","Zona de transferencia","Buru"],desc:"Zona de falla en el North Banda Sea Basin, al oeste de la isla Buru. Actúa como zona de acomodación entre el sistema de rollback del Arco de Banda al sur y el sistema de colisión Sangihe-Halmahera al norte. Está asociada con extensión del Mar de Banda y puede conectar con la terminación norte de la losa Banda.",papers:[{ref:"Titu-Eki & Hall (2020)",title:"The significance of the Banda Sea",journal:"Indonesian J. Geosci., 7(3). doi:10.17014/ijog.7.3.291-303",find:"WBFZ: parte del sistema de fallas del North Banda Sea que acomoda la deformación entre el rollback de Banda y los sistemas de colisión al norte."},{ref:"Hua et al. (2023)",title:"P and S wave anisotropic tomography of the Banda subduction zone",journal:"Geophysical Research Letters, 50, e2023GL105611. doi:10.1029/2023GL105611",find:"Gap entre losa Banda y losa Molucas: el flujo mantélico semi-toroidal escapa hacia NE por este gap. El WBFZ controla la geometría de la ruptura del borde norte de la losa Banda."}]};
DB['kolaka_fault']={type:"Falla de Rumbo Dextral",color:"#ffe04f",title:"Falla Kolaka",tags:["Dextral","SE Arm","Normal component center","Pull-apart"],desc:"Transcurrente dextral con componente normal en centro y extremo SE. Extensión en salto lateral/pull-apart.",papers:[{ref:"Watkinson & Hall (2017)",title:"Fault systems of the eastern Indonesian triple junction",journal:"Geol. Soc. Lond. Spec. Publ., 441. doi:10.1144/SP441.8",find:"Kolaka: transcurrente dominante, componente normal en centro. Downthrown side al sur."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Sismicidad concentrada en el centro con mecanismo normal (Mw 6.1 buzamiento SW) — coherente con extensión pull-apart en salto lateral (Watkinson & Hall 2017)."}]};
DB['lawanopo_fault']={type:"Falla de Rumbo Sinestral",color:"#ffe04f",title:"Falla Lawanopo",tags:["Sinestral","~0.1 mm/yr","Posiblemente inactiva"],desc:"Tasa de deslizamiento ~0.1 mm/yr — posiblemente inactiva. Conecta con Falla Hamilton al este.",papers:[{ref:"Watkinson & Hall (2017)",title:"Fault systems of the eastern Indonesian triple junction",journal:"Geol. Soc. Lond. Spec. Publ., 441. doi:10.1144/SP441.8",find:"Falla Lawanopo: cartografía de la estructura sinestral en el SE Arm. Conecta con Falla Hamilton costa afuera."},{ref:"Socquet et al. (2006)",title:"Microblock rotations and fault coupling in SE Asia triple junction (Sulawesi, Indonesia)",journal:"JGR: Solid Earth, 111, B08409. doi:10.1029/2005JB003963",find:"Falla Lawanopo: tasa de deslizamiento no constrained; modelo GPS clasifica la falla como acoplada en período interseísmico pero poco estudiada geodésicamente."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Falla Lawanopo: baja actividad sísmica documentada, consistente con el tasa de deslizamiento geodésico bajo."},{ref:"Cipta, A. et al. (2016)",title:"Seismic hazard assessment of Sulawesi",journal:"Geological Society London Special Publications, 441. doi:10.1144/SP441.4",find:"Falla Lawanopo: fuente sísmica cartografiada en el modelo PSHA Sulawesi para el brazo sureste."}]};
DB['hamilton_fault']={type:"Falla de Rumbo Sinestral",color:"#ffe04f",title:"Falla Hamilton",tags:["Sinestral","Offshore SE Arm","Continuación Lawanopo-Matano"],desc:"Continuación costa afuera sinestral de la Falla Lawanopo (segmento oriental de la Falla Matano) hacia el sureste, bajo el Mar de Banda. Se extiende desde la costa sureste del brazo sureste hacia la cuenca marina. El sismo Mw 6.1 (2011) ocurrió en la unión Lawanopo-Hamilton. Representa el extremo distal del sistema de fallas transformes E-W que conecta la Sorong con el régimen de colisión Banggai-Sula.",papers:[{ref:"Titu-Eki & Hall (2020)",title:"The significance of the Banda Sea",journal:"Indonesian J. Geosci., 7(3). doi:10.17014/ijog.7.3.291-303",find:"Lawanopo conecta con Falla Hamilton costa afuera. Mw 6.1 (2011) en la unión."},{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Falla Hamilton: sismicidad costa afuera en la continuación de la Falla Lawanopo documentada en el catálogo."},{ref:"Satyana & Purwaningsih (2011)",title:"Microplate tectonics of the Sulawesi region, Indonesia",journal:"Proceedings IPA, 35th Annual Convention",find:"Sistema de fallas E-W (Matano-Lawanopo-Hamilton) como límite sur del dominio de Sulawesi oriental, articulado con el sistema de fallas Sorong en Papua."}]};
DB['buton_thrust']={type:"Falla Inversa / Cabalgamiento",color:"#c84070",title:"Cabalgamiento Buton",tags:["Thrust","SE Arm","Buton-Tukang Besi"],desc:"Estructura compresiva al sur del brazo sureste, en la zona de interacción entre el brazo SE de Sulawesi y el microcontinente Buton-Tukang Besi. La baja sismicidad instrumentada puede indicar: (a) interbloqueo con acumulación silenciosa de estrés, (b) deformación asísmica (slow-slip), o (c) que la acreción ya completó la mayor parte del transporte. Es el equivalente sur del Cabalgamiento Batui en el contexto de la acreción de microplacas gondwánicas.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Cabalgamiento Buton: low level of seismic activity, pocos eventos de cabalgamiento cerca del extremo sur."},{ref:"Baillie & Decker (2022)",title:"Tectonic evolution of Sulawesi, Indonesia",journal:"Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388",find:"Buton-Tukang Besi: microcontinente gondwánico en proceso de acreción al brazo SE. El Cabalgamiento Buton es el frente activo de esta colisión con afinidad australiana documentada por fauna fósil y litologías carbonáticas de plataforma."}]};
DB['selayar_fz']={type:"Falla de Rumbo",color:"#ffe04f",title:"Falla Selayar Zone",tags:["Offshore sur","South Arm","Mar de Flores"],desc:"Zona de falla costa afuera al sur del brazo sur de Sulawesi, en el Mar de Flores. Corresponde a una zona de transferencia entre el régimen compresivo del Cabalgamiento del Estrecho de Makassar al norte y el sistema de fallas del Mar de Flores al sur. La sismicidad moderada documentada indica actividad tectónica residual en el límite del bloque Sulawesi con la plataforma de Sunda.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Falla Selayar Zone: sismicidad costa afuera al sur del brazo sur. Límite meridional del régimen de deformación de Sulawesi."},{ref:"Baillie & Decker (2022)",title:"Tectonic evolution of Sulawesi, Indonesia",journal:"Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388",find:"Margen sur del brazo SW de Sulawesi: zona de transición entre el bloque Sulawesi y la plataforma estable de Sunda. Las fallas costa afuera sur reflejan la terminación del sistema compresivo del MST."}]};
// Bird (2003) como fuente de georeferenciación de las trazas PKF y Matano en este mapa
DB['palu_koro'].papers.push({ref:"Bird, P. (2003)",title:"An updated digital model of plate boundaries",journal:"Geochemistry, Geophysics, Geosystems, 4(3), 1027. doi:10.1029/2001GC000252",find:"Falla de rumbo sinestral NNW-SSE — límite occidental del bloque de Sulawesi. Fuente del punto norte (2.0°N) de la traza. El segmento sur de Bird corresponde a la MST (Cabalgamiento del Estrecho de Makassar), no a la PKF."});
DB['matano_w'].papers.push({ref:"Bird, P. (2003)",title:"An updated digital model of plate boundaries",journal:"Geochemistry, Geophysics, Geosystems, 4(3), 1027. doi:10.1029/2001GC000252",find:"Falla de rumbo sinestral E-W en la unión central de Sulawesi — límite entre microplacas según modelo cinemático de Bird. Fuente de georeferenciación de la traza trazada en este mapa."});
// Citas adicionales de Serhalawan & Chen (2024) absorbidas en entradas canónicas (GEM key faults)
DB['palu_koro'].papers.push({ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"PKF: 32-45 mm/yr promedio ~42 mm/yr relativo MKB-NSB. Sismo Palu 2018 Mw 7.6 llenó la brecha sísmica y disparó sismicidad en 6 zonas via Coulomb stress. Segmento N costa afuera con baja sismicidad."});
DB['matano_w'].papers.push({ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Matano: sismicidad WNW-ESE confirma movimiento sinestral. ~7 mm/yr. Dos mayores sismos Mw 6.1 (1980 y 2011). Borde E conecta con Cabalgamiento Tolo."});
DB['matano_e'].papers.push({ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Segmento este de la Falla Matano; se conecta con el Cabalgamiento Tolo al SE. ~7 mm/yr. Mw 6.1 (2011) en la región."});
DB['tolo_thrust'].papers.push({ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Cabalgamiento Tolo: baja sismicidad, pocos mecanismos de cabalgamiento correlacionados. Clusters de fallas normales perpendiculares por rollback Banda losa. Hall (2018): posible futura zona de iniciación de subducción."});
DB['gorontalo'].papers.push({ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Gorontalo: ~11 mm/yr dextral (Socquet et al. 2006). Sismicidad cortical baja a pesar de la tasa estimada. M 7.2 (1941) a 35-50 km de profundidad — potencial hazard no descartado."});
DB['_station']={type:"Estación Sismológica",color:"#60a5fa",title:"Estación BMKG / GEOFON",desc:"Estaciones sismológicas activas en Sulawesi y su entorno inmediato. Red BMKG (Badan Meteorologi, Klimatologi dan Geofisika) de Indonesia y red GEOFON del GFZ Potsdam. Posiciones recuperadas vía IRIS FDSN Station Web Service.",papers:[{ref:"IRIS Data Management Center (2023)",title:"IRIS FDSN Station Web Service",journal:"Incorporated Research Institutions for Seismology. iris.edu/fdsnws/station/1/. doi:10.17611/DP/1",find:"Servicio web FDSN para consulta de metadatos de estaciones sismológicas. Redes BMKG (GE) y GEOFON (GE). Posición, elevación y período operativo de cada estación en Sulawesi."}]};
DB['esri_hybrid_src']={type:"Imagen satelital + etiquetas",color:"#c89040",title:"Esri World Imagery + World Boundaries and Places",tags:["Esri","Maxar","Earthstar Geographics","WorldImagery","XYZ tiles"],desc:"Composición de dos servicios de tiles XYZ de Esri: (1) World Imagery — mosaico satelital de alta resolución provisto por Esri, Maxar Technologies y Earthstar Geographics. Resolución variable hasta zoom 18 (~1 m en áreas con buena cobertura). (2) World Boundaries and Places — capa de etiquetas políticas (países, provincias, ciudades, nombres de cuerpos de agua). Proyección: Web Mercator (EPSG:3857). Uso gratuito para aplicaciones educativas y no comerciales.",papers:[{ref:"Esri (2024)",title:"ArcGIS World Imagery",journal:"Environmental Systems Research Institute. https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9",find:"Mosaico satelital global de alta resolución. Fuente principal para este mapa: tile layer XYZ del servidor ArcGIS Online."},{ref:"Esri (2024)",title:"World Boundaries and Places",journal:"Environmental Systems Research Institute. https://www.arcgis.com/home/item.html?id=a842e359856a4365b1ddf8cc34fde079",find:"Capa de referencia con divisiones políticas, nombres de localidades y cuerpos de agua. Superpuesta sobre World Imagery con zIndex:15."}]};
DB['open_topo_src']={type:"Mapa topográfico",color:"#84cc16",title:"OpenTopoMap",tags:["OpenTopoMap","OpenStreetMap","SRTM","NASADEM","curvas de nivel","topografía"],desc:"Capa de tiles XYZ que renderiza topografía con curvas de nivel generadas a partir de datos SRTM/NASADEM, integrada con datos cartográficos de OpenStreetMap. Las curvas de nivel se calculan con equidistancia variable según el zoom: ~100 m a escala regional, ~10 m a escala local. Estilo vectorial derivado del estilo Mapnik de OSM. Proyección: Web Mercator (EPSG:3857). Licencia: CC BY-SA.",papers:[{ref:"OpenTopoMap (2023)",title:"OpenTopoMap — worldwide topographic maps",journal:"https://opentopomap.org",find:"Servicio de tiles XYZ con topografía y curvas de nivel. Combinación de datos SRTM/NASADEM y OpenStreetMap. Licencia CC BY-SA."},{ref:"OpenStreetMap contributors (2024)",title:"OpenStreetMap",journal:"https://www.openstreetmap.org/copyright",find:"Base cartográfica vectorial (caminos, hidrografía, asentamientos). Datos bajo licencia ODbL."},{ref:"NASA / USGS (2013)",title:"Shuttle Radar Topography Mission (SRTM)",journal:"https://www2.jpl.nasa.gov/srtm/",find:"DEM global a 30 m de resolución (SRTM3). Fuente de elevaciones para el cálculo de curvas de nivel."}]};
DB['sentinel_src']={type:"Imagen satelital",color:"#60a5fa",title:"Sentinel-2 Cloudless Mosaic 2021 — EOX",tags:["Sentinel-2","ESA","EOX","2021","RGB"],desc:"Mosaico global libre de nubes derivado de imágenes Sentinel-2 del año 2021, procesado por EOX IT Services GmbH (Austria). Resolución nativa 10 m, escalado a tiles web estándar. Cobertura temporal: imágenes seleccionadas del año 2021 con mínima cobertura de nubes. Proyección: Web Mercator (EPSG:3857). Licencia: CC BY 4.0.",papers:[{ref:"EOX IT Services GmbH (2021)",title:"Sentinel-2 cloudless — s2maps.eu",journal:"https://eox.at/2022/05/sentinel-2-cloudless-2021/",find:"Mosaico global Sentinel-2 2021 sin nubes. Provisto como tile layer XYZ gratuito bajo CC BY 4.0."},{ref:"ESA / Copernicus (2021)",title:"Sentinel-2 Mission",journal:"https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2",find:"Misión de observación de la Tierra de la ESA. Banda RGB (B4-B3-B2) en 10 m de resolución espacial."}]};
DB['gebco_src']={type:"Batimetría global",color:"#38bdf8",title:"GEBCO 2023 — General Bathymetric Chart of the Oceans",tags:["GEBCO","Batimetría","Topografía","IHO","BODC","2023"],desc:"Grilla batimétrica/topográfica global del General Bathymetric Chart of the Oceans (GEBCO), edición 2023. Resolución: 15 segundos de arco (~450 m). Combina datos de sondas de ecosonda, modelos satelitales de altimetría (para profundidades oceánicas) y DEM terrestres (SRTM/NASADEM). Cobertura: global 0–11,000 m de profundidad. El hillshade se calcula con iluminación azimutal estándar (315°/45°).",papers:[{ref:"GEBCO Compilation Group (2024)",title:"GEBCO 2024 Grid",journal:"BODC, British Oceanographic Data Centre. doi:10.5285/1c44ce99-0a0d-5f4f-e063-7086abc0ea0f",find:"Grilla batimétrica/topográfica global 15\" de resolución. Edición 2024. Usada en este mapa como capa de fondo batimétrico e hillshade."},{ref:"Weatherall et al. (2015)",title:"A new digital bathymetric model of the world's oceans",journal:"Earth and Space Science, 2(8), 331-345. doi:10.1002/2015EA000107",find:"Metodología de compilación de la grilla GEBCO. Integración de sondas multihaz, altimetría satelital y datos históricos."}]};
// Complejos metamórficos
DB['pmc']={type:"Complejo Metamórfico — PMC",color:"#40e0b0",title:"Palu Metamorphic Complex (PMC)",tags:["Metamorfismo","Anfibolita-Granulita","Complejo polimetamórfico","Central Sulawesi","Core Complex"],desc:"Complejo polimetamórfico localizado en la triple junction PKF-Matano, Sulawesi central. Gneises, migmatitas y anfibolitas de grado anfibolita a granulita. Interpretado como un Metamorphic Core Complex (MCC) exhumado por la extensión asociada al movimiento sinistral de la PKF. Edad: Cretácico-Paleógeno.",papers:[{ref:"Baillie, P. W., & Decker, J. (2022)",title:"Tectonic evolution of Sulawesi, Indonesia",journal:"Geological Society of London Special P. Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388",find:"PMC definido como core complex metamórfico en la triple junction PKF-Matano. Gneises + migmatitas, grado anfibolita-granulita. Exhumación por extensión relacionada con PKF."}]};
DB['mmc']={type:"Complejo Metamórfico — MMC",color:"#40e0b0",title:"Malino/Mekongga Metamorphic Complex (MMC)",tags:["Metamorfismo","Esquisto verde","Brazo SE","Basamento"],desc:"Complejo de esquistos y gneises de grado esquisto verde, brazo SE de Sulawesi. Interpretado como basamento pre-colisión del terreno del brazo SE, con afinidad al margen pasivo australiano. Edad: Cretácico.",papers:[{ref:"Baillie, P. W., & Decker, J. (2022)",title:"Tectonic evolution of Sulawesi, Indonesia",journal:"Geological Society of London Special P. Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388",find:"MMC: esquistos y gneises en el brazo SE. Basamento pre-colisión. Grado esquisto verde, edad Cretácico."}]};
DB['bantimala']={type:"Complejo Metamórfico UHP — Bantimala",color:"#40e0b0",title:"Bantimala Complex — UHP (Eclogitas, 119 Ma)",tags:["UHP","Eclogita","Blueschist","119 Ma","27-28.5 kbar","615-640°C","Brazo SW"],desc:"Único registro UHP confirmado de Sulawesi. Eclogitas + esquisto azuls en el brazo SW. Condiciones P-T: 27-28.5 kbar, 615-640°C (profundidad ~90-95 km). Edad U-Pb: 119 Ma (Cretácico Temprano). Evidencia de subducción profunda pre-colisional seguida de exhumación rápida. Obducido sobre el basamento de Sundaland durante la colisión Paleógena.",papers:[{ref:"Parkinson, C. D., Miyazaki, K., Wakita, K., Barber, A. J., & Carswell, D. A. (1998)",title:"An overview and tectonic synthesis of the pre-Tertiary very-high-pressure metamorphic and associated rocks of Java, Sulawesi and Kalimantan, Indonesia",journal:"Island Arc, 7(1-2), 184-200. doi:10.1046/j.1440-1738.1998.00184.x",find:"Bantimala UHP: eclogitas con omfacita + granate + rutilo. P=27-28.5 kbar, T=615-640°C. Única ocurrencia UHP confirmada en Sulawesi."},{ref:"Baillie, P. W., & Decker, J. (2022)",title:"Tectonic evolution of Sulawesi, Indonesia",journal:"Geological Society of London Special P. Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388",find:"Bantimala Complex: complejo UHP en el brazo SW, edad Cretácico Temprano. Contexto tectónico de subducción profunda pre-colisional."}]};
DB['tokorondo']={type:"Complejo Metamórfico — Tokorondo",color:"#40e0b0",title:"Tokorondo Metamorphic Complex",tags:["Metamorfismo","Central Sulawesi","Esquisto verde"],desc:"Complejo metamórfico de grado bajo a medio en Sulawesi central. Esquistos verdes y filitas. Relacionado con la faja metamórfica central de Sulawesi, posiblemente parte del mismo evento que el PMC pero en posición más alejada de la zona de cizalla principal.",papers:[{ref:"Baillie, P. W., & Decker, J. (2022)",title:"Tectonic evolution of Sulawesi, Indonesia",journal:"Geological Society of London Special P. Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388",find:"Tokorondo Complex: complejo metamórfico central Sulawesi. Esquistos verdes, grado bajo-medio."}]};
DB['gps_vel_socquet']={type:"Velocidad GPS — Socquet et al. (2006)",color:"#22d3ee",title:"Cinemática de bloques SE Asia — GPS (Socquet 2006)",tags:["GPS","ITRF2000","Bloques microplacas","~42 mm/yr PKF","SE Asia triple junction"],desc:"Velocidades GPS de estaciones en Sulawesi y alrededores, referencia ITRF2000. Conjunto compilado en el estudio de rotación de microplacas en la triple unión SE Asia. Muestra el campo de velocidades del Bloque Makassar (W) vs. Bloque North Sula (E) con la PKF absorbiendo ~42 mm/año de movimiento relativo sinistral.",papers:[{ref:"Socquet et al. (2006)",title:"Microblock rotations and fault coupling in SE Asia triple junction (Sulawesi, Indonesia) from GPS and earthquake slip vector data",journal:"Journal of Geophysical Research: Solid Earth, 111(B8). doi:10.1029/2005JB003963",find:"PKF: ~42 mm/yr en ITRF2000. Pull-apart transtensivo en Cuenca de Palu. Bloque Makassar rota ~0.5°/Ma antihorario respecto a Sundaland."}]};
DB['gps_vel_walpersdorf']={type:"Velocidad GPS — Walpersdorf et al. (1998)",color:"#22d3ee",title:"Convergencia Indo-Australiana Norte Sulawesi — GPS (Walpersdorf 1998)",tags:["GPS","ITRF94","Norte Sulawesi","NST","Convergencia"],desc:"Primeras mediciones GPS en Sulawesi norte y Mar de Célebes. Muestra la convergencia del Bloque North Arm de Sulawesi hacia el norte a ~3 cm/año, comprimida contra la placa Indo-Australiana. Cuantifica el acortamiento a lo largo de la NST y las tasas de subducción del Mar de Célebes.",papers:[{ref:"Walpersdorf et al. (1998)",title:"Monitoring of the Palu-Koro fault (Sulawesi) by GPS",journal:"Geophysical Research Letters, 25(13), 2313-2316. doi:10.1029/98GL01449",find:"Monitoreo GPS PKF: tasa ~35 mm/yr sinistral. Primera medición directa de la tasa deslizamiento en la PKF con GPS."}]};
DB['gps_vel_irsyam']={type:"Velocidad GPS — Irsyam et al. (2020)",color:"#22d3ee",title:"Red GPS Indonesia para Amenaza Sísmica (Irsyam 2020)",tags:["GPS","CORS BMKG","ITRF2014","Irsyam 2020","Hazard sísmico"],desc:"Velocidades GPS de la red de estaciones CORS del BMKG (Badan Meteorologi, Klimatologi dan Geofisika) en Indonesia. Compiladas en el marco del desarrollo del Mapa Nacional de Amenaza Sísmica 2017. Referencia ITRF2014. Incluye estaciones en los cuatro brazos de Sulawesi y en las islas adyacentes.",papers:[{ref:"Irsyam et al. (2020)",title:"Development of the 2017 national seismic hazard maps of Indonesia",journal:"Earthquake Spectra, 36(1_suppl), 112-136. doi:10.1177/8755293020951206",find:"Velocidades GPS BMKG CORS en Indonesia, referencia ITRF2014. Utilizadas para definir geometría de fallas y tasas de deslizamiento en el modelo de amenaza sísmica."}]};
DB['plate_vel_morvel']={type:"Velocidad de Placa — NNR-MORVEL56",color:"#94a3b8",title:"Velocidades angulares de placas — NNR-MORVEL56",tags:["NNR-MORVEL56","ITRF2008","Indo-Australiana 70 mm/yr","Sunda 30 mm/yr","Filipinas 15-20 mm/yr"],desc:"Modelo de velocidades angulares de 56 placas tectónicas en el marco de referencia NNR (No Net Rotation), derivado del análisis conjunto de vectores de deslizamiento sísmico, tasas de expansión de dorsal y velocidades GPS. Las tres placas relevantes para Sulawesi son: (1) Indo-Australiana convergiendo hacia el N a ~70 mm/yr; (2) Sunda (subplaca de Eurasia) moviéndose ~30 mm/yr hacia el SE; (3) Filipinas con ~15-20 mm/yr hacia el NO.",papers:[{ref:"Argus, D. F., Gordon, R. G., & DeMets, C. (2011)",title:"Geologically current motion of 56 plates relative to the no-net-rotation reference frame",journal:"Geochemistry, Geophysics, Geosystems, 12(11). doi:10.1029/2011GC003751",find:"NNR-MORVEL56: velocidades angulares de 56 placas. Indo-Australiana: 69-71 mm/yr hacia N bajo Sulawesi. Sunda: ~29-31 mm/yr hacia SE. Filipinas: ~14-19 mm/yr hacia WNW."}]};
DB['cpd_pratama']={type:"Profundidad del Punto de Curie",color:"#f97316",title:"Curie Point Depth — EIGEN-6C4 / Pratama et al. (2025)",tags:["CPD","Punto de Curie","Flujo calórico","Geotermia","PVMBG"],desc:"Profundidad del Punto de Curie (CPD) derivada de la anomalía de campo magnético total (NOAA World Magnetic Model). La CPD es la profundidad a la que las rocas ferromagnéticas pierden su magnetización permanente (curva de Curie, ~580°C para la magnetita). Valores bajos (<15 km) indican altos gradientes geotérmicos — brazo norte (arco volcánico Sangihe). Valores altos (>25 km) indican sistemas litosféricos fríos o cratonizados — extremos del brazo este. Resolución: mismo extent que Fig. 4 [117.5–127.5°E, 6°S–4°N]. Fuente: SSRN preprint no revisado por pares al momento de la consulta.",papers:[{ref:"Pratama et al. (2025)",title:"Probabilistic Favourability Assessment of Geothermal Resources in Sulawesi Island",journal:"SSRN Preprint 6478359. doi:10.2139/ssrn.6478359",find:"Fig. 4d: mapa CPD derivado de NOAA WMM. Brazo norte: CPD ~10-15 km (alta actividad volcánica). Brazo sur/este: CPD 20-30 km."}]};
DB['height_anom']={type:"Ondulación Geoidal (m)",color:"#22c55e",title:"INAGEOID2020 — Ondulación geoidal Indonesia (m)",tags:["Geoide","INAGEOID2020","BIG","Indonesia","0.01° × 0.01°"],desc:"Ondulación geoidal N derivada del modelo INAGEOID2020 (Badan Informasi Geospasial — BIG), el datum vertical nacional de Indonesia. Resolución 0.01° (~1.1 km). Cobertura completa: 90–147.5°E, −11–20°N. Rango: −63 a +88 m. Colormap divergente centrado en N=0 m: azul (N negativo, geoide por debajo del elipsoide GRS80) → blanco (N≈0) → rojo (N positivo, geoide por encima del elipsoide). Los valores negativos ocurren en el Mar de Java y zona de colisión Banda–Australia. Los máximos positivos (≈+80–88 m) corresponden al centro de la cuña mantélica del arco de Banda y área de Halmahera. Sulawesi continental: +25 a +60 m. El gradiente ∂N/∂x es indicador de variación lateral en la distribución de masa litosférica.",papers:[{ref:"Pahlevi, A. M. et al. (2024)",title:"INAGEOID2020: A Vertical Datum in Indonesia",journal:"Scientific Data, 11, 1189. doi:10.1038/s41597-024-04045-9",find:"INAGEOID2020 — datum vertical nacional de Indonesia. Resolución 0.01°. Derivado de datos gravimétricos terrestres, aéreos y satelitales (GOCE/GRACE). Exactitud ~6 cm rms sobre el archipiélago."},{ref:"Pahlevi, A. M. et al. (2023)",title:"INAGEOID2020 dataset [Data set]",journal:"Zenodo. doi:10.5281/zenodo.8404628",find:"Dataset tabular INAGEOID2020 con columnas lon/lat/N (m) a resolución 0.01°. 643 MB, cobertura 90–147.5°E, −11–20°N."}]};
DB['grav_bouguer']={type:"Anomalía de Bouguer",color:"#2166ac",title:"WGM2012 — Bouguer",tags:["Bouguer","Gravimetría","WGM2012","BGI"],desc:"Anomalía de Bouguer completa del modelo WGM2012 (World Gravity Map). Derivada de EGM2008 con correcciones topográficas completas. Rango en la región: −261 a +486 mGal. Resolución 2' (~3.7 km).",papers:[{ref:"Bonvalot et al. (2012)",title:"Global grids: World Gravity Map (WGM2012)",journal:"Bureau Gravimetrique International. doi:10.18168/bgi.23",find:"Malla global de anomalía de Bouguer calculada sobre EGM2008 con correcciones topográficas completas (resolución 2'). Recortado a la región de Indonesia/Sulawesi para este mapa."}]};
DB['grav_freeair']={type:"Anomalía de Aire Libre",color:"#d6604d",title:"WGM2012 — Aire Libre",tags:["Aire libre","Free-air","Gravimetría","WGM2012","BGI"],desc:"Anomalía de aire libre del modelo WGM2012 (World Gravity Map). Derivada de EGM2008 sin correcciones topográficas. Rango en la región: −285 a +579 mGal. Resolución 2' (~3.7 km).",papers:[{ref:"Bonvalot et al. (2012)",title:"Global grids: World Gravity Map (WGM2012)",journal:"Bureau Gravimetrique International. doi:10.18168/bgi.23",find:"Malla global de anomalía de aire libre derivada del modelo EGM2008 (grado/orden 2190, resolución 2'). Recortado a la región de Indonesia/Sulawesi para este mapa."}]};
// Faturrakhman et al. (2025) — H2 natural Tanjung Api
DB['geophysical_point_faturrakhman2025_1']={type:"Emanación H2 — Tanjung Api",color:"#22c55e",title:"H2 seep Tanjung Api coast — >1000 ppm",tags:["H2 natural",">1000 ppm","1000-1400 m³/día","Serpentinización ESO","IRTA Clase 1-2"],desc:"Emanación de hidrógeno natural submarina y superficial en la costa de Tanjung Api. H2 >1000 ppm, caudal 1000–1400 m³/día. Gas emerge de burbujas submarinas y del suelo en secciones con juntas de depósitos de terraza. Mecanismo: serpentinización de ultramáficas del ESO facilitada por infiltración de agua a través de la Falla Ampana. Zona de actividad tectónica muy alta (IRTA Clase 1).",papers:[{ref:"Faturrakhman et al. (2025)",title:"Tectonic geomorphology analysis in natural hydrogen exploration: A case study from Tanjung Api, Sulawesi",journal:"Riset Geologi dan Pertambangan, 35(1), 37–48. doi:10.55981/risetgeotam.2025.1357",find:"H2 >1000 ppm, flow rate 1000–1400 m³/día en Tanjung Api coast. Co-ubicado con IRTA Clase 1–2 a lo largo de las fallas Ampana y Toili."}]};
DB['geophysical_point_faturrakhman2025_2']={type:"Terma con H2 — Pulodalagan",color:"#22c55e",title:"H2 seep Pulodalagan hot spring — 144-197 ppm",tags:["H2 natural","Terma","144-197 ppm","Travertino","IRTA Clase 1-2"],desc:"Emanación de H2 en terma de Pulodalagan. 144–197 ppm de H2 emergiendo periódicamente de una fisura en depósito de travertino. Co-ubicado con zona de alta actividad tectónica (IRTA Clase 1–2) y Falla Ampana.",papers:[{ref:"Faturrakhman et al. (2025)",title:"Tectonic geomorphology analysis in natural hydrogen exploration: A case study from Tanjung Api, Sulawesi",journal:"Riset Geologi dan Pertambangan, 35(1), 37–48. doi:10.55981/risetgeotam.2025.1357",find:"H2 = 144–197 ppm en fisura de travertino en terma Pulodalagan. Gas periódico."}]};
DB['structure_faturrakhman2025_3']={type:"Área de Estudio — Tanjung Api",color:"#22c55e",title:"Área Tanjung Api/Ampana — análisis IRTA",tags:["IRTA","Geomorfología tectónica","30 mountain fronts","52 sub-cuencas"],desc:"Área de estudio del análisis de geomorfología tectónica (IRTA) en Tanjung Api/Ampana. 30 mountain fronts + 52 sub-cuencas analizadas. Actividad tectónica dominantemente moderada–alta (Clase 2–3) con zonas Clase 1–2 a lo largo de las fallas Ampana y Toili. Rocas: ultramáficas ESO + Formación Bongka (conglomerado Plioceno).",papers:[{ref:"Faturrakhman et al. (2025)",title:"Tectonic geomorphology analysis in natural hydrogen exploration: A case study from Tanjung Api, Sulawesi",journal:"Riset Geologi dan Pertambangan, 35(1), 37–48. doi:10.55981/risetgeotam.2025.1357",find:"IRTA clase 2–3 dominante, clase 1–2 en zonas de fallas activas. 30 mountain fronts, 52 sub-cuencas. Rocas: ESO ultramáficas + Fm. Bongka (Plioceno)."}]};
DB['fault_faturrakhman2025_4']={type:"Falla Activa — Ampana",color:"#888888",title:"Falla Ampana — NW-SE, control de H2",tags:["NW-SE","Conducto H2","Serpentinización","IRTA Clase 1-2","Inferred"],desc:"Falla Ampana NW-SE que actúa como conducto de infiltración de agua en ultramáficas del ESO, generando serpentinización y H2 natural. Traza inferred de mapa geológico Rusmana et al. (1993). Actividad tectónica confirmada por IRTA Clase 1–2 y triángulos facetados + valles lineales en campo.",papers:[{ref:"Faturrakhman et al. (2025)",title:"Tectonic geomorphology analysis in natural hydrogen exploration: A case study from Tanjung Api, Sulawesi",journal:"Riset Geologi dan Pertambangan, 35(1), 37–48. doi:10.55981/risetgeotam.2025.1357",find:"Falla Ampana: conducto de agua para serpentinización + conducto de migración de H2. Triángulos facetados + valles lineales confirman actividad activa."}]};
DB['fault_faturrakhman2025_5']={type:"Falla Activa — Toili",color:"#888888",title:"Falla Toili — NW-SE, actividad alta",tags:["NW-SE","IRTA Clase 1-2","Tanjung Api","Inferred"],desc:"Falla Toili NW-SE en el área de Tanjung Api. IRTA Clase 1–2 a lo largo de la traza. Traza inferred de mapa Rusmana et al. (1993). Co-ubicada con zona de H2 en Tanjung Api según Fig. 6.",papers:[{ref:"Faturrakhman et al. (2025)",title:"Tectonic geomorphology analysis in natural hydrogen exploration: A case study from Tanjung Api, Sulawesi",journal:"Riset Geologi dan Pertambangan, 35(1), 37–48. doi:10.55981/risetgeotam.2025.1357",find:"Falla Toili co-ubicada con H2 seeps y IRTA Clase 1–2. Actividad activa confirmada geomorfológicamente."}]};
DB['seis5']={type:"Sismicidad Mw 5–5.9",color:"#e47820",title:"USGS NEIC — Catálogo Mw 5–5.9",tags:["Sismicidad","USGS","NEIC","FDSN","Mw 5"],desc:"Catálogo de sismos Mw 5.0–5.9 en la región de Sulawesi (115–130°E, 10°S–5°N), período 1990–2026. 3.926 eventos descargados vía USGS FDSN Web Services.",papers:[{ref:"USGS NEIC (2026)",title:"USGS Earthquake Hazards Program — FDSN Web Services",journal:"https://earthquake.usgs.gov/fdsnws/event/1/",find:"Catálogo de sismos Mw 5.0–5.9 en la región de Sulawesi (115–130°E, 10°S–5°N), 1990–2026. 3.926 eventos procesados vía FDSN API (format=geojson)."}]};
// DB — Serhalawan & Chen (2024) GeoJSON — 19 features con jerarquía tectónica
DB['fault_serhalawan_2024_1']={type:"Falla de Rumbo Sinestral — 1er Orden",color:"#c89040",title:"Falla Palu-Koro (PKF)",tags:["Sinestral","~42 mm/año","Palu 2018 Mw 7.6","1er orden"],desc:"Principal falla sinestral de Sulawesi. Tasa ~42 mm/yr relativo MKB-NSB. El sismo Palu 2018 Mw 7.6 llenó la brecha sísmica del PKF y disparó sismicidad en 6 zonas via cambios de estrés de Coulomb. Segmento N costa afuera con baja sismicidad — fuera del radio de alta velocidad relativa MKB-NSB.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"PKF: 32-45 mm/yr. Palu 2018 Mw 7.6 llenó brecha sísmica. Coulomb stress positivo en 6 zonas. Supershear hacia el S."}]};
DB['fault_serhalawan_2024_2']={type:"Falla de Rumbo Sinestral — 2do Orden",color:"#c89040",title:"Falla Matano",tags:["Sinestral","~7 mm/año","WNW-ESE","Brazo Este"],desc:"Falla sinestral WNW-ESE del Brazo Este. Tasa ~7 mm/yr. Dos mayores sismos Mw 6.1 (1980 y 2011). El borde E conecta con el Cabalgamiento Tolo.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Patrón WNW-ESE de sismicidad y mecanismos focales confirma movimiento sinestral. ~7 mm/yr. Borde E conecta con Cabalgamiento Tolo."}]};
DB['fault_serhalawan_2024_3']={type:"Sistema de Fallas Inversas — 1er Orden",color:"#c84070",title:"Cabalgamiento del Estrecho de Makassar (MST)",tags:["Thrust E-dipping","5-11 mm/año","5 segmentos","1er orden"],desc:"Sistema de 5 segmentos (North, Central, Central-North, Mamuju, Somba). Acomoda convergencia Sulawesi-Sunda a 5-11 mm/yr. Segmento Somba: silencio sísmico desde 1970 — hazard potencial. MST Central: actividad creciente desde Sep 2020 (Coulomb del Palu 2018).",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"MST 5 segmentos. Mamuju Mw 6.7 (1984). Somba Mw 7.1 (1969). MST Central actividad creciente Sep 2020."}]};
DB['fault_serhalawan_2024_4']={type:"Falla de Rumbo Sinestral — 2do Orden",color:"#c89040",title:"Falla Peleng",tags:["Sinestral","NE-SW","Mw 7.5 (2000)","Extensión Tolo Bay"],desc:"Falla sinestral NE-SW. Mw 7.5 (4 May 2000) atribuido al plano NE-SW. Posible extensión costa afuera SW no identificada previamente: cluster Tolo Bay (Abr 2019, Mw 6.8), potencialmente disparado por Palu 2018.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Mw 7.5 (2000): plano NE-SW como verdadero plano de falla. Extensión SW propuesta — cluster Tolo Bay (Abr 2019)."}]};
DB['fault_serhalawan_2024_5']={type:"Falla Inversa — Frente de Colisión",color:"#c84070",title:"Cabalgamiento Batui",tags:["Thrust","Colisión Banggai-Sula","Sin GCMT","Hazard subestimado"],desc:"Frente superficial de la colisión Banggai-Sula (~5 Ma). Baja sismicidad — ninguna solución GCMT disponible. Últimos M>5 en 1964, 1966 y 1981. Riesgo sísmico posiblemente subestimado.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Cabalgamiento Batui: sismicidad muy baja, ninguna solución GCMT. Últimos M>5 en 1981. Riesgo subestimado."}]};
DB['fault_serhalawan_2024_6']={type:"Falla Inversa — 2do Orden",color:"#c84070",title:"Cabalgamiento Tolo",tags:["Thrust W-dipping","Golfo de Tolo","Posible futura subducción"],desc:"Cabalgamiento de vergencia oeste en el golfo de Tolo. Baja sismicidad. Clusters de fallas normales perpendiculares por rollback de la losa de Banda. Hall (2018): propuesto como posible futura zona de iniciación de subducción.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Cabalgamiento Tolo: baja sismicidad. Fallas normales perpendiculares → rollback Banda losa. Posible iniciación subducción futura."}]};
DB['fault_serhalawan_2024_7']={type:"Falla de Rumbo Dextral — 2do Orden",color:"#c89040",title:"Falla Gorontalo",tags:["Dextral","~11 mm/año","M 7.2 (1941)","Brazo Norte"],desc:"Falla dextral en el Brazo Norte. ~11 mm/yr (Socquet et al. 2006). A pesar de la tasa estimada, la sismicidad cortical es baja. M 7.2 (1941) a 35-50 km de profundidad. Potencial hazard no descartado.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Gorontalo: ~11 mm/yr dextral. Sismicidad cortical baja. M 7.2 (1941) a 35-50 km. Potencial hazard no descartado."}]};
DB['fault_serhalawan_2024_8']={type:"Falla de Rumbo con Componente Normal",color:"#c89040",title:"Falla Kolaka",tags:["Oblicua","Normal en centro","SE Arm","Pull-apart"],desc:"Transcurrente con componente normal en el centro. Lado hundido al sur (Watkinson & Hall 2017). Sismicidad concentrada en centro con mecanismo normal: extensión en salto lateral/pull-apart.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Kolaka: mecanismo normal en centro (Mw 6.1 buzamiento SW). Watkinson & Hall: extensión pull-apart. Downthrown side al sur."}]};

// Jayadi et al. (2023) — Tomografía PKF
const _JAYADI_PAPER={ref:"Jayadi et al. (2023)",title:"Seismic Tomography of Palu-Koro Fault Using Local Earthquake Data",journal:"IOP Conf. Ser.: Earth Environ. Sci., 1227, 012032. doi:10.1088/1755-1315/1227/1/012032",find:"Tomografía local con 20 estaciones BMKG (2010-2019). Anomalía Vp negativa (baja velocidad) alrededor de la PKF a 5-25 km de profundidad. Checkerboard test OK a 10-30 km."};

DB['structure_jayadi2023_2']={type:"Área de Estudio — Tomografía PKF",color:"#7060b0",title:"Red de estaciones — Tomografía PKF, 20 estaciones BMKG",tags:["BMKG","20 estaciones","2010-2019","PKF"],desc:"Red de 20 estaciones BMKG en Sulawesi central. Cubre el tramo central de la PKF con buena resolución en 10-30 km. 2010-2019.",papers:[_JAYADI_PAPER]};
DB['structure_jayadi2023_3']={type:"Anomalía Sísmica — PKF",color:"#7060b0",title:"Zona de anomalía Vp negativa — PKF 5-25 km",tags:["Vp negativa","Zona sismogénica","PKF","Zona de falla"],desc:"Zona de baja velocidad Vp alrededor de la PKF entre 5-25 km de profundidad. Interpretada como zona de falla activa con fluidos o rocas fracturadas.",papers:[_JAYADI_PAPER]};

DB['subduction_zone_serhalawan_2024_1']={type:"Zona de Subducción — 1er Orden",color:"#c85040",title:"Fosa Norte de Sulawesi (NST)",tags:["Subducción sur","~5 Ma","Banggai-Sula","Gap central 121-121.7°E"],desc:"Subducción del Mar de Célebes iniciada ~5 Ma disparada por la colisión Banggai-Sula. Tasa de convergencia 13-65 mm/yr (aumenta hacia el O). Mayor evento: Mw 7.9 (1996) extremo O. Gap sísmico central (121-121.7°E): posible bajo acoplamiento, slow-slip o gran sismo futuro.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"NST: inicio ~5 Ma por colisión Banggai-Sula. Sismos cabalgamiento interplaca buzamiento S. Mw 7.9 (1996) extremo O donde convergencia es máxima."},{ref:"Greenfield, T. et al. (2021)",title:"The seismicity and tectonics of the northern Sulawesi subduction zone",journal:"Tectonics, 40, e2020TC006573. doi:10.1029/2020TC006573",find:"NST: propiedades elásticas de la placa subducente del Mar de Célebes. Convergencia norte variable. Elastic thickness ~10 km."}]};
DB['earthquake_serhalawan_2024_1']={type:"Sismo Histórico — Transcurrente",color:"#c89040",title:"Palu 2018 — Mw 7.6",tags:["Mw 7.6","2018-09-28","PKF","Supershear"],desc:"Sismo supershear que llenó la brecha sísmica del PKF. Propagación hacia el S. Disparó aumento de sismicidad en 6 zonas de Sulawesi mediante cambios positivos de estrés de Coulomb (Wibowo et al. 2020).",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Palu 2018 Mw 7.6: llenó brecha PKF. Supershear hacia el S. Coulomb stress positivo en 6 zonas regionales."}]};
DB['earthquake_serhalawan_2024_2']={type:"Sismo Histórico — Transcurrente",color:"#c89040",title:"Banggai-Sula 1998 — Mw 7.7",tags:["Mw 7.7","1998-11-29","South Sula Fault","Translación Banggai-Sula"],desc:"Mayor evento de la región (Mw 7.7, 29 Nov 1998). Posiblemente atribuido a la translación oeste del microcontinente Banggai-Sula via la falla South Sula.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Mw 7.7 (1998): posible traslación microcontinente Banggai-Sula via falla Sula Sur."}]};
DB['earthquake_serhalawan_2024_3']={type:"Sismo Histórico — Cabalgamiento",color:"#c84070",title:"Minahassa 1996 — Mw 7.9",tags:["Mw 7.9","1996","NST extremo O","Precursor Coulomb Palu"],desc:"Mayor evento interplaca del NST (Mw 7.9). Extremo O donde la convergencia es máxima. Liu & Shi (2021): incrementó el estrés de Coulomb en el hipocentro del Palu 2018 — precursor.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Mw 7.9 (1996): mayor evento NST. Liu & Shi (2021): Coulomb stress positivo en hipocentro de Palu 2018."}]};
DB['hazard_zone_serhalawan_2024_1']={type:"Brecha Sísmica Interpretada — NST Central",color:"#c85040",title:"Gap Sísmico NST Central (121–121.7°E)",tags:["Gap sísmico","~80 km","Incertidumbre alta","NST"],desc:"Ausencia de sismos interplaca Mw≥6.5 en 121-121.7°E. Tres hipótesis: bajo acoplamiento (como Shumagin), deslizamiento asísmico (como Guerrero), o sitio de gran sismo futuro. Solo validación geodésica futura puede discriminar.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Gap NST central: sin sismos interplaca Mw≥6.5 documentados. Requiere validación geodésica para discriminar hipótesis."}]};
DB['hazard_zone_serhalawan_2024_2']={type:"Brecha Sísmica Interpretada — PKF Norte",color:"#c85040",title:"Brecha Sísmica PKF Norte (costa afuera NW)",tags:["Gap sísmico","PKF","Offshore NW","~60 km"],desc:"Segmento N del PKF costa afuera (NW Sulawesi) con sismicidad menor que el resto de la falla. Posiblemente fuera del radio de alta velocidad relativa MKB-NSB. Tiranda & Hall (2024) refuta conexión con NE Borneo.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"PKF norte: baja sismicidad — fuera del radio alta velocidad relativa MKB-NSB. Tiranda & Hall (2024) refuta conexión con NE Borneo."}]};
DB['seismicity_cluster_serhalawan_2024_1']={type:"Clúster de Sismicidad — Extensión Costa afuera",color:"#4888cc",title:"Cluster Tolo Bay 2019",tags:["21 eventos","Mw 4.3-6.8","Peleng offshore SW","Activado por Palu 2018"],desc:"Cluster de 21 eventos (Abr-Jun 2019) en Tolo Bay. Posible continuación costa afuera SW de la falla Peleng, previamente no identificada. Quiescente desde 1999 — posiblemente activado por Palu 2018 via Coulomb stress.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Tolo Bay (2019): 21 eventos, momento acumulado 1.96e+26 dyne-cm. Posible extensión SW falla Peleng. Quiescente 1999-2019."}]};
DB['seismicity_cluster_serhalawan_2024_2']={type:"Clúster de Sismicidad — Colapso Gravitacional",color:"#4888cc",title:"Cluster Tokorondo — Extensional",tags:["Normal","Mw 6.6 (2017)","Flancos PKF","Colapso gravitacional"],desc:"Fallas normales al E del segmento S del PKF. Mayor evento Mw 6.6 (29 May 2017), buzamiento SW. Interpretado como colapso gravitacional lateral facilitado por el PKF durante el Cuaternario.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi, Indonesia",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Tokorondo: mecanismos normales al E del PKF sur. Mw 6.6 (2017) buzamiento SW. Colapso gravitacional lateral."}]};

// DB — Jibran & Rafie (2025) — Clústeres DBSCAN regímenes sismotectónicos
DB['structure_jibran_2025_cluster01']={type:"Clúster DBSCAN — Compresional",color:"#c85040",title:"Cluster 01 — Compresional NST Oeste",tags:["Compresional","NST","49 eventos"],desc:"Cluster DBSCAN (49 eventos, mecanismos inversos): régimen compresional por subducción del Mar de Célebes en el sector oeste del Fosa Norte de Sulawesi.",papers:[{ref:"Jibran & Rafie (2025)",title:"Heterogeneity of tectonic regimes in Sulawesi Island",journal:"IOP Conf. Ser.: Earth Environ. Sci., 1525, 012002. https://doi.org/10.1088/1755-1315/1525/1/012002",find:"Cluster 01 (49 eventos): régimen compresional, mecanismos inversos dominantes. NST sector occidental."}]};
DB['structure_jibran_2025_cluster02']={type:"Clúster DBSCAN — Compresional",color:"#c85040",title:"Cluster 02 — Compresional NST Este",tags:["Compresional","NST","81 eventos"],desc:"Cluster DBSCAN (81 eventos): régimen compresional NST sector oriental.",papers:[{ref:"Jibran & Rafie (2025)",title:"Heterogeneity of tectonic regimes in Sulawesi Island",journal:"IOP Conf. Ser.: Earth Environ. Sci., 1525, 012002. https://doi.org/10.1088/1755-1315/1525/1/012002",find:"Cluster 02 (81 eventos): mecanismos inversos dominantes, sector oriental del NST."}]};
DB['structure_jibran_2025_cluster03']={type:"Clúster DBSCAN — Transformante",color:"#c89040",title:"Cluster 03 — Transformante PKF",tags:["Transformante","PKF","62 eventos"],desc:"Cluster DBSCAN (62 eventos): régimen transformante de la Falla Palu-Koro con mecanismos transcurrente sinestrales y normales (Palolo, Bada).",papers:[{ref:"Jibran & Rafie (2025)",title:"Heterogeneity of tectonic regimes in Sulawesi Island",journal:"IOP Conf. Ser.: Earth Environ. Sci., 1525, 012002. https://doi.org/10.1088/1755-1315/1525/1/012002",find:"Cluster 03 (62 eventos): transcurrente (PKF sinestral) + normal (Falla Palolo, Falla Bada)."}]};
DB['structure_jibran_2025_cluster04']={type:"Clúster DBSCAN — Extensional",color:"#4888cc",title:"Cluster 04 — Extensional Lalanga-Tongian",tags:["Extensional","Lalanga","Tongian","16 eventos"],desc:"Cluster DBSCAN (16 eventos): régimen extensional entre los Ridges Lalanga y Tongian, norte del East Arm. Mecanismos normales dominantes.",papers:[{ref:"Jibran & Rafie (2025)",title:"Heterogeneity of tectonic regimes in Sulawesi Island",journal:"IOP Conf. Ser.: Earth Environ. Sci., 1525, 012002. https://doi.org/10.1088/1755-1315/1525/1/012002",find:"Cluster 04 (16 eventos): mecanismos normales dominantes. Ridges Lalanga y Tongian norte del East Arm."}]};
DB['structure_jibran_2025_cluster05']={type:"Clúster DBSCAN — Compresional",color:"#c85040",title:"Cluster 05 — Compresional Cabalgamiento N-vergente",tags:["Compresional","North-Vergent Thrust","24 eventos"],desc:"Cluster DBSCAN (24 eventos): régimen compresional, North-Vergent Cabalgamiento costa afuera norte del East Arm.",papers:[{ref:"Jibran & Rafie (2025)",title:"Heterogeneity of tectonic regimes in Sulawesi Island",journal:"IOP Conf. Ser.: Earth Environ. Sci., 1525, 012002. https://doi.org/10.1088/1755-1315/1525/1/012002",find:"Cluster 05 (24 eventos): mecanismos inversos. North-Vergent Cabalgamiento costa afuera norte East Arm."}]};
DB['structure_jibran_2025_cluster06']={type:"Clúster DBSCAN — Transformante",color:"#c89040",title:"Cluster 06 — Transformante Falla Matano",tags:["Transformante","Falla Matano","19 eventos"],desc:"Cluster DBSCAN (19 eventos): régimen transformante de la Falla Matano sinestral.",papers:[{ref:"Jibran & Rafie (2025)",title:"Heterogeneity of tectonic regimes in Sulawesi Island",journal:"IOP Conf. Ser.: Earth Environ. Sci., 1525, 012002. https://doi.org/10.1088/1755-1315/1525/1/012002",find:"Cluster 06 (19 eventos): predominio transcurrente sinestral — actividad de cizalla Falla Matano."}]};
DB['structure_jibran_2025_cluster07']={type:"Clúster DBSCAN — Compresional",color:"#c85040",title:"Cluster 07 — Compresional Fosa Sangihe Oeste",tags:["Compresional","Sangihe Trench","18 eventos"],desc:"Cluster DBSCAN (18 eventos): régimen compresional, Fosa Sangihe Oeste. Parte del sistema de doble subducción del Mar de Molucas.",papers:[{ref:"Jibran & Rafie (2025)",title:"Heterogeneity of tectonic regimes in Sulawesi Island",journal:"IOP Conf. Ser.: Earth Environ. Sci., 1525, 012002. https://doi.org/10.1088/1755-1315/1525/1/012002",find:"Cluster 07 (18 eventos): compresional, Fosa Sangihe Oeste. Sistema doble subducción Molucas."}]};
DB['structure_jibran_2025_cluster08']={type:"Clúster DBSCAN — Compresional",color:"#c85040",title:"Cluster 08 — Compresional Molucca Sea (742 ev.)",tags:["Compresional","Mar de Molucas","742 eventos","53% del total"],desc:"Cluster DBSCAN más grande del estudio (742 eventos = 53% del total). Régimen compresional dominante del Mar de Molucas — doble subducción divergente activa Sangihe-Halmahera.",papers:[{ref:"Jibran & Rafie (2025)",title:"Heterogeneity of tectonic regimes in Sulawesi Island",journal:"IOP Conf. Ser.: Earth Environ. Sci., 1525, 012002. https://doi.org/10.1088/1755-1315/1525/1/012002",find:"Cluster 08 (742 eventos = 53% del total): compresional dominante, doble subducción Sangihe-Halmahera activa."}]};
DB['structure_jibran_2025_cluster09']={type:"Clúster DBSCAN — Compresional",color:"#c85040",title:"Cluster 09 — Compresional Molucca Sea Norte",tags:["Compresional","Halmahera","30 eventos"],desc:"Cluster DBSCAN (30 eventos): compresional sector norte del Mar de Molucas, lado de subducción Halmahera.",papers:[{ref:"Jibran & Rafie (2025)",title:"Heterogeneity of tectonic regimes in Sulawesi Island",journal:"IOP Conf. Ser.: Earth Environ. Sci., 1525, 012002. https://doi.org/10.1088/1755-1315/1525/1/012002",find:"Cluster 09 (30 eventos): compresional, sector norte doble subducción Molucas."}]};
DB['structure_jibran_2025_cluster10']={type:"Clúster DBSCAN — Compresional",color:"#c85040",title:"Cluster 10 — Compresional Nusa Tenggara Back Arc",tags:["Compresional","Nusa Tenggara","33 eventos"],desc:"Cluster DBSCAN (33 eventos): compresional, Nusa Tenggara Back Arc Cabalgamiento al sur de la región de estudio.",papers:[{ref:"Jibran & Rafie (2025)",title:"Heterogeneity of tectonic regimes in Sulawesi Island",journal:"IOP Conf. Ser.: Earth Environ. Sci., 1525, 012002. https://doi.org/10.1088/1755-1315/1525/1/012002",find:"Cluster 10 (33 eventos): compresional, Nusa Tenggara Back Cabalgamiento de Arco."}]};
// DB — Hua et al. (2023) — Tomografía anisótropa Banda-Molucas
DB['subduction_zone_hua2023_01']={type:"Subducción — Losa Banda 180°",color:"#7060b0",title:"Losa de Banda — curvatura 180°, spoon shape MTZ",tags:["Losa Banda","180°","Spoon shape","~450 km"],desc:"Losa Indo-Australiana con curvatura 180°. Primera tomografía anisótropa 3D P+S. Alta velocidad 50–400 km. Estancada en MTZ con estructura 'spoon shape' a ~450 km.",papers:[{ref:"Hua et al. (2023)",title:"P and S wave anisotropic tomography of the Banda subduction zone",journal:"Geophys. Res. Lett., 50, e2023GL105611. doi:10.1029/2023GL105611",find:"Alta velocidad Vp+Vs a 50–400 km. Losa estancada en MTZ con 'spoon shape' a ~450 km donde contactan ramas Timor+Seram."}]};
DB['subduction_zone_hua2023_02']={type:"Subducción — Fosa Sangihe",color:"#7060b0",title:"Fosa de Sangihe — hasta MTZ, doble subducción",tags:["Sangihe","Mar de Molucas","MTZ","20-30 Ma"],desc:"Doble subducción asimétrica del Mar de Molucas: Sangihe activa ~20–30 Ma con >1.000 km de convergencia. La losa alcanza la MTZ.",papers:[{ref:"Hua et al. (2023)",title:"P and S wave anisotropic tomography of the Banda subduction zone",journal:"Geophys. Res. Lett., 50, e2023GL105611. doi:10.1029/2023GL105611",find:"Alta velocidad buzante al W bajo Sangihe hasta MTZ. Inicio ~20–30 Ma, >1.000 km convergencia acumulada."}]};
DB['subduction_zone_hua2023_03']={type:"Subducción — Fosa Halmahera",color:"#7060b0",title:"Fosa de Halmahera — losa limitada ~275 km",tags:["Halmahera","~275 km","10 Ma","~3 cm/yr"],desc:"Subducción del Mar de Molucas hacia el este bajo Halmahera. Activa ~10 Ma, losa hasta solo ~250–300 km. Asimétrica respecto a Sangihe.",papers:[{ref:"Hua et al. (2023)",title:"P and S wave anisotropic tomography of the Banda subduction zone",journal:"Geophys. Res. Lett., 50, e2023GL105611. doi:10.1029/2023GL105611",find:"Inicio ~10 Ma, ~300 km convergencia a ~3 cm/yr. Contraste asimétrico: Sangihe→MTZ, Halmahera→~275 km."}]};
DB['cross_section_hua2023_01']={type:"Sección Tomográfica A-A'",color:"#7060b0",title:"Perfil A-A' — doble subducción asimétrica Molucas",tags:["Tomografía A-A'","Molucas","E-W","0-500 km"],desc:"Perfil E-W a través del Mar de Molucas mostrando la doble subducción asimétrica Sangihe-Halmahera. Sangihe hasta MTZ (~660 km), Halmahera hasta ~275 km. Baja velocidad en cuña mantélica entre ambas losas.",section_img_url:"data/sections/hua2023_banda_sulawesi/hua_2023_fig3_seccion_AA.png",section_caption:"Hua et al. (2023), Fig. 3 — Sección Vp/Vs perfil A-A'",papers:[{ref:"Hua et al. (2023)",title:"P and S wave anisotropic tomography of the Banda subduction zone",journal:"Geophys. Res. Lett., 50, e2023GL105611. doi:10.1029/2023GL105611",find:"Perfil A-A': doble subducción asimétrica Molucas. Sangihe buzante al W hasta MTZ. Halmahera buzante al E hasta ~275 km."}]};
DB['cross_section_hua2023_02']={type:"Sección Tomográfica B-B'",color:"#7060b0",title:"Perfil B-B' — Banda losa 'spoon shape' N-S",tags:["Tomografía B-B'","Banda","N-S","Spoon shape"],desc:"Perfil N-S a través del Mar de Banda. Inversión de polaridad Timor (subducción N) / Seram (subducción S). Las dos ramas de la losa contactan a ~450 km en la MTZ formando estructura 'spoon shape'.",section_img_url:"data/sections/hua2023_banda_sulawesi/hua_2023_fig3_seccion_BB.png",section_caption:"Hua et al. (2023), Fig. 3 — Sección Vp/Vs perfil B-B'",papers:[{ref:"Hua et al. (2023)",title:"P and S wave anisotropic tomography of the Banda subduction zone",journal:"Geophys. Res. Lett., 50, e2023GL105611. doi:10.1029/2023GL105611",find:"Inversión de polaridad: subducción norte (Timor), sur (Seram), contactan en MTZ a ~450 km. Estructura 'spoon shape'."}]};
DB['anisotropy_hua2023_01']={type:"Flujo Mantélico — Paralelo a la trinchera",color:"#7060b0",title:"Flujo paralelo a la trinchera — cuña Banda >100 km",tags:["Anisotropía","Trench-parallel","Extrusión lateral","Único globalmente"],desc:"FVDs paralelo a la trinchera en cuña mantélica Banda >100 km. Flujo de extrusión lateral causado por curvatura 180° de la losa. Patrón opuesto a Japón/Cascadia/Alaska.",papers:[{ref:"Hua et al. (2023)",title:"P and S wave anisotropic tomography of the Banda subduction zone",journal:"Geophys. Res. Lett., 50, e2023GL105611. doi:10.1029/2023GL105611",find:"FVDs paralelas a la trinchera en baja velocidad >100 km. El espacio limitado en la cuña fuerza extrusión lateral única."}]};
DB['anisotropy_hua2023_02']={type:"Flujo Mantélico — Semi-Toroidal",color:"#7060b0",title:"Flujo semi-toroidal — borde norte losa Banda",tags:["Anisotropía","Toroidal","Gap Banda-Molucca"],desc:"Patrón semi-toroidal de FVDs en borde norte losa Banda: flujo escapa hacia NE por gap entre losa Banda y losa Molucas.",papers:[{ref:"Hua et al. (2023)",title:"P and S wave anisotropic tomography of the Banda subduction zone",journal:"Geophys. Res. Lett., 50, e2023GL105611. doi:10.1029/2023GL105611",find:"FVDs NE-SW en borde norte. Patrón semi-toroidal análogo a Cascadia y Kamchatka."}]};
DB['anisotropy_hua2023_03']={type:"Anisotropía Fósil — Losa Indo-Australiana",color:"#7060b0",title:"Fossil anisotropy — losa bajo Java-Sumba",tags:["Fossil anisotropy","Java","Sumba","LPO dorsal"],desc:"FVDs NW-SE dentro de la losa bajo Java y Sumba. Fossil anisotropy adquirida en la dorsal meso-oceánica, no modificada por la subducción.",papers:[{ref:"Hua et al. (2023)",title:"P and S wave anisotropic tomography of the Banda subduction zone",journal:"Geophys. Res. Lett., 50, e2023GL105611. doi:10.1029/2023GL105611",find:"FVDs NW-SE perpendiculares a isocrones de la placa. LPO de dorsal meso-oceánica preservada bajo Java-Sumba."}]};
// DB — Hall & Spakman (2015) — Losas y agujeros en losa SE Asia
DB['subduction_zone_hall2015_01']={type:"Subducción — NST Losa Celebes",color:"#7060b0",title:"Fosa Norte de Sulawesi — losa Celebes buzante al sur",tags:["NST","Losa Celebes","~200 km","~5 Ma","Termina en PKF"],desc:"NST: losa Celebes buzante al sur hasta ~200 km. Iniciada ~5 Ma. Termina en el oeste en la continuación costa afuera de la PKF. Genera extensión de la Bahía de Gorontalo y delaminación de la Sula Spur.",papers:[{ref:"Hall & Spakman (2015)",title:"Mantle structure and tectonic history of SE Asia",journal:"Tectonophysics, 658, 14-45. doi:10.1016/j.tecto.2015.07.003",find:"NST termina en PKF costa afuera. Losa Celebes ~200 km, inicio ~5 Ma. Genera extensión Bahía Gorontalo + delaminación Sula Spur."}]};
DB['subduction_zone_hall2015_02']={type:"Subducción — Losa Sula (tentativa)",color:"#7060b0",title:"losa Sula — tercera losa buzante al norte Gorontalo Bay",tags:["Sula slab","Tentativa","N-dipping","~400 km","Pre-24 Ma"],desc:"Tercera losa propuesta bajo Bahía de Gorontalo. buzante al norte sub-vertical, ~400 km. Remanente de subducción pre-Mioceno. Colisión Sula Spur–Brazo Norte a ~24 Ma.",papers:[{ref:"Hall & Spakman (2015)",title:"Mantle structure and tectonic history of SE Asia",journal:"Tectonophysics, 658, 14-45. doi:10.1016/j.tecto.2015.07.003",find:"⚠️ Interpretación tentativa (autores lo explicitan). Tercera losa, sub-vertical buzante al norte, ~400 km. Colisión con Brazo Norte ~24 Ma."}]};
DB['hazard_zone_hall2015_01']={type:"Agujero en Losa — Java Este",color:"#c85040",title:"Losa hole Java Este — gap 250–500 km",tags:["Slab gap","Java Este","250-500 km","~8 Ma","K-volcanismo"],desc:"Agujero real en la losa bajo Java Este (~400 km along-strike, 250–500 km prof.). Formado ~8 Ma por entrada de objeto boyante. Asociado a K-volcanismo y cese del volcanismo calc-alcalino.",papers:[{ref:"Hall & Spakman (2015)",title:"Mantle structure and tectonic history of SE Asia",journal:"Tectonophysics, 658, 14-45. doi:10.1016/j.tecto.2015.07.003",find:"Gap sísmico = agujero real (tomografía UU-P07). ~400 km along-strike, formado ~8 Ma → K-volcanismo Java Este."}]};
DB['hazard_zone_hall2015_02']={type:"Agujero en Losa — Sumbawa",color:"#c85040",title:"Losa hole Sumbawa — gap 200–400 km",tags:["Slab gap","Sumbawa","200-400 km","~4 Ma"],desc:"Agujero en la losa bajo Sumbawa (~150 km along-strike, 200–400 km prof.). Formado ~4 Ma. K-volcanismo joven en Sumbawa norte.",papers:[{ref:"Hall & Spakman (2015)",title:"Mantle structure and tectonic history of SE Asia",journal:"Tectonophysics, 658, 14-45. doi:10.1016/j.tecto.2015.07.003",find:"Losa hole Sumbawa ~150 km along-strike, formado ~4 Ma. K-volcanismo joven en Sumbawa norte."}]};
DB['structure_hall2015_01']={type:"Desgarre en Losa — Sumatra",color:"#7060b0",title:"Sumatra losa tear — NNE bajo Toba",tags:["Slab tear","Sumatra","Toba","NNE"],desc:"Tear NNE en la losa Sumatra bajo el volcán Toba (~1°N). Divide la losa en segmentos de diferentes profundidades. Coincide con FZ Investigator subductada.",papers:[{ref:"Hall & Spakman (2015)",title:"Mantle structure and tectonic history of SE Asia",journal:"Tectonophysics, 658, 14-45. doi:10.1016/j.tecto.2015.07.003",find:"Tear NNE bajo Toba. Al oeste: ~800 km de losa; al este: ~1200 km. Coincide con Fracture Zone Investigator."}]};
DB['subduction_zone_hall2015_03']={type:"Subducción — Losa Banda",color:"#7060b0",title:"Banda losa — rollback ~15 Ma, manto superior",tags:["Banda","Rollback ~15 Ma","Manto superior","Tear norte"],desc:"Losa Banda confinada al manto superior. Rollback en Banda embayment jurásico desde ~15 Ma. Tear prominente al norte bajo Buru y Seram Oeste.",papers:[{ref:"Hall & Spakman (2015)",title:"Mantle structure and tectonic history of SE Asia",journal:"Tectonophysics, 658, 14-45. doi:10.1016/j.tecto.2015.07.003",find:"Rollback ~15 Ma en Banda embayment jurásico. Losa confinada al manto superior con sección plana ~300 km. Incluye litosfera subcontinental delaminada."}]};
DB['yang_2025_fig6_pkf']={type:"Perfil de Velocidad S — Yang et al. (2026)",color:"#7060b0",title:"Estructura cortical PKF — velocidad S y sismicidad",tags:["Velocidad S","OBS","Espesor cortical","PKF","Mar de Célebes"],desc:"Figura 6 de Yang et al. (2026): estructura de velocidad S y distribución de sismicidad relocalizada cerca de la Falla Palu-Koro. Muestra la variación lateral de espesor cortical entre el Mar de Célebes (~8 km, corteza oceánica delgada) y el arco volcánico de Sulawesi (~30 km). El contraste de velocidades a lo largo del plano de falla sugiere que la PKF separa cortezas de naturaleza fundamentalmente diferente.",section_img_url:"data/sections/yang_2025_pkf_crustal_thickness/yang_2025_fig6_swave_pkf.png",section_caption:"Yang et al. (2026), Fig. 6 — Estructura Vs y sismicidad PKF",papers:[{ref:"Yang et al. (2026)",title:"Offshore Crustal Thickness Variation along the Palu-Koro Transcurrente Fault in the Sulawesi region from OBS Receiver Functions",journal:"Prepri. Solid Earth, 17, 453–470. doi:10.5194/se-17-453-2026",find:"Fig. 6: velocidad S y sismos reubicados muestran que la PKF separa corteza oceánica (~8 km) del Mar de Célebes de la corteza continental del brazo norte (~30 km)."}]};
DB['kesumastuti_slab_config']={type:"Tomografía P — Kesumastuti et al. (2025)",color:"#7060b0",title:"Configuración de losas bajo Sulawesi — Tomografía P",tags:["Tomografía P","Slabs múltiples","Celebes","Sula","Sangihe"],desc:"Figura 4 de Kesumastuti et al. (2025): configuración de losas bajo Sulawesi identificada por tomografía P. Muestra tres estructuras de alta velocidad: (H1) Losa del Mar de Célebes (NST, buzante al sur, ~200 km), (H2) Losa Sula propuesta (buzante al norte, ~350-400 km), (H3) Losa Sangihe (buzante al oeste, hasta MTZ). La ausencia de anomalía de alta velocidad W de 122°E descarta la continuidad de la losa Sula propuesta por Hall & Spakman (2015) en esa zona.",section_img_url:"data/sections/kesumastuti_2025_sulawesi_tomo/kesumastuti_2025_fig4_slab_config.png",section_caption:"Kesumastuti et al. (2025), Fig. 4 — Configuración de slabs",papers:[{ref:"Kesumastuti et al. (2025)",title:"Evidence of Multiple Subducting Slabs Beneath Sulawesi From Teleseismic P-Wave Tomography",journal:"JGR: Solid Earth. doi:10.1029/2024JB030009",find:"H1: Celebes losa NST buzante al sur. H2: losa Sula buzante al norte confirmado al E de 122°E. H3: Sangihe losa hasta MTZ. L1: anomalía baja velocidad brazo E (200-500 km)."}]};
// DB — Cao et al. (2024) — Perfiles tomográficos Fig. 1b
const _CAO_PAPER={ref:'Cao et al. (2024)',title:'Mantle Flow Induced by the Interplay of Downgoing Slabs in the North Sulawesi Subduction Zone',journal:'JGR: Solid Earth. doi:10.1029/2023JB028110',find:'Fig. 1b: dos cuerpos de alta Vp (CSS y Sangihe losa) intersectados a ~124°E / ~200 km. Sula losa? con anomalía positiva débil e incierta al N-S (perfil C-D). Anisotropía mantélica y flujo sub-losa discutidos en Fig. 7.'};
DB['cross_section_cao2024_AB']={type:"Perfil Tomográfico W-E",color:"#7060b0",title:"Perfil A-B — Celebes Sea losa + Sangihe losa (W-E, ~0.5°N)",tags:["Tomografía Vp","CSS","Sangihe slab","NST","W-E","0-600 km"],desc:"Sección W-E a 0.5°N (120°–126°E, Fig. 1b izq.) a través del norte de Sulawesi y el arco de Sangihe. Dos cuerpos de alta Vp (azul): el CSS (Losa del Mar de Célebes) subductando hacia el S bajo el NST, y la losa de Sangihe convergiendo desde el E. Ambos se intersectan a ~124°E / ~200 km de profundidad. Sismicidad USGS 1990–2020 (puntos blancos, M>3) delimita los planos de Wadati-Benioff. Modelo UU-P07, anomalía Vp referenciada a IASP91 vía Amaru (2007).",section_img_url:"data/sections/cao_2024_sula_mantle/cao_2024_fig1_map_sections.png",section_caption:"Cao et al. (2024), Fig. 1b (izq.) — Perfil A-B W-E: CSS y Sangihe slab intersectados a ~124°E",papers:[_CAO_PAPER]};
DB['cross_section_cao2024_CD']={type:"Perfil Tomográfico N-S",color:"#7060b0",title:"Perfil C-D — Celebes Sea losa + losa Sula? (N-S, ~124°E)",tags:["Tomografía Vp","CSS","Sula slab","N-S","0-600 km","Incertidumbre"],desc:"Sección N-S a ~124°E (2°S–2°N, Fig. 1b der.) a través del Mar de Molucas y el arco de Sangihe. Cuerpo Vp+ bien definido (CSS, líneas continuas). Anomalía positiva más débil e incierta al S marcada como 'losa Sula?' (líneas discontinuas). La incertidumbre es inherente al modelo UU-P07 (~100 km resolución): no permite distinguir si el cuerpo Vp+ corresponde a losa subductante discreto o a heterogeneidad litosférica relicta. Circularidad potencial: UU-P07 = Hall & Spakman (2015).",section_img_url:"data/sections/cao_2024_sula_mantle/cao_2024_fig1_map_sections.bak.png",section_caption:"Cao et al. (2024), Fig. 1b (der.) — Perfil C-D N-S: CSS y Sula slab? (incierto)",papers:[_CAO_PAPER]};
// DB — Supendi et al. (2024) — Perfiles tomográficos Fig. 3
const _SUPENDI_PAPER={ref:"Supendi et al. (2024)",title:"Subducting slabs beneath Sulawesi Island, Indonesia from P-wave travel-time tomography",journal:"Physics of the Earth and Planetary Interiors, 357, 107320. doi:10.1016/j.pepi.2024.107320",find:"Tomografía Vp regional. Tres perfiles verticales (A-B, C-D, E-F) muestran losas de Sangihe, Halmahera y Célebes a profundidades 0–350 km."};
DB['cross_section_supendi2024_AB']={type:"Perfil Tomográfico E-W",color:"#7060b0",title:"Perfil A-B — Sangihe + Halmahera losas (E-W, ~1.5°N)",tags:["Vp tomografía","Sangihe slab","Halmahera slab","MSCP","E-W"],desc:"Perfil E-W a ~1.5°N a través del Mar de Molucas. Muestra la doble subducción asimétrica: Sangihe losa buzante al W, Halmahera losa buzante al E, MSCP entre ambos. Profundidades 0–350 km.",section_img_url:"data/sections/supendi_2024_sulawesi_tomo/supendi_2024_fig3_perfil_AB_sangihe_halmahera_EW.png",section_caption:"Supendi et al. (2024), Fig. 3A-B — Slabs Sangihe y Halmahera",papers:[_SUPENDI_PAPER]};
DB['cross_section_supendi2024_CD']={type:"Perfil Tomográfico E-W",color:"#7060b0",title:"Perfil C-D — Sangihe losa sur + Colo volcano (E-W, ~0°N)",tags:["Vp tomografía","Sangihe slab","Colo","E-W","Incertidumbre"],desc:"Perfil E-W a ~0°N. Sangihe losa buzante al W con anomalía positiva Vp. Colo volcano (Una-Una) marcado con triángulo rojo. Sismicidad dispersa en el manto superior. Área de interrogante indica geometría incierta de la losa.",section_img_url:"data/sections/supendi_2024_sulawesi_tomo/supendi_2024_fig3_perfil_CD_sangihe_EW.png",section_caption:"Supendi et al. (2024), Fig. 3C-D — Sangihe slab sur",papers:[_SUPENDI_PAPER]};
DB['cross_section_supendi2024_EF']={type:"Perfil Tomográfico N-S",color:"#7060b0",title:"Perfil E-F — Celebes losa (N-S, ~124.5°E)",tags:["Vp tomografía","Celebes slab","N-S","0–300 km"],desc:"Perfil N-S a ~124.5°E. Célebes losa buzante al S bajo el brazo norte de Sulawesi (anomalía positiva Vp marcada). Interrogante indica límite inferior incierto. Colo volcano al norte. Profundidades 0–300 km.",section_img_url:"data/sections/supendi_2024_sulawesi_tomo/supendi_2024_fig3_perfil_EF_celebes_NS.png",section_caption:"Supendi et al. (2024), Fig. 3E-F — Celebes slab N-S",papers:[_SUPENDI_PAPER]};
DB['nst_seismic_gap']={type:"Zona de Hazard Sísmico",color:"#ffaa00",title:"Seismic Gap NST (121°-121.7°E)",tags:["Seismic gap","NST","Hazard potencial"],desc:"Zona de baja sismicidad interplaca en el centro del NST. Interpretación abierta: bajo acoplamiento, slow-slip, o potencial futuro.",papers:[{ref:"Serhalawan & Chen (2024)",title:"Seismotectonics of Sulawesi",journal:"Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366",find:"Seismic gap 121°-121.7°E: sin terremotos interplacas Mw≥6.5. Comparado con Shumagin Gap y Guerrero Gap. Estudios geodésicos necesarios."}]};

// HELPERS
const fromLL = c => ol.proj.transform(c,'EPSG:4326','EPSG:3857');
const toLL   = c => ol.proj.transform(c,'EPSG:3857','EPSG:4326');
const lc     = cs => cs.map(c => fromLL(c));

function slabColor(d){
  const t=Math.min(d/600,1);
  if(t<0.25){const s=t/0.25;return`rgb(0,${Math.round(207*(1-s)+255*s)},${Math.round(255*(1-s)+136*s)})`;}
  if(t<0.5) {const s=(t-0.25)/0.25;return`rgb(${Math.round(255*s)},255,${Math.round(136*(1-s))})`; }
  if(t<0.75){const s=(t-0.5)/0.25;return`rgb(255,${Math.round(255*(1-s)+136*s)},0)`;}
  const s=(t-0.75)/0.25;return`rgb(255,${Math.round(136*(1-s))},0)`;
}

function faultType(rake){
  let r=rake;
  if(r>180)r-=360;if(r<-180)r+=360;
  if(45<=r&&r<=135)return'T';
  if(-135<=r&&r<=-45)return'N';
  if((-30<=r&&r<=30)||r>=150||r<=-150)return'S';
  return'O';
}

function depthColor(de){
  if(de<33) return'rgba(255,221,44,0.92)';
  if(de<70) return'rgba(228,120,32,0.92)';
  if(de<150)return'rgba(40,180,96,0.92)';
  if(de<300)return'rgba(48,136,220,0.92)';
  return'rgba(170,68,200,0.92)';
}
function depthColorArr(de){
  if(de<33) return[255,221,44,0.92];
  if(de<70) return[228,120,32,0.92];
  if(de<150)return[40,180,96,0.92];
  if(de<300)return[48,136,220,0.92];
  return[170,68,200,0.92];
}
function depthHex(de){
  if(de<33) return'#ffdd2c';
  if(de<70) return'#e47820';
  if(de<150)return'#28b460';
  if(de<300)return'#3088dc';
  return'#aa44c8';
}

// IUGS SYMBOLOGY — FGDC Standard (Section 2.6 transcurrente, 2.8 thrust)
// Transcurrente: paired arrows ON the fault trace (not offset)
// Thrust/Subduction: filled sawteeth on upper plate
// Arrow size and spacing scale with resolution (zoom)

const KEY_FAULTS={
  'palu_koro':  {sym:'sinistral',color:'#ff9f3f',width:2.5},
  'matano_w':   {sym:'sinistral',color:'#ffe04f',width:2.0},
  'matano_e':   {sym:'sinistral',color:'#ffe04f',width:2.0},
  'sorong_main':{sym:'sinistral',color:'#ff9f3f',width:2.0},
  'sorong_s':   {sym:'sinistral',color:'#ff9f3f',width:1.8},
  'gorontalo':  {sym:'dextral',  color:'#ffe04f',width:1.8},
  'tolo_thrust':{sym:'thrust',   color:'#c84070',width:2.0},
};
const KEY_IDS=new Set(Object.keys(KEY_FAULTS));

// ── SAWTOOTH — filled triangle perpendicular to segment
// p1, p2: segment endpoints in map coords
// size: triangle height in map units
// flip: which side (hanging wall)
function toothPolygon(p1, p2, size, flip) {
  const dx=p2[0]-p1[0], dy=p2[1]-p1[1];
  const len=Math.sqrt(dx*dx+dy*dy);
  if(len<1) return null;
  const tx=dx/len, ty=dy/len;
  const sg=flip?1:-1;
  const nx=sg*(-ty), ny=sg*(tx);
  const mx=(p1[0]+p2[0])/2, my=(p1[1]+p2[1])/2;
  const tip=[mx+nx*size, my+ny*size];
  const b1=[mx+tx*size*0.6, my+ty*size*0.6];
  const b2=[mx-tx*size*0.6, my-ty*size*0.6];
  return [b1,tip,b2,b1];
}

// ── NORMAL FAULT HACHURES — IUGS FGDC standard
// Short perpendicular ticks on the downthrown (hanging wall) side, at regular intervals.
function normalTicks(coords, resolution, flip) {
  const styles  = [];
  const tickLen = resolution * 9;
  const spacing = resolution * 50;
  const arc = [0];
  for (let i = 1; i < coords.length; i++) {
    const dx = coords[i][0]-coords[i-1][0], dy = coords[i][1]-coords[i-1][1];
    arc.push(arc[i-1] + Math.hypot(dx, dy));
  }
  const total = arc[arc.length-1];
  if (total < spacing * 0.5) {
    // At least one tick at midpoint for short faults
    const mid = total * 0.5;
    let seg = coords.length - 2;
    for (let i = 1; i < arc.length; i++) { if (arc[i] >= mid) { seg = i-1; break; } }
    const segLen = arc[seg+1] - arc[seg];
    if (segLen < 1) return styles;
    const t = (mid - arc[seg]) / segLen;
    const px = coords[seg][0] + t*(coords[seg+1][0]-coords[seg][0]);
    const py = coords[seg][1] + t*(coords[seg+1][1]-coords[seg][1]);
    const ddx = coords[seg+1][0]-coords[seg][0], ddy = coords[seg+1][1]-coords[seg][1];
    const sg = flip ? -1 : 1;
    const nx = sg*(ddy/segLen), ny = sg*(-ddx/segLen);
    styles.push(new ol.style.Style({
      geometry: new ol.geom.LineString([[px,py],[px+nx*tickLen,py+ny*tickLen]]),
      stroke: new ol.style.Stroke({color:'rgba(0,0,0,0.85)', width:1.6})
    }));
    return styles;
  }
  const nTicks = Math.max(1, Math.round(total / spacing));
  for (let g = 0; g < nTicks; g++) {
    const target = total * (g + 0.5) / nTicks;
    let seg = coords.length - 2;
    for (let i = 1; i < arc.length; i++) { if (arc[i] >= target) { seg = i-1; break; } }
    const segLen = arc[seg+1] - arc[seg];
    if (segLen < 1) continue;
    const t = (target - arc[seg]) / segLen;
    const px = coords[seg][0] + t*(coords[seg+1][0]-coords[seg][0]);
    const py = coords[seg][1] + t*(coords[seg+1][1]-coords[seg][1]);
    const ddx = coords[seg+1][0]-coords[seg][0], ddy = coords[seg+1][1]-coords[seg][1];
    const sg = flip ? -1 : 1;
    const nx = sg*(ddy/segLen), ny = sg*(-ddx/segLen);
    styles.push(new ol.style.Style({
      geometry: new ol.geom.LineString([[px,py],[px+nx*tickLen,py+ny*tickLen]]),
      stroke: new ol.style.Stroke({color:'rgba(0,0,0,0.85)', width:1.6})
    }));
  }
  return styles;
}

// ── TRANSCURRENTE HALF-ARROW — IUGS standard
// Arrows placed at regular intervals along total arc length (not per-segment).
// Each position: two half-arrows (shaft + single outer barb), one per side.
// Sinistral: left block backward, right block forward.
// Dextral:   left block forward, right block backward.
function strikeslipArrows(coords, resolution, sinistral) {
  const styles  = [];
  const shaftH  = resolution * 8;        // half-shaft length (~16 px total)
  const barbLen = resolution * 5;        // barb length
  const barbA   = 35 * Math.PI / 180;   // barb angle from shaft
  const sideOff = resolution * 4;       // perpendicular offset from fault
  const spacing = resolution * 55;      // distance between arrow groups

  // Cumulative arc length at each vertex
  const arc = [0];
  for (let i = 1; i < coords.length; i++) {
    const dx = coords[i][0]-coords[i-1][0], dy = coords[i][1]-coords[i-1][1];
    arc.push(arc[i-1] + Math.hypot(dx, dy));
  }
  const total = arc[arc.length-1];
  if (total < spacing * 0.5) return styles;

  const nGroups = Math.max(1, Math.round(total / spacing));

  for (let g = 0; g < nGroups; g++) {
    const target = total * (g + 0.5) / nGroups;

    // Find segment index that contains this arc position
    let seg = coords.length - 2;
    for (let i = 1; i < arc.length; i++) {
      if (arc[i] >= target) { seg = i - 1; break; }
    }

    const segLen = arc[seg+1] - arc[seg];
    if (segLen < 1) continue;
    const t  = (target - arc[seg]) / segLen;
    const px = coords[seg][0] + t * (coords[seg+1][0] - coords[seg][0]);
    const py = coords[seg][1] + t * (coords[seg+1][1] - coords[seg][1]);

    const ddx = coords[seg+1][0] - coords[seg][0];
    const ddy = coords[seg+1][1] - coords[seg][1];
    const tx = ddx / segLen, ty = ddy / segLen;
    const nx = -ty, ny = tx;

    for (const [sideSign, movDir] of [[1, sinistral?-1:1], [-1, sinistral?1:-1]]) {
      const ax = px + nx * sideOff * sideSign;
      const ay = py + ny * sideOff * sideSign;
      const tailX = ax - tx * shaftH * movDir;
      const tailY = ay - ty * shaftH * movDir;
      const tipX  = ax + tx * shaftH * movDir;
      const tipY  = ay + ty * shaftH * movDir;

      // Shaft
      styles.push(new ol.style.Style({
        geometry: new ol.geom.LineString([[tailX,tailY],[tipX,tipY]]),
        stroke: new ol.style.Stroke({color:'rgba(0,0,0,0.85)', width:1.4})
      }));

      // Single outer barb (half-arrow)
      const bx = tipX - tx*movDir*barbLen*Math.cos(barbA) + nx*sideSign*barbLen*Math.sin(barbA);
      const by = tipY - ty*movDir*barbLen*Math.cos(barbA) + ny*sideSign*barbLen*Math.sin(barbA);
      styles.push(new ol.style.Style({
        geometry: new ol.geom.LineString([[tipX,tipY],[bx,by]]),
        stroke: new ol.style.Stroke({color:'rgba(0,0,0,0.85)', width:1.4})
      }));
    }
  }
  return styles;
}

// ── SUBDUCTION STYLE — line + filled sawteeth
function subductionStyle(feature, resolution) {
  const _fid=feature.get('fault_id')||feature.get('feat_id')||'';
  if(COVERED_BY_CANON.has(_fid)) return [];
  const coords=feature.getGeometry().getCoordinates();
  const styles=[new ol.style.Style({
    geometry:feature.getGeometry(),
    stroke:new ol.style.Stroke({color:'#111',width:3,lineCap:'round'})
  })];
  const firstLL=ol.proj.transform(coords[0],'EPSG:3857','EPSG:4326');
  const lastLL=ol.proj.transform(coords[coords.length-1],'EPSG:3857','EPSG:4326');
  const flipProp=feature.get('sub_flip');
  const flip=flipProp!=null?flipProp:(firstLL[1]>-2&&Math.abs(lastLL[0]-firstLL[0])>Math.abs(lastLL[1]-firstLL[1])*0.5);
  const sz=resolution*13;
  const step=Math.max(2,Math.round(coords.length/8));
  for(let i=0;i<coords.length-1;i+=step){
    const poly=toothPolygon(coords[i],coords[i+1],sz,flip);
    if(poly)styles.push(new ol.style.Style({
      geometry:new ol.geom.Polygon([poly]),
      fill:new ol.style.Fill({color:'#111'}),
      stroke:new ol.style.Stroke({color:'#111',width:0.5})
    }));
  }
  return styles;
}

// ── KEY FAULT STYLE — transcurrente arrows ON trace, thrust sawteeth
function keyFaultStyle(feature, resolution) {
  const id=feature.get('fault_id');
  if(COVERED_BY_CANON.has(id)) return [];
  const cfg=KEY_FAULTS[id];
  if(!cfg) return [];
  const coords=feature.getGeometry().getCoordinates();
  const styles=[new ol.style.Style({
    geometry:feature.getGeometry(),
    stroke:new ol.style.Stroke({color:'#111',width:cfg.width,lineCap:'round'})
  })];
  if(cfg.sym==='sinistral') {
    styles.push(...strikeslipArrows(coords, resolution, true));
  } else if(cfg.sym==='dextral') {
    styles.push(...strikeslipArrows(coords, resolution, false));
  } else if(cfg.sym==='thrust') {
    const sz=resolution*7;
    const step=Math.max(2,Math.round(coords.length/5));
    for(let i=0;i<coords.length-1;i+=step){
      const poly=toothPolygon(coords[i],coords[i+1],sz,false);
      if(poly)styles.push(new ol.style.Style({
        geometry:new ol.geom.Polygon([poly]),
        fill:new ol.style.Fill({color:'rgba(0,0,0,0)'}),
        stroke:new ol.style.Stroke({color:'#111',width:1.2})
      }));
    }
  }
  return styles;
}

// ── NEW FAULT STYLE (same functions, different params)
function newFaultStyleFn(feature, resolution) {
  if(COVERED_BY_CANON.has(feature.get('feat_id')||'')) return [];
  const sym=feature.get('sym')||'strikeslip';
  const width=feature.get('fault_width')||1.8;
  const flip=feature.get('fault_flip')||false;
  const coords=feature.getGeometry().getCoordinates();
  const styles=[new ol.style.Style({
    geometry:feature.getGeometry(),
    stroke:new ol.style.Stroke({color:'#111',width,lineCap:'round'})
  })];
  if(sym==='thrust'){
    const sz=resolution*7;
    const step=Math.max(1,Math.round(coords.length/4));
    for(let i=0;i<coords.length-1;i+=step){
      const poly=toothPolygon(coords[i],coords[i+1],sz,flip);
      if(poly)styles.push(new ol.style.Style({
        geometry:new ol.geom.Polygon([poly]),
        fill:new ol.style.Fill({color:'rgba(0,0,0,0)'}),
        stroke:new ol.style.Stroke({color:'#111',width:1.2})
      }));
    }
  } else if(sym==='sinistral'){
    styles.push(...strikeslipArrows(coords, resolution, true));
  } else if(sym==='dextral'){
    styles.push(...strikeslipArrows(coords, resolution, false));
  } else if(sym==='normal'){
    styles.push(...normalTicks(coords, resolution, flip));
  }
  return styles;
}

// LAYERS
const esriSat=new ol.layer.Tile({source:new ol.source.XYZ({url:'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2021_3857/default/GoogleMapsCompatible/{z}/{y}/{x}.jpg',maxZoom:14,attributions:'Sentinel-2 cloudless 2021 © EOX IT Services GmbH (CC BY 4.0)'})});

const gebcoColor=new ol.layer.Tile({visible:false,opacity:0.7,source:new ol.source.TileWMS({url:'https://wms.gebco.net/2024/mapserv?',params:{'LAYERS':'GEBCO_2024_2','VERSION':'1.3.0','FORMAT':'image/png'},attributions:'GEBCO 2024'})});
const openTopoLayer=new ol.layer.Tile({visible:false,source:new ol.source.XYZ({urls:['https://a.tile.opentopomap.org/{z}/{x}/{y}.png','https://b.tile.opentopomap.org/{z}/{x}/{y}.png','https://c.tile.opentopomap.org/{z}/{x}/{y}.png'],maxZoom:17,attributions:'© <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, SRTM | © <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'})});
const esriHybridBase=new ol.layer.Tile({visible:false,source:new ol.source.XYZ({url:'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',maxZoom:18,attributions:'Esri, Maxar, Earthstar Geographics'})});
const esriHybridLabels=new ol.layer.Tile({visible:false,zIndex:15,source:new ol.source.XYZ({url:'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',maxZoom:18,attributions:'Esri'})});
const gravExtent=ol.proj.transformExtent([104.975,-15.025,140.025,15.025],'EPSG:4326','EPSG:3857');
const gravBouguerLayer=new ol.layer.Image({visible:false,opacity:0.65,source:new ol.source.ImageStatic({url:'fuentes/grav_bouguer.png',imageExtent:gravExtent,projection:'EPSG:3857'})});
const gravFreeairLayer=new ol.layer.Image({visible:false,opacity:0.65,source:new ol.source.ImageStatic({url:'fuentes/grav_freeair.png',imageExtent:gravExtent,projection:'EPSG:3857'})});
const heightAnomExtent=ol.proj.transformExtent([90,-11,147.5,20],'EPSG:4326','EPSG:3857');
const heightAnomLayer=new ol.layer.Image({visible:false,opacity:0.70,zIndex:18,source:new ol.source.ImageStatic({url:'fuentes/height_anomaly.png?v=inageoid2020d',imageExtent:heightAnomExtent,projection:'EPSG:3857'})});

// ── CAPAS DE REFERENCIA (verificación de posicionamiento) ────────────────────
// Extents aproximados — pueden ajustarse si la superposición no coincide exactamente
function makeRefLayer(url, extent_4326, opacity=0.45){
  const ext = ol.proj.transformExtent(extent_4326, 'EPSG:4326', 'EPSG:3857');
  return new ol.layer.Image({
    visible:false, opacity, zIndex:22,
    source:new ol.source.ImageStatic({url, imageExtent:ext, projection:'EPSG:3857'})
  });
}
// Extents default — se sobreescriben con localStorage si hay guardados
const _REF_DEFAULTS = {
  // S1
  ref_baillie:      [117.8851, -8.3742, 125.6029,  3.0742],
  ref_socquet:      [114.2473, -8.9567, 128.6527,  6.9567],
  ref_walpersdorf:  [118.0,    -2.0,    128.0,     4.0   ],
  ref_satyana_ipa:  [117.0,    -7.0,    131.0,     5.0   ],
  ref_satyana_iagi: [113.0,    -7.0,    131.0,     5.0   ],
  ref_surono:       [119.0,    -5.0,    130.0,     3.0   ],
  // S2
  ref_serhalawan:   [117.4558, -7.3561, 130.4442,  9.4561],
  ref_cipta:        [117.0,    -7.0,    131.0,     5.0   ],
  ref_jibran:       [117.0,    -7.0,    131.0,     5.0   ],
  ref_nataw:        [119.1847, -1.4878, 120.7513,  0.3878],
  ref_nataw_inland: [119.6255, -2.1349, 120.7885, -0.5871],
  ref_nataw2020:    [118.0,    -4.0,    122.0,     3.0   ],
  ref_greenfield:   [119.0,    -2.0,    128.0,     4.0   ],
  ref_jayadi:       [118.0,    -3.0,    122.0,     3.0   ],
  // S3
  ref_hua:          [117.0,   -12.0,   135.0,    15.0   ],
  ref_cao:          [105.0,   -12.0,    140.0,    15.0   ],
  ref_yuan:         [118.0,    -5.0,    136.0,     8.0   ],
  ref_heryandoko:   [117.0,    -6.0,    130.0,     5.0   ],
  ref_sup_010:      [114.9562, -11.3174, 130.1438,  6.8174],
  ref_sup_020:      [114.831,  -11.327,  130.169,   6.857 ],
  ref_sup_040:      [114.7962, -11.2981, 130.1038,  6.7981],
  ref_sup_060:      [114.8566, -12.0981, 130.1714,  5.9981],
  ref_sup_080:      [114.8305, -12.037,  130.1655,  5.935 ],
  ref_sup_100:      [114.791,  -12.1292, 130.027,   5.9892],
  ref_sup_120:      [114.8994, -12.8929, 130.1006,  5.1929],
  ref_sup_150:      [114.9267, -12.8685, 130.0733,  5.1685],
  ref_sup_200:      [114.7994, -12.9755, 130.0006,  5.1755],
  ref_yuan_100:     [112.923, -12.377, 130.847,  10.956],
  ref_yuan_200:     [112.923, -12.377, 130.847,  10.956],
  ref_yuan_300:     [112.923, -12.377, 130.847,  10.956],
  ref_yuan_400:     [112.923, -12.377, 130.847,  10.956],
  ref_yuan_500:     [112.923, -12.377, 130.847,  10.956],
  ref_yuan_600:     [112.923, -12.377, 130.847,  10.956],
  ref_liu:          [ 95.0,   -15.0,    145.0,    10.0   ],
  ref_dileo:        [ 88.0,   -12.0,   143.0,    11.0   ],
  ref_lestari:      [112.0,    -5.0,    127.0,     5.0   ],
  // S4
  ref_shih:         [117.0,    -6.0,    131.0,     5.0   ],
  // S5
  ref_pratama:      [116.0,    -7.0,    129.0,     5.0   ],
  ref_cpd_pratama:  [117.5,    -5.7,    127.5,     2.0   ],
  // S6
  ref_lukman:       [119.5,    -4.5,    126.0,    -0.5   ],
};
(function mergeLS(){
  try{const s=JSON.parse(localStorage.getItem('sulawesi_georef_extents_v1')||'{}');
    for(const[k,v] of Object.entries(s))if(_REF_DEFAULTS[k])_REF_DEFAULTS[k]=v;}catch(e){}
})();
const D = _REF_DEFAULTS;  // alias corto
// S1
const refBaillieLayer     = makeRefLayer('data/sections/baillie_2022_sulawesi/baillie_2022_fig2_geo_map.png',                 D.ref_baillie);
const refSocquetLayer     = makeRefLayer('data/sections/socquet_2006_gps_kinematics/socquet_2006_fig1_tectonic.png',          D.ref_socquet);
const refWalpersdorfLayer = makeRefLayer('data/sections/walpersdorf_1998_n_sulawesi_gps/walpersdorf_1998_n_sulawesi_gps_fig1_map.png', D.ref_walpersdorf);
const refSatyanaIpaLayer  = makeRefLayer('data/sections/satyana_2011_ipa_collision/satyana_2011_ipa_collision_fig1_map.png',  D.ref_satyana_ipa);
const refSatyanaIagiLayer = makeRefLayer('data/sections/satyana_2011_iagi_evolution/satyana_2011_iagi_evolution_fig2_structural_map.png', D.ref_satyana_iagi);
const refSuronoLayer      = makeRefLayer('data/sections/surono_2012_tectonoestratigrafia/surono_2012_tectonoestratigrafia_fig1_map.png', D.ref_surono);
// S2
const refSerhalawanLayer  = makeRefLayer('data/sections/serhalawan_chen_2024/serhalawan_2024_fig1b_sulawesi.png',             D.ref_serhalawan);
const refCiptaLayer       = makeRefLayer('data/sections/cipta_2016_sulawesi_psha/cipta_2016_sulawesi_psha_fig1_map.png',      D.ref_cipta);
const refJibranLayer      = makeRefLayer('data/sections/jibran_2025_sulawesi_tectonic_regimes/jibran_2025_sulawesi_tectonic_regimes_fig1_map.png', D.ref_jibran);
const refNatawLayer       = makeRefLayer('data/sections/natawidjaja_2021_pkf_lidar/natawidjaja_2021_fig3_fault_map.png',      D.ref_nataw);
const refNatawInlandLayer = makeRefLayer('data/sections/natawidjaja_2021_pkf_lidar/natawidjaja_2021_fig6_inland.png',         D.ref_nataw_inland);
const refNataw2020Layer   = makeRefLayer('data/sections/natawidjaja_2020_palu_rupture/natawidjaja_2020_palu_rupture_fig1_map.png', D.ref_nataw2020);
const refGreenfieldLayer  = makeRefLayer('data/sections/greenfield_2021_n_sulawesi_megathrust/greenfield_2021_n_sulawesi_megathrust_fig1_map.png', D.ref_greenfield);
const refJayadiLayer      = makeRefLayer('data/sections/jayadi_2023_pkf_tomo/jayadi_2023_pkf_tomo_fig1_map.png',              D.ref_jayadi);
// S3
const refHuaLayer         = makeRefLayer('data/sections/hua2023_banda_sulawesi/hua_panel_a_2005x824.png',                    D.ref_hua);
const refCaoLayer         = makeRefLayer('data/sections/cao_2024_sula_mantle/cao_2024_sula_mantle_fig1_map.png',              D.ref_cao);
const refYuanLayer        = makeRefLayer('data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_molucca_mantle_flow_fig1_map.png', D.ref_yuan);
const refHeryandokoLayer  = makeRefLayer('data/sections/heryandoko_2024_ant_crustal/heryandoko_2024_ant_crustal_fig1_map.png', D.ref_heryandoko);
const refSup010Layer = makeRefLayer('data/sections/supendi_2024_sulawesi_tomo/slice_010km.webp', D.ref_sup_010);
const refSup020Layer = makeRefLayer('data/sections/supendi_2024_sulawesi_tomo/slice_020km.webp', D.ref_sup_020);
const refSup040Layer = makeRefLayer('data/sections/supendi_2024_sulawesi_tomo/slice_040km.webp', D.ref_sup_040);
const refSup060Layer = makeRefLayer('data/sections/supendi_2024_sulawesi_tomo/slice_060km.webp', D.ref_sup_060);
const refSup080Layer = makeRefLayer('data/sections/supendi_2024_sulawesi_tomo/slice_080km.webp', D.ref_sup_080);
const refSup100Layer = makeRefLayer('data/sections/supendi_2024_sulawesi_tomo/slice_100km.webp', D.ref_sup_100);
const refSup120Layer = makeRefLayer('data/sections/supendi_2024_sulawesi_tomo/slice_120km.webp', D.ref_sup_120);
const refSup150Layer = makeRefLayer('data/sections/supendi_2024_sulawesi_tomo/slice_150km.webp', D.ref_sup_150);
const refSup200Layer = makeRefLayer('data/sections/supendi_2024_sulawesi_tomo/slice_200km.webp', D.ref_sup_200);
const refYuanAnis100Layer = makeRefLayer('data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_100km.webp', D.ref_yuan_100);
const refYuanAnis200Layer = makeRefLayer('data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_200km.webp', D.ref_yuan_200);
const refYuanAnis300Layer = makeRefLayer('data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_300km.webp', D.ref_yuan_300);
const refYuanAnis400Layer = makeRefLayer('data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_400km.webp', D.ref_yuan_400);
const refYuanAnis500Layer = makeRefLayer('data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_500km.webp', D.ref_yuan_500);
const refYuanAnis600Layer = makeRefLayer('data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_600km.webp', D.ref_yuan_600);
const refLiuLayer         = makeRefLayer('data/sections/liu_2026_indonesia_swave_tomo/liu_2026_indonesia_swave_tomo_fig1_map.png', D.ref_liu);
const refDileoLayer       = makeRefLayer('data/sections/di_leo_2012_indonesia_mantle/dileo_fig1_map_crop.png',                  D.ref_dileo);
const refLestariLayer     = makeRefLayer('data/sections/lestari_2021_pwave_tomo/lestari_2021_pwave_tomo_fig1_map.png',       D.ref_lestari);
// S4
const refShihLayer        = makeRefLayer('data/sections/shih_2026_geoid_sulawesi/shih_2026_geoid_sulawesi_fig1_map.png',     D.ref_shih);
// S5
const refPratamaLayer     = makeRefLayer('data/sections/pratama_2025_pfa_geothermal/pratama_2025_pfa_geothermal_fig1_map.png', D.ref_pratama);
// S6
const refLukmanLayer      = makeRefLayer('data/sections/lukman_2016_matano/lukman_2016_fig1_map.png',                        D.ref_lukman);

// slabLayer — carga lazy desde fuentes/slab2_contours.json al activar la capa
const slabSource=new ol.source.Vector();
const slabLayer=new ol.layer.Vector({
  visible:false,
  source:slabSource,
  style:f=>new ol.style.Style({stroke:new ol.style.Stroke({color:slabColor(f.get('slab_depth')),width:f.get('slab_depth')<=100?1.8:1.1})})
});
let slabLoaded=false;
function loadSlabs(){
  if(slabLoaded)return;
  slabLoaded=true;
  fetch('fuentes/slab2_contours.json')
    .then(r=>r.json())
    .then(data=>{
      slabSource.addFeatures(data.map(s=>{
        const f=new ol.Feature({geometry:new ol.geom.LineString(lc(s.c)),feat_id:s.r,slab_region:s.r,slab_depth:s.d,feat_type:'losa'});
        return f;
      }));
    }).catch(()=>{slabLoaded=false;});
}

// ── GEM Halmahera Subduction_Thrust (f7-f16) reemplazados por traza de f116 dextral
const HALM_GEM_IDS=new Set(['f7','f8','f9','f10','f11','f12','f13','f14','f15','f16']);
// f116 dextral GEM — costa occidental de Halmahera = frente de subducción hacia el ESTE
const HALM_SUB_COORDS=[[127.149,-0.995],[126.845,-0.489],[126.819,-0.256],[126.772,0.053],[126.772,0.251],[126.845,0.406],[126.892,0.704],[127.005,1.176],[127.195,1.6],[127.376,1.838],[127.422,2.017],[127.517,2.344],[127.588,2.578],[127.588,3.117],[127.634,3.227],[127.563,3.522],[127.493,3.884],[127.422,4.391],[127.447,4.706],[127.493,5.107],[127.563,5.449]];

// ── GEM Sangihe Subduction features reemplazados por traza de f115 (costa E del arco Sangihe)
// f17,f18,f37,f81-f82,f103-f106 tienen dirección de triángulos inconsistente; se unifica en traza f115
const SANG_GEM_IDS=new Set(['f17','f18','f37','f81','f82','f103','f104','f105','f106']);
// f115 "halmahera_arc_faults" GEM — costa oriental del arco Sangihe = frente de subducción hacia el OESTE
// sub_flip:true fuerza triángulos apuntando OESTE (placa superior = Sangihe, al oeste)
const SANGIHE_SUB_COORDS=[[124.876,0.297],[125.055,0.52],[125.28,0.856],[125.498,1.13],[125.59,1.553],[125.682,1.814],[125.75,2.298],[125.842,2.485],[125.888,2.578],[125.888,2.911],[125.98,3.071],[126.16,3.429],[126.325,3.755],[126.473,4.131],[126.583,4.437],[126.629,5.2]];
// f27-f36: GEM Subduction_Thrust en el área SE de Sulawesi (lat -2 a -5°, lon 122-126°) — clasificados
//   erróneamente en el catálogo; no corresponden a Cotabato ni a ningún frente de subducción activo
//   en el área de estudio. f40-f43: MST en el Makassar Strait → cubiertos por new_faults mst_*.
const COTABATO_GEM_IDS=new Set(['f27','f28','f29','f30','f31','f32','f33','f34','f35','f36','f40','f41','f42','f43']);

// ── DEDUPLICACIÓN — IDs de NEW_FAULTS que duplican estructuras ya representadas en tectSubLayer
// Método: selección por fuente más autoritativa (catálogo GEM > paper regional).
// La traza canónica se mantiene en tectSubLayer; la cita del paper duplicado pasa al panel.
// Para casos con trazas superpuestas de igual jerarquía: mergeTraces() (interpolación por longitud de arco normalizada).
const DEDUP_HIDDEN=new Set(['mst_north']);

// Promedia dos trazas [lon,lat][] de igual estructura usando interpolación lineal por longitud de arco normalizada.
// Usar cuando ambas fuentes tienen autoridad equivalente y las trazas se solapan geográficamente.
function mergeTraces(a,b,wA=0.5){
  function arcParam(c){const d=[0];for(let i=1;i<c.length;i++){const dx=c[i][0]-c[i-1][0],dy=c[i][1]-c[i-1][1];d.push(d[i-1]+Math.sqrt(dx*dx+dy*dy));}const tot=d[d.length-1];return d.map(v=>v/tot);}
  function sample(c,t){const p=arcParam(c);for(let i=1;i<p.length;i++){if(t<=p[i]){const r=(t-p[i-1])/(p[i]-p[i-1]);return[c[i-1][0]+r*(c[i][0]-c[i-1][0]),c[i-1][1]+r*(c[i][1]-c[i-1][1])];}}return c[c.length-1];}
  const N=Math.max(a.length,b.length,10);
  return Array.from({length:N},(_,k)=>{const t=k/(N-1);const pa=sample(a,t),pb=sample(b,t);return[wA*pa[0]+(1-wA)*pb[0],wA*pa[1]+(1-wA)*pb[1]];});
}

function getSubzone(id,lon,lat){
  if(id==='halm_custom') return 'halmahera';
  if(id==='sang_custom') return 'sangihe';
  if(lat>4)              return 'philippines';
  if(lat>-0.6&&lat<3.5&&lon<124.5) return 'nst';
  if(lat>-0.6&&lat<3.5&&lon<127.5) return 'sangihe';
  if(lat>-5&&lat<-1&&lon>=127)     return 'banda_n';
  if(lat<-6)                        return 'sunda';
  return 'generic';
}

const SUBZONE_INFO={
  nst:{name:'Subducción de la Placa del Mar de Célebes — Norte de Sulawesi',subducting:'Litósfera oceánica del Mar de Célebes',overriding:'Brazo Norte de Sulawesi (placa Euroasiática)',direction:'hacia el sur-suroeste',desc:'La litósfera oceánica del Mar de Célebes subduce hacia el sur bajo el Brazo Norte de Sulawesi a lo largo del Surco Norte de Sulawesi (NST). Inicio estimado en ~8-9 Ma. La traza occidental del NST se interrumpe en la continuación costa afuera de la Falla Palu-Koro. La subducción genera la actividad sísmica del Brazo Norte y el volcanismo del arco de Sulawesi. La zona de acoplamiento presenta un gap sísmico central (121–121.7°E) documentado por Serhalawan & Chen (2024).',papers:[{ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'NST: zona de convergencia entre la litósfera oceánica del Mar de Célebes y el bloque North Sulawesi. Gap sísmico central documentado. Tasa de convergencia ~45 mm/año.'},{ref:'Greenfield et al. (2021)',title:'Seismicity and Seismic Structure of the Northern Sulawesi Subduction Zone',journal:'JGR: Solid Earth. doi:10.1029/2020JB020997',find:'Geometría de la losa del Mar de Célebes bajo el NST. Deformación interna de la losa y acoplamiento variable a lo largo de la trinchera.'}]},
  sangihe:{name:'Subducción de Sangihe',subducting:'Litósfera oceánica del Mar de Molucas',overriding:'Arco de Sangihe / Norte de Sulawesi (placa Euroasiática)',direction:'hacia el oeste-noroeste',desc:'El Mar de Molucas —atrapado entre los arcos opuestos de Sangihe y Halmahera— subduce hacia el OESTE bajo el Arco de Sangihe y el norte de Sulawesi. Junto con la subducción de Halmahera, forma el sistema de doble subducción que está colapsando el Mar de Molucas. <b>Nota:</b> esta traza integra los datos del catálogo GEM y la trayectoria definida por Serhalawan &amp; Chen (2024) como segmento norte del sistema de convergencia; ambas fuentes describen la misma estructura, por lo que se unifican en una sola representación.',papers:[{ref:'GEM Foundation (2023)',title:'GEM Global Active Faults Database',journal:'github.com/GEMScienceTools/gem-global-active-faults',find:'Zona de subducción Sangihe — falla activa cuaternaria. Traza canónica utilizada en este mapa.'},{ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Segmento norte del sistema de convergencia (MST North) — interpretado como equivalente al frente de subducción Sangihe. Deduplicado con la traza GEM.'},{ref:'Yuan et al. (2024)',title:'Multiple slabs and complex mantle flows in the Molucca Sea',journal:'Geochem. Geophys. Geosyst., 25, e2024GC011500. doi:10.1029/2024GC011500',find:'Flujos mantélicos normal a la trinchera en cuña Sangihe a 200 km (Feature A). La losa Celebes (~250 km) actúa como barrera física para el flujo extruido del arco Banda.'}]},
  halmahera:{name:'Subducción de Halmahera',subducting:'Litósfera oceánica del Mar de Molucas',overriding:'Arco de Halmahera (placa del Pacífico occidental)',direction:'hacia el este',desc:'Rama oriental del sistema de doble subducción del Mar de Molucas: el piso oceánico subduce hacia el ESTE bajo el Arco de Halmahera. La traza superficial sigue la costa occidental de Halmahera. La losa alcanza 500-550 km de profundidad (100 km más que estimaciones previas).',papers:[{ref:'Yuan et al. (2024)',title:'Multiple slabs and complex mantle flows in the Molucca Sea',journal:'Geochem. Geophys. Geosyst., 25, e2024GC011500. doi:10.1029/2024GC011500',find:'Losa Halmahera: 500-550 km. Flujo toroidal alrededor de fragmento asísmico desprendido en el norte (Feature E).'},{ref:'GEM Foundation (2023)',title:'GEM Global Active Faults Database',journal:'github.com/GEMScienceTools',find:'Falla dextral costera occidental de Halmahera — interpretada aquí como frente de subducción.'}]},
  banda_n:{name:'Subducción de Banda — Arco interno',subducting:'Litósfera oceánica del Mar de Banda (Indo-Australiana)',overriding:'Arco interno de Banda (placa Euroasiática/Sunda)',direction:'hacia el norte',desc:'Subducción de litósfera oceánica Indo-Australiana hacia el norte bajo el arco interno de Banda. El proceso está controlado por el rollback del Arco de Banda desde el Mioceno Medio, que generó la extensión del Mar de Banda y la curvatura arcuada excepcional del arco. La losa está confinada al manto superior con una sección plana a profundidad intermedia. El perfil B-B\' (Hua et al., 2023) muestra inversión de polaridad entre el sector Timor (subducción N) y Seram (subducción S), con ambas ramas contactando en la zona de transición del manto. El Tolo Thrust es la terminación noroccidental del sistema.',papers:[{ref:'Hall & Spakman (2015)',title:'Mantle structure and tectonic history of SE Asia',journal:'Tectonophysics, 658, 14-45. doi:10.1016/j.tecto.2015.07.003',find:'Losa Banda confinada al manto superior. Rollback en Banda embayment jurásico desde el Mioceno Medio. Tear prominente al norte bajo Buru y Seram Oeste. Sección plana a profundidad intermedia incluyendo litosfera subcontinental delaminada.'},{ref:'Hua et al. (2023)',title:'P and S wave anisotropic tomography of the Banda subduction zone',journal:'Geophysical Research Letters, 50, e2023GL105611. doi:10.1029/2023GL105611',find:'Perfil B-B\' N-S: inversión de polaridad Timor (subducción N) / Seram (subducción S). Las dos ramas de la losa contactan en la zona de transición del manto formando estructura en cuña. Flujo trench-parallel único en cuña mantélica.'},{ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Cabalgamiento Tolo: terminación noroccidental del Banda rollback. Clusters de fallas normales perpendiculares en el brazo SE de Sulawesi por extensión trasarco del rollback Banda. Hall (2018): posible zona de iniciación de subducción futura.'}]},
  sunda:{name:'Subducción de Sunda',subducting:'Placa Indo-Australiana',overriding:'Placa Euroasiática (Plataforma de Sunda) / Arco de Banda',direction:'hacia el norte-noreste',desc:'La Placa Indo-Australiana subduce hacia el norte bajo la Plataforma de Sunda y el Arco de Banda. La Fosa de Java (~7.290 m) es la fosa más profunda del Océano Índico. Tasa de convergencia: ~6-7 cm/año en Sumatra, disminuyendo hacia el este.',papers:[{ref:'GEM Foundation (2023)',title:'GEM Global Active Faults Database',journal:'github.com/GEMScienceTools',find:'Fosa de Java y Arco de Banda — subducción activa cuaternaria.'},{ref:'Hayes et al. (2018)',title:'Slab2, a comprehensive subduction zone geometry model',journal:'Science, 362(6410), 58-61. doi:10.1126/science.aat4723',find:'Geometría 3D de la losa Indo-Australiana hasta >600 km de profundidad.'}]},
  philippines:{name:'Subducción de Filipinas / Cotabato',subducting:'Placa del Mar de Filipinas',overriding:'Arco de Filipinas (placa Euroasiática)',direction:'hacia el oeste',desc:'La Placa del Mar de Filipinas subduce hacia el oeste bajo el Arco de Filipinas. La Fosa de Cotabato al sur de Mindanao es la terminación meridional de este sistema y el límite norte del régimen de convergencia que influye en el extremo noreste del dominio de Sulawesi. La oblicuidad de la convergencia genera la Zona de Falla de Filipinas — una falla transcurrente dextral mayor que accomoda la componente paralela al arco. El sistema es geodinámicamente independiente de la subducción NST pero forma parte del marco de placas que condiciona la cinemática global de la región.',papers:[{ref:'Socquet et al. (2006)',title:'Microblock rotations and fault coupling in SE Asia triple junction',journal:'JGR: Solid Earth, 111(B8). doi:10.1029/2005JB003963',find:'Placa de Filipinas: convergencia oblicua hacia el oeste. La Zona de Falla de Filipinas accomoda la componente paralela al arco. El bloque Manado (norte de Sulawesi) rota en sentido horario influenciado por esta convergencia.'},{ref:'GEM Foundation (2023)',title:'GEM Global Active Faults Database',journal:'github.com/GEMScienceTools/gem-global-active-faults',find:'Fosa de Cotabato y sistema de subducción de Filipinas — zonas de subducción activas cuaternarias.'}]},
  generic:{name:'Zona de Subducción',subducting:'Placa oceánica',overriding:'Placa superior',direction:'variable',desc:'Zona de subducción activa (catálogo GEM). Los triángulos rellenos negros (simbología IUGS) señalan el bloque cabalgante (hanging wall).',papers:[{ref:'GEM Foundation (2023)',title:'GEM Global Active Faults Database',journal:'github.com/GEMScienceTools',find:'Base de datos global de fallas activas cuaternarias.'}]}
};

const tectSubLayer=new ol.layer.Vector({
  source:new ol.source.Vector({features:[
    // GEM Subduction_Thrust, excluyendo Halmahera (f7-f16), Sangihe (f17-f18,f37,f81-f106), corredor PKF (f25,f26), f38 (Makassar), sunda y banda_n (cubiertas por canon_1934)
    ...GEM_FAULTS.filter(f=>f.t&&f.t.includes('Subduction')&&!HALM_GEM_IDS.has(f.id)&&!SANG_GEM_IDS.has(f.id)&&!COTABATO_GEM_IDS.has(f.id)&&f.id!=='f25'&&f.id!=='f26'&&f.id!=='f38').flatMap(f=>{
      const c0=f.c[0]; const sz=getSubzone(f.id,c0[0],c0[1]);
      if(sz==='generic'||sz==='sunda'||sz==='banda_n'||sz==='philippines') return []; // cubiertos por canonicals
      return [new ol.Feature({geometry:new ol.geom.LineString(lc(f.c)),feat_id:f.id,feat_type:'subduction',fault_id:f.id,slip_type:f.t,subzone:sz})];
    }),
    // Subducción Halmahera — traza GEM f116, costa W de Halmahera, triángulos → ESTE (flip auto)
    new ol.Feature({geometry:new ol.geom.LineString(lc(HALM_SUB_COORDS)),feat_id:'halm_custom',feat_type:'subduction',fault_id:'halm_custom',subzone:'halmahera'}),
    // Subducción Sangihe — traza GEM f115 "halmahera_arc_faults", costa E del arco Sangihe, triángulos → OESTE (sub_flip:true)
    new ol.Feature({geometry:new ol.geom.LineString(lc(SANGIHE_SUB_COORDS)),feat_id:'sang_custom',feat_type:'subduction',fault_id:'sang_custom',subzone:'sangihe',sub_flip:true})
  ]}),
  style:subductionStyle
});

// PKF y Matano reemplazados por trazas Bird (2003) en birdKeyFaultLayer
const tectKeyLayer=new ol.layer.Vector({
  source:new ol.source.Vector({features:GEM_FAULTS.filter(f=>KEY_IDS.has(f.id)&&f.id!=='palu_koro'&&f.id!=='matano_w'&&f.id!=='matano_e').map(f=>{
    return new ol.Feature({geometry:new ol.geom.LineString(lc(f.c)),feat_id:f.id,feat_type:'key_fault',fault_id:f.id,slip_type:f.t});
  })}),
  style:keyFaultStyle
});
// Palu-Koro: GEM (13 pts, traza principal) + punto norte Bird (2003) — Matano: georref. Bird (2003)
const BIRD_PKF_MATANO=[
  {id:'palu_koro',fault_id:'palu_koro',c:[
    [120.351,-2.147],[120.213,-1.993],[120.094,-1.743],[120.002,-1.423],
    [119.882,-1.135],[119.836,-0.772],[119.744,-0.644],[119.744,-0.321],
    [119.425,0.221],[119.379,0.427],[119.346,0.834],[119.438,1.138],
    [119.438,1.836],[119.696,2.033]
  ]},
  {id:'matano_w',fault_id:'matano_w',c:[
    [122.7803,-2.5803],[122.223,-2.35],[121.728,-2.154],[121.234,-1.959],
    [120.811,-1.71],[120.388,-1.461],[119.896,-0.859],[119.5351,-0.1921]
  ]},
  {id:'matano_e',fault_id:'matano_e',c:[
    [122.7803,-2.5803],[123.187,-2.972],[123.51,-3.064],[123.739,-3.178],
    [123.926,-3.395],[124.031,-3.517],[124.078,-3.658],[124.078,-3.854],
    [123.964,-4.082],[123.891,-4.266],[123.647,-4.529]
  ]}
];
const birdKeyFaultLayer=new ol.layer.Vector({
  source:new ol.source.Vector({features:BIRD_PKF_MATANO.map(f=>
    new ol.Feature({geometry:new ol.geom.LineString(lc(f.c)),feat_id:f.id,feat_type:'key_fault',fault_id:f.fault_id})
  )}),
  style:keyFaultStyle
});



// ── BEACHBALL PIXEL RENDERER — hemisferio inferior proyección azimutal equidistante
// Criterio correcto dos planos nodales: colorear si (n·x)(l·x) > 0
// col = [r,g,b,a] con a en escala 0-1
function makeBeachballCanvas(s1,d1,rl,sz,col){
  const cv=document.createElement('canvas');
  cv.width=sz;cv.height=sz;
  const r=sz/2-0.5,cx=sz/2,cy=sz/2;
  const D=Math.PI/180,s=s1*D,d=d1*D,lam=rl*D;
  const nx_=-Math.sin(d)*Math.sin(s),ny_=Math.sin(d)*Math.cos(s),nz_=-Math.cos(d);
  const lx_=Math.cos(lam)*Math.cos(s)+Math.sin(lam)*Math.cos(d)*Math.sin(s);
  const ly_=Math.cos(lam)*Math.sin(s)-Math.sin(lam)*Math.cos(d)*Math.cos(s);
  const lz_=Math.sin(lam)*Math.sin(d);
  const ctx=cv.getContext('2d');
  const img=ctx.createImageData(sz,sz);
  for(let px=0;px<sz;px++)for(let py=0;py<sz;py++){
    const dx=(px-cx)/r,dy=(py-cy)/r;
    if(dx*dx+dy*dy>1)continue;
    const mag=Math.sqrt(dx*dx+dy*dy);
    let x3,y3,z3;
    if(mag<1e-6){x3=0;y3=0;z3=-1;}
    else{const a=mag*Math.PI/2;x3=dx/mag*Math.sin(a);y3=dy/mag*Math.sin(a);z3=-Math.cos(a);}
    const dN=nx_*x3+ny_*y3+nz_*z3;
    const dL=lx_*x3+ly_*y3+lz_*z3;
    const idx=(py*sz+px)*4;
    if(dN*dL>0){
      img.data[idx]=col[0];img.data[idx+1]=col[1];img.data[idx+2]=col[2];
      img.data[idx+3]=Math.round((col[3]||0.9)*255);
    }else{
      img.data[idx]=240;img.data[idx+1]=240;img.data[idx+2]=240;img.data[idx+3]=210;
    }
  }
  ctx.putImageData(img,0,0);
  ctx.beginPath();ctx.arc(cx,cy,r,0,2*Math.PI);
  ctx.strokeStyle='rgba(0,0,0,0.55)';ctx.lineWidth=0.8;ctx.stroke();
  return cv;
}

// Cache de iconos beachball renderizados (evita re-renderizar en cada frame)
const bbCache=new Map();
function beachballIcon(e,ft){
  const key=`${e.s1}_${e.d1}_${e.r1}_${e.de}_${e.mw}`;
  if(bbCache.has(key))return bbCache.get(key);
  const sz=Math.round(Math.max(10,Math.min(24,(e.mw-6.0)*7+10)));
  const col=depthColorArr(e.de);
  const cv=makeBeachballCanvas(e.s1,e.d1,e.r1,sz,col);
  const icon=new ol.style.Icon({src:cv.toDataURL(),scale:1,anchor:[0.5,0.5]});
  bbCache.set(key,icon);
  return icon;
}
// BEACHBALL panel — usa makeBeachballCanvas con tamaño del canvas
function drawBeachballPanel(cv,s1,d1,rl,color){
  const col=color.match(/[\d.]+/g).map(Number);
  const sz=cv.width;
  const rendered=makeBeachballCanvas(s1,d1,rl,sz,col);
  cv.getContext('2d').drawImage(rendered,0,0);
}

// ── CMT + USGS STYLES — dots (default, ligero) y beachballs (pesado, bajo demanda)

const _cmtCache=new Map();
function _cmtBucket(de){return de<33?0:de<70?1:de<150?2:de<300?3:4;}
function cmtDotStyle(f){
  const e=f.get('cmt_data');if(!e)return null;
  const r=Math.round(Math.max(3,Math.min(10,(e.mw-5.5)*2.5+3)));
  const k=_cmtBucket(e.de)*10+r;
  let s=_cmtCache.get(k);
  if(!s){
    s=new ol.style.Style({image:new ol.style.Circle({
      radius:r,fill:new ol.style.Fill({color:depthColor(e.de)}),
      stroke:new ol.style.Stroke({color:'rgba(0,0,0,0.5)',width:0.8})
    })});
    _cmtCache.set(k,s);
  }
  return s;
}
function cmtBBStyle(f){
  const type=f.get('feat_type');
  const e=f.get('cmt_data');if(!e)return null;
  return new ol.style.Style({image:beachballIcon(e,f.get('cmt_ft')||'O')});
}

const cmtLayer=new ol.layer.Vector({
  visible:false,
  source:new ol.source.Vector(),
  style:cmtDotStyle
});

// Clasificación PVMBG (Pratama et al. 2025 Fig. 4c + PVMBG oficial)
// A = muy activo con registros históricos, B = fumarolas/hidrotérmico activo, C = sin actividad actual
const PVMBG={'Awu':'A','Ruang':'A','Lokon-Empung':'A','Mahawu':'A','Soputan':'A','Karangetang':'A','Colo (Una-Una)':'A',
             'Gamalama':'A','Dukono':'A','Ibu':'A','Makian':'A','Banda Api':'A','Ternate':'A',
             'Tongkoko':'B','Ambang':'B','Tondano Caldera':'B','Sempu':'B',
             'Klabat':'C','Banua Wuhu':'C','Tidore':'C','Wurlali':'C','Teon':'C','Nila':'C','Serua':'C','Manuk':'C'};
const _volcCache={};
function volcStyleFn(f){
  const pt=f.get('volc_pvmbg')||'C';
  if(_volcCache[pt])return _volcCache[pt];
  const c=pt==='A'?'#ef4444':pt==='B'?'#f97316':'#94a3b8';
  const r=pt==='A'?9:pt==='B'?8:6;
  _volcCache[pt]=new ol.style.Style({image:new ol.style.RegularShape({
    fill:new ol.style.Fill({color:c}),
    stroke:new ol.style.Stroke({color:'rgba(0,0,0,0.5)',width:0.5}),
    points:3,radius:r,angle:0
  })});
  return _volcCache[pt];
}
const volcLayer=new ol.layer.Vector({
  visible:false,
  source:new ol.source.Vector({features:GVP_VOLCANOES.map(v=>new ol.Feature({
    geometry:new ol.geom.Point(fromLL([v.lon,v.lat])),
    feat_id:'volcano',feat_type:'volcano',
    volc_name:v.name,volc_type:v.type,volc_elev:v.elev,volc_arc:v.arc,
    volc_pvmbg:PVMBG[v.name]||'C'
  }))}),
  style:volcStyleFn
});

// SEISMIC STATIONS — IRIS FDSN (IA + GE networks) con fallback estático
const stationSource=new ol.source.Vector();
const stationLayer=new ol.layer.Vector({
  visible:false,
  source:stationSource,
  style:new ol.style.Style({image:new ol.style.RegularShape({
    fill:new ol.style.Fill({color:'rgba(96,165,250,0.85)'}),
    stroke:new ol.style.Stroke({color:'rgba(0,0,0,0.5)',width:1}),
    points:3,radius:8,angle:Math.PI   // triángulo invertido = estación sismológica
  })})
});
fetch('/api/stations')
  .then(r=>r.json())
  .then(d=>{
    stationSource.addFeatures(d.features.map(f=>new ol.Feature({
      geometry:new ol.geom.Point(fromLL([f.geometry.coordinates[0],f.geometry.coordinates[1]])),
      feat_type:'station',feat_id:'_station',
      sta_code:f.properties.code,
      sta_name:f.properties.name,
      sta_net: f.properties.network,
    })));
  }).catch(()=>{});

// Campos geotérmicos — GeoJSON estático (Lahendong, Leilem, Kotamobagu, Tanjung Api)
const geothSource=new ol.source.Vector();
const geothLayer=new ol.layer.Vector({
  visible:false,
  source:geothSource,
  style:f=>{
    const st=f.get('geoth_status')||'';
    const c=st==='operacional'?'#f59e0b':st==='prospecto'?'#a78bfa':'#22d3ee';
    return new ol.style.Style({image:new ol.style.RegularShape({
      fill:new ol.style.Fill({color:c}),
      stroke:new ol.style.Stroke({color:'rgba(0,0,0,0.5)',width:1}),
      points:4,radius:8,angle:Math.PI/4  // diamante = campo geotérmico
    })});
  }
});
fetch('fuentes/geothermal_fields_sulawesi.geojson')
  .then(r=>r.json())
  .then(d=>{
    geothSource.addFeatures(d.features.map(f=>new ol.Feature({
      geometry:new ol.geom.Point(fromLL(f.geometry.coordinates)),
      feat_type:'geoth_field',feat_id:f.properties.id,
      geoth_name:f.properties.name,
      geoth_status:f.properties.status,
      geoth_mwe:f.properties.capacity_mwe,
      geoth_note:f.properties.note,
    })));
  }).catch(()=>{});

// GPS velocidades — GeoJSON estático (compilado de Socquet 2006, Walpersdorf 1998, BMKG CORS)
const gpsSource=new ol.source.Vector();
const GPS_COL='rgba(34,197,94,0.92)';   // verde — velocidades medidas
const gpsLayer=new ol.layer.Vector({
  visible:false,
  source:gpsSource,
  style:(f,resolution)=>{
    const ve=f.get('gps_ve')||0, vn=f.get('gps_vn')||0;
    const mag=Math.sqrt(ve*ve+vn*vn);
    const az=Math.atan2(ve,vn);
    const pxLen=Math.max(6,Math.min(22,mag*0.35));
    const arrowM=pxLen*(resolution||1);
    const dx=Math.sin(az)*arrowM, dy=Math.cos(az)*arrowM;
    return [
      new ol.style.Style({image:new ol.style.Circle({radius:4,
        fill:new ol.style.Fill({color:GPS_COL}),
        stroke:new ol.style.Stroke({color:'rgba(0,0,0,0.4)',width:0.8})})}),
      new ol.style.Style({geometry:g=>{
        const c=g.getGeometry().getCoordinates();
        return new ol.geom.LineString([c,[c[0]+dx,c[1]+dy]]);
      },stroke:new ol.style.Stroke({color:GPS_COL,width:2})})
    ];
  }
});

// Velocidades de placa — NNR-MORVEL56 calculadas desde Euler poles (DeMets et al. 2010)
const plateVelSource=new ol.source.Vector();
const PLATE_COL='rgba(56,189,248,0.84)';  // azul cielo — velocidades derivadas geológicamente (MORVEL56)
const plateVelLayer=new ol.layer.Vector({
  visible:false,
  source:plateVelSource,
  style:(f,resolution)=>{
    const mag=f.get('pv_mag')||0;
    const dotOnly=mag<2;
    const az=Math.atan2(f.get('pv_ve')||0, f.get('pv_vn')||0);
    const pxLen=Math.max(12,Math.min(36,mag*0.35));
    const arrowM=pxLen*(resolution||1);
    const dx=Math.sin(az)*arrowM, dy=Math.cos(az)*arrowM;
    const styles=[new ol.style.Style({image:new ol.style.Circle({radius:4,
      fill:new ol.style.Fill({color:PLATE_COL}),
      stroke:new ol.style.Stroke({color:'rgba(0,0,0,0.5)',width:0.8})})})];
    if(!dotOnly){
      // shaft
      styles.push(new ol.style.Style({geometry:g=>{
        const c=g.getGeometry().getCoordinates();
        return new ol.geom.LineString([c,[c[0]+dx,c[1]+dy]]);
      },stroke:new ol.style.Stroke({color:PLATE_COL,width:2.2})}));
      // arrowhead — two lines at ±30° from tail direction
      const headLen=arrowM*0.32;
      const ang1=az+Math.PI*5/6, ang2=az-Math.PI*5/6;
      styles.push(new ol.style.Style({geometry:g=>{
        const c=g.getGeometry().getCoordinates();
        const tip=[c[0]+dx,c[1]+dy];
        return new ol.geom.MultiLineString([
          [tip,[tip[0]+Math.sin(ang1)*headLen,tip[1]+Math.cos(ang1)*headLen]],
          [tip,[tip[0]+Math.sin(ang2)*headLen,tip[1]+Math.cos(ang2)*headLen]],
        ]);
      },stroke:new ol.style.Stroke({color:PLATE_COL,width:2.2})}));
    }
    return styles;
  }
});
fetch('fuentes/plate_velocities_morvel.geojson')
  .then(r=>r.json())
  .then(d=>{
    plateVelSource.addFeatures(d.features.map(f=>new ol.Feature({
      geometry:new ol.geom.Point(fromLL(f.geometry.coordinates)),
      feat_type:'plate_vel',feat_id:'plate_vel',
      pv_plate:f.properties.pv_plate,
      pv_name:f.properties.pv_name,
      pv_ve:f.properties.pv_ve,
      pv_vn:f.properties.pv_vn,
      pv_mag:f.properties.pv_mag,
      pv_az:f.properties.pv_az,
      pv_label:f.properties.pv_label,
      pv_ref:f.properties.pv_ref,
    })));
  }).catch(()=>{});

fetch('fuentes/gps_velocities_sulawesi.geojson')
  .then(r=>r.json())
  .then(d=>{
    gpsSource.addFeatures(d.features.map(f=>new ol.Feature({
      geometry:new ol.geom.Point(fromLL([f.geometry.coordinates[0],f.geometry.coordinates[1]])),
      feat_type:'gps_vel',feat_id:'gps_vel',
      gps_station:f.properties.station,
      gps_ve:f.properties.Ve_mmyr,
      gps_vn:f.properties.Vn_mmyr,
      gps_source:f.properties.source,
      gps_note:f.properties.note,
    })));
  }).catch(()=>{});


// Capa merged_geom (fe_15) — declaración aquí para que layerObjs pueda referenciarla
const mergedGeomSource=new ol.source.Vector();

// Canon → capa anfitriona en layerObjs (controla visibilidad de merged_geom)
// Canons sin entrada aquí (basins) usan el toggle global merged_geoms
const CANON_HOST_LAYER={
  // Faults → tect_key
  canon_5:'tect_key',canon_19:'tect_key',canon_100:'tect_key',
  canon_116:'tect_key',canon_286:'tect_key',canon_287:'tect_key',
  canon_288:'tect_key',canon_289:'tect_key',canon_789:'tect_key',
  canon_1010:'tect_key',canon_1921:'tect_key',canon_1929:'tect_key',
  canon_1927:'tect_key',canon_1933:'tect_key',
  // Subduction → tect_sub
  canon_364:'tect_sub',canon_369:'tect_sub',canon_805:'tect_sub',
  canon_1919:'tect_sub',canon_1934:'tect_sub',
  // Jibran clusters → clusters
  canon_jib_01:'clusters',canon_jib_02:'clusters',canon_jib_03:'clusters',
  canon_jib_04:'clusters',canon_jib_05:'clusters',canon_jib_06:'clusters',
  canon_jib_07:'clusters',canon_jib_08:'clusters',canon_jib_09:'clusters',canon_jib_10:'clusters',
  // Volcanoes → volcanoes
  canon_vol_ambang:'volcanoes',canon_vol_awu:'volcanoes',canon_vol_lahendong:'volcanoes',
  canon_vol_lokon:'volcanoes',canon_vol_ruang:'volcanoes',canon_vol_tondano:'volcanoes',canon_vol_unauna:'volcanoes',
  // Pull-apart basin PKF → toggle propio S6
  canon_basin_palu:'palu_basin',
  // Ofiolitas → toggle propio S7
  canon_eso:'ofiolitas',
  // Complejos metamórficos → toggle propio S7
  canon_pmc:'core_complexes',canon_csmb:'core_complexes',canon_mmc:'core_complexes',
  // Frentes de colisión (suturas de microcontinentes) → toggle propio S7
  canon_205:'frentes_colision',canon_1928:'frentes_colision',
  // Orógenos colisionales (zona de colisión de microcontinentes) → toggle propio S7
  canon_orogen_bsm:'orogenos_colisionales',canon_orogen_btb:'orogenos_colisionales',
};

function canonHostVisible(canonId){
  const key=CANON_HOST_LAYER[canonId];
  if(!key) return basinLayerVisible; // basins: controlled by cuencas toggle flag
  if(typeof layerObjs==='undefined') return true;
  const h=layerObjs[key];
  return h?h.getVisible():true;
}

// Sección de la monografía a la que pertenece cada layer_type
// Sección a la que pertenece cada layer_type en mergedGeomLayer
const CANON_LT_SECTION={
  'subduction_zone':    ['1','6'],
  'fault':              ['6'],
  'basin':              ['1'],
  'structure':          ['2'],
  'slab_geometry':      ['3'],   // Banda Slab, Sula Slab
  'volcano':            ['5'],
  'geophysical_point':  ['1','3'],
  'ophiolite':          ['7'],
  'volcanic_arc':       ['7'],
  'terrane':            ['7'],
  'igneous_body':       ['7'],
  'metamorphic_complex':['7'],
};
// Cinemática por canonical — misma lógica que KEY_FAULTS pero para merged_geom
// flip: para thrusts, controla el lado de los dientes (true=izq del sentido de la traza)
// sub_flip: para subducción, pasa a subductionStyle() directamente
const CANON_KIN={
  // Transcurrente
  'canon_5':   {sym:'sinistral',w:2.5},         // PKF — coordenadas S→N, flechas OK
  'canon_19':  {sym:'sinistral',w:2.0},         // Matano — W→E
  'canon_100': {sym:'sinistral',w:1.6},         // Lawanopo — W→E
  'canon_116': {sym:'dextral',  w:1.5},         // Kolaka — NW→SE, oblique dextral

  'canon_789': {sym:'dextral',  w:1.8},         // Gorontalo — SE→NW

  'canon_1921':{sym:'sinistral',w:2.2},         // Sorong — W→E, sinistral (escala de placa)
  'canon_1929':{sym:'sinistral',w:1.8},         // Sorong ramal sur — W→E, sinistral
  'canon_1933':{sym:'dextral',  w:1.6},         // Balantak — W→E
  // Thrusts — flip:true pone dientes a la izquierda del sentido de digitalización
  'canon_205': {sym:'thrust',w:1.8,flip:true},  // Batui — NE, vergencia NW → dientes NW (flip:true)
  'canon_286': {sym:'thrust',w:1.8,flip:true},  // MST North — N→S, vergencia E → dientes E (flip:true)
  'canon_287': {sym:'thrust',w:1.6,flip:true},  // MST Central-N — N→S, vergencia E
  'canon_288': {sym:'thrust',w:1.8,flip:true},  // MST Mamuju — N→S, vergencia E
  'canon_289': {sym:'thrust',w:1.8,flip:true},  // MST Somba — N→S, vergencia E
  'canon_1010':{sym:'thrust',w:2.0,flip:false}, // Tolo — E→W, vergencia W (flip:false)
  'canon_1927':{sym:'thrust',w:1.6,flip:true},  // EWF — N→S, vergencia E
  'canon_1928':{sym:'thrust',w:1.6,flip:false}, // Buton — N→S, vergencia W
  // Subducción — sub_flip pasado a subductionStyle
  'canon_364': {sym:'subduction',sub_flip:false}, // NST — coords W→E, dientes al S (placa cabalgante S)
  'canon_369': {sym:'subduction',sub_flip:true},   // Sangihe — dientes al O
  'canon_805': {sym:'subduction',sub_flip:false},  // Halmahera — dientes al E
  'canon_1919':{sym:'subduction',sub_flip:false},  // Philippine Trench / Cotabato
  'canon_1934':{sym:'subduction',sub_flip:true},   // Banda SZ — coords W→E, dientes al N
};
const _canonPolyCache=new Map();
function mergedGeomStyleFn(f, resolution){
  const cid=f.get('id')||'';
  const geom=f.getGeometry();
  if(!geom) return null;
  const gt=geom.getType();
  const lt=f.get('layer_type')||'';
  // Visibilidad controlada por capa anfitriona
  if(!canonHostVisible(cid)) return null;
  // Filtro por sección activa — se omite si el canonical tiene toggle anfitrión explícito y está visible
  if(activeSection){
    const secs=CANON_LT_SECTION[lt]||[];
    if(!secs.includes(activeSection)){
      // Excepción: canonical con host layer explícito (no cuencas) → sigue a canonHostVisible, no a la sección
      if(!CANON_HOST_LAYER[cid]) return null;
    }
  }
  if(gt==='Point'){
    // Estructuras Tipo H simplificadas a punto (ej. core complexes, ofiolitas, bahías)
    const col=(typeof PETROTECT_COLORS!=='undefined'&&PETROTECT_COLORS[lt])||'#888';
    return new ol.style.Style({
      image:new ol.style.Circle({radius:6,fill:new ol.style.Fill({color:col}),stroke:new ol.style.Stroke({color:'#111',width:1.5})}),
      text:new ol.style.Text({text:f.get('name')||'',font:'bold 10px monospace',fill:new ol.style.Fill({color:col}),stroke:new ol.style.Stroke({color:'rgba(20,20,19,.8)',width:3}),offsetY:-12,overflow:true,placement:'point'})
    });
  }
  const kin=CANON_KIN[cid];
  // Subducción — usa sub_flip explícito de CANON_KIN; si no hay entrada, heurística de subductionStyle
  if(lt==='subduction_zone'||(kin&&kin.sym==='subduction')){
    if(kin&&kin.sub_flip!=null) f.set('sub_flip',kin.sub_flip);
    return subductionStyle(f, resolution);
  }
  if(!kin) {
    if(gt==='Polygon'||gt==='MultiPolygon'){
      if(_canonPolyCache.has(cid)) return _canonPolyCache.get(cid);
      let _ps;
      // S7/S8 — estilo canónico petrotect (reemplaza a petrotectLayer)
      const petrotectTypes=['ophiolite','volcanic_arc','terrane','igneous_body','metamorphic_complex'];
      if(petrotectTypes.includes(lt)){
        const col=PETROTECT_COLORS[lt]||'#555';
        _ps=[
          new ol.style.Style({stroke:new ol.style.Stroke({color:col,width:1.5}),fill:new ol.style.Fill({color:col+'28'})}),
          new ol.style.Style({text:new ol.style.Text({text:f.get('name')||'',font:'bold 10px monospace',fill:new ol.style.Fill({color:col}),stroke:new ol.style.Stroke({color:'rgba(20,20,19,.8)',width:3}),overflow:true,placement:'point'})})
        ];
      } else if(lt==='slab_geometry'){
        // Slabs (S3): polígono semitransparente púrpura
        _ps=new ol.style.Style({fill:new ol.style.Fill({color:'rgba(112,96,176,0.12)'}),stroke:new ol.style.Stroke({color:'#7060b0',width:1.2,lineDash:[6,4]})});
      } else if(lt==='structure'){
        // Clusters Jibran (S2): paleta por régimen tectónico
        const nm=f.get('name')||'';
        const regime=nm.toLowerCase().includes('compresional')?'compressional':
                     nm.toLowerCase().includes('transformante')?'transform':'extensional';
        const c=regime==='compressional'?'#c85040':regime==='transform'?'#c89040':'#4888cc';
        _ps=new ol.style.Style({fill:new ol.style.Fill({color:c+'28'}),stroke:new ol.style.Stroke({color:c,width:1.5,lineDash:[5,3]})});
      } else {
        _ps=new ol.style.Style({stroke:new ol.style.Stroke({color:'#111',width:1,lineDash:[5,4]}),fill:new ol.style.Fill({color:'rgba(0,0,0,0.03)'})});
      }
      _canonPolyCache.set(cid,_ps);
      return _ps;
    }
    if(gt==='LineString')
      return new ol.style.Style({stroke:new ol.style.Stroke({color:'#111',width:1.5,lineDash:[4,3]})});
    return null;
  }
  const coords=gt==='LineString'?geom.getCoordinates():null;
  if(!coords) return null;
  const styles=[new ol.style.Style({geometry:geom,stroke:new ol.style.Stroke({color:'#111',width:kin.w,lineCap:'round'})})];
  if(kin.sym==='sinistral') styles.push(...strikeslipArrows(coords,resolution,true));
  else if(kin.sym==='dextral') styles.push(...strikeslipArrows(coords,resolution,false));
  else if(kin.sym==='thrust'){
    const flip=kin.flip===true;
    const sz=resolution*7, step=Math.max(2,Math.round(coords.length/5));
    for(let i=0;i<coords.length-1;i+=step){
      const poly=toothPolygon(coords[i],coords[i+1],sz,flip);
      if(poly) styles.push(new ol.style.Style({geometry:new ol.geom.Polygon([poly]),fill:new ol.style.Fill({color:'rgba(0,0,0,0)'}),stroke:new ol.style.Stroke({color:'#111',width:1.2})}));
    }
  }
  return styles;
}
// mergedGeomLayer siempre visible — visibilidad por canonical controlada en mergedGeomStyleFn
const mergedGeomLayer=new ol.layer.Vector({source:mergedGeomSource,visible:true,zIndex:50,style:mergedGeomStyleFn});
let basinLayerVisible=false; // flag para toggle cuencas (basins sin host layer específico) — activo solo en S7
let _paluBasinVis=false;   // Cuenca Pull-Apart de Palu — S6
let _ofiolitasVis=false;   // Ofiolitas — S7
let _coreComplexVis=false; // Complejos metamórficos — S7
let _frentesColisionVis=true;  // Frentes de colisión (Batui, Buton) — S7 — ON por defecto
let _orogenosColisVis=false;   // Orógenos colisionales (Banggai-Sula, Buton-Tukang Besi) — S7

// Etiquetas de canonicals con merged_geom tipo Point (bahías, cuencas, unidades geológicas)
const canonLabelSource=new ol.source.Vector();
const CANON_LABEL_STYLE={
  fault:          {color:'rgba(255,200,120,0.95)', size:10, bold:true},
  subduction_zone:{color:'rgba(120,200,255,0.95)', size:10, bold:true},
  fold_thrust_belt:{color:'rgba(230,180,100,0.90)',size:9,  bold:false},
  structure:      {color:'rgba(160,200,140,0.85)', size:9,  bold:false},
  slab_geometry:  {color:'rgba(180,150,230,0.90)', size:9,  bold:false},
  ophiolite:      {color:'rgba(80,200,140,0.95)',  size:10, bold:true},
  volcanic_arc:   {color:'rgba(200,100,100,0.95)', size:10, bold:true},
  terrane:        {color:'rgba(200,180,80,0.95)',  size:10, bold:true},
  metamorphic_complex:{color:'rgba(180,120,220,0.95)',size:10,bold:true},
  volcano:        {color:'rgba(251,146,60,0.95)',  size:10, bold:true},
  basin:          {color:'rgba(100,180,220,0.80)', size:9,  bold:false},
};
const canonLabelLayer=new ol.layer.Vector({
  source:canonLabelSource,
  style:feat=>{
    const lt=feat.get('layer_type')||'fault';
    const cfg=CANON_LABEL_STYLE[lt]||{color:'rgba(220,210,185,0.9)',size:10,bold:true};
    return new ol.style.Style({
      text:new ol.style.Text({
        text:feat.get('canon_name')||'',
        font:`${cfg.bold?'bold ':''} ${cfg.size}px monospace`,
        fill:new ol.style.Fill({color:cfg.color}),
        stroke:new ol.style.Stroke({color:'rgba(0,0,0,0.80)',width:3}),
        overflow:true,
        placement:'point'
      })
    });
  },
  zIndex:55
});

