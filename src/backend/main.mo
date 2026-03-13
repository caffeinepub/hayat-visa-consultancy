import List "mo:core/List";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
  };

  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, email : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      phone;
      email;
      message;
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray();
  };
};
