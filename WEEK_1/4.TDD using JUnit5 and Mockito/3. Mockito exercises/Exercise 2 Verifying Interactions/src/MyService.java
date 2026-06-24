
public class MyService {
	private ExternalApi Api;
	public MyService(ExternalApi Api){
		this.Api=Api;
	}
	public String fetchData(){
		return Api.getData();
	}
}
